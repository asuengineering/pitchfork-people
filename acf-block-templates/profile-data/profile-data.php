<?php
/**
 * UDS Profile (Manual)
 * - All fields are represented in the block, except individual social media icons.
 * - The rendered profile size is controled by block style panel.
 *
 * @package Pitchfork_People
 */

/**
 * Get ACF fields.
 */
$asurite = get_field( 'uds_profiledata_asuriteid' );

/**
 * Determine where to gather information about the profile.
 *
 * 1. If the ASURITE ID is incomplete, don't bother looking. Use pre-fab default object and display.
 * 2. If block has block context and the correct API results are returned, use the returned results.
 * 3. Otherwise, fall back to calling the API for the single profile info.
 */

if (strlen($asurite) >= 4 ) {

	// Checking for block context.
	$api_results = $context['acf/fields']['uds_profiles_query_results'];
	$results = $api_results->results;

	// Scan block context object and look for specific ASURITE ID.
	$needle = -1;
	foreach ($results as $index => $result) {
		if (isset($result->asurite_id->raw) && $result->asurite_id->raw === $asurite) {
			$needle = $index;
		}
	}

	if ($needle !== -1) {
		// do_action('qm/debug', 'Found in haystack. Saved an API call.');
		$asurite_details = $results[$needle];
	} else {
		// do_action('qm/debug', 'Results need to be obtained individually.');
		$asurite_details = get_asu_search_single_profile_results($asurite);
	}

} else {
	// The ASURITE ID ACF field failed to meet parameters.
	// do_action('qm/debug', 'This is the parameter fail logic.');

	$asurite_details = pfpeople_fake_asurite_data();
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
 * Render the block
 */
$profile  = '<div class="' . implode( ' ', $block_classes ) . '" style="' . $spacing . '">';

// Display a default image if there is none available. Omit if this class is missing.
if ( in_array( 'has-default-img', $block_classes ) ) {
	$profile .= pfpeople_disply_profile_image($asurite_details, true);
} else {
	$profile .= pfpeople_disply_profile_image($asurite_details, false);
}

$profile .= '<div class="person">';
$profile .= pfpeople_card_displayname($asurite_details, $display_size);

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
		$profile .= pfpeople_card_profile_contacts($asurite_details);
		$profile .= pfpeople_card_description( $asurite_details, $display_size );
		break;
	case 'large':
		// 'Large' is the deluxe and adds full contact, short bio, and social media links.
		$profile .= pfpeople_card_profile_contacts($asurite_details);
		$profile .= pfpeople_card_description( $asurite_details, $display_size );
		$profile .= pfpeople_card_social_icons( $asurite_details );# code...
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

