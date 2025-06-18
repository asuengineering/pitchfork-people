<?php
/**
 * UDS Profile (Data)
 * - All fields are represented in the block, except individual social media icons.
 * - The rendered profile size is controled by block style panel.
 *
 * @package Pitchfork_People
 */

/**
 * Get ACF fields.
 */
$asurite 		= get_field( 'uds_profiledata_asuriteid' );
$show_phone 	= get_field( 'uds_profiledata_show_phone' );
$show_location 	= get_field( 'uds_profiledata_show_location' );
$show_social 	= get_field( 'uds_profiledata_show_social' );
$show_email 	= get_field( 'uds_profiledata_show_email' );
$title_override = get_field( 'uds_profiledata_title_override' );

/**
 * Determine where to gather information about the profile.
 *
 * 1. If the ASURITE ID is incomplete, don't bother looking. Use pre-fab default object and display.
 * 2. If block has block context and the correct API results are returned, use the returned results.
 * 3. Otherwise, fall back to calling the API for the single profile info.
 */

$asurite_details = array();

if (strlen($asurite) < 4 ) {

	// Not enough information to render an actual profile.
	$asurite_details = pfpeople_fake_asurite_data();

} else {

	if ( $is_preview ) {

		// Data stored in the transient is possibly not available in preview mode.
		// Go ahead and render this single block using a direct API call.

		do_action('qm/debug', 'Preview mode. Getting profile details for ' . $asurite . ' directly.');
		$asurite_details = get_asu_search_single_profile_results($asurite);

	} else {

		// Fancy rendering from transient if there's data available. Saves API calls.

		$cache_key = $context['uds_profiles/query_cache_key'] ?? '';

		if ( $cache_key ) {

			$cached_results = get_transient( $cache_key );

			// Scan transient object and look for specific ASURITE ID.
			if ( ! empty( $cached_results->results ) && is_array( $cached_results->results ) ) {

				foreach ($cached_results->results as $index => $result) {
					if (isset($result->asurite_id->raw) && $result->asurite_id->raw === $asurite) {
						do_action('qm/debug', 'Found ' . $asurite . ' in haystack at position ' . $index . '. Saved an API call.');
						$asurite_details = $result;
						break; // Stop searching
					}
				}

				// Results not found in transient data. Go get it individually.
				if (empty($asurite_details)) {
					do_action('qm/debug', 'Results for ' . $asurite . ' not found in transient data. Fetching individually.');
					$asurite_details = get_asu_search_single_profile_results($asurite);
				}


			} else {

					do_action('qm/debug', 'Transient data could not be processed? Running individual query.');
					$asurite_details = get_asu_search_single_profile_results($asurite);

			}

		} else {

			do_action('qm/debug', 'No cache key available. Possibly no parent block? Getting individual results.');
			$asurite_details = get_asu_search_single_profile_results($asurite);

		}
	}
}

/**
 * Retrieve spacing settings from editor.
 */
$spacing = pitchfork_people_acf_calculate_spacing( $block );

/**
 * Retrieve additional classes from the 'advanced' field in the editor for inline styles.
 * Explode given string into an array so we can search it later.
 */
$block_class_string = 'uds-person-profile';
if ( ! empty( $block['className'] ) ) {
	$block_class_string .= ' ' . $block['className'];
}
$block_classes = explode( ' ', $block_class_string );

/**
 * Parse the appropriate size from $block['className'].
 * Store the size value in a separate variable to make render script easier.
 * Setting default size to small in case the control is empty. (Initial state?)
 */

$display_size = 'small';
if ( in_array( 'is-style-large', $block_classes ) ) {
	$display_size = 'large';
}
if ( in_array( 'is-style-small', $block_classes ) ) {
	$display_size = 'small';
}
if ( in_array( 'is-style-micro', $block_classes ) ) {
	$display_size = 'micro';
}
if ( in_array( 'is-style-vertical', $block_classes ) ) {
	$display_size = 'vertical';
}

/**
 * Check to see if there is a background color selected.
 * Block requires a "fill" class as the only possible modification to the bg.
 */
if ( ! empty( $block['backgroundColor'] ) ) {
	$block_classes[] = $block['backgroundColor'];
}

/**
 * Begin process of rendering the block.
 * Default profile image handled at the API level within function call.
 */
$profile  = '<div class="' . implode( ' ', $block_classes ) . '" style="' . $spacing . '">';
$profile .= pfpeople_disply_profile_image($asurite_details);
$profile .= '<div class="person">';

/**
 * Get name, title, department info.
 * Department override selection comes from block context of parent acf/profiles block.
 */
if (isset($context['acf/fields']['uds_profiles_select_dept'])) {
	$dept_override = $context['acf/fields']['uds_profiles_select_dept'];
} else {
	$dept_override = false;
}
$profile .= pfpeople_card_displayname($asurite_details, $display_size, $dept_override, $title_override);

/**
 * All profile sizes render: image, name, title, department, and email when
 * those items are provided. Different sizes will add to, or alter, that basic
 * list of information.
 *
 * Here we test for those sizes and add/modify accordingly. Since the micro
 * does not add anything to the default list, it is not included here.
 */
switch ($display_size) {
	case 'small':
		// 'Small' is the normal size and adds full contact and short bio information.
		$profile .= pfpeople_card_profile_contacts($asurite_details, $show_location, $show_phone, $show_email);
		$profile .= pfpeople_card_description( $asurite_details, $display_size );
		break;
	case 'large':
		// 'Large' is the deluxe and adds full contact, short bio, and social media links.
		$profile .= pfpeople_card_profile_contacts($asurite_details, $show_location, $show_phone, $show_email);
		$profile .= pfpeople_card_description( $asurite_details, $display_size );
		if ( $show_social ) {
			$profile .= pfpeople_card_social_icons( $asurite_details );
		}
		break;
	case 'vertical':
		// 'Vertical' is not accounted for the default rendering code.
		// Calls its own function to add only an email link below name and department.
		$profile .= pfpeople_card_email_only( $asurite_details );
	default:
		break;
}

$profile .= '</div></div>';
echo $profile;

