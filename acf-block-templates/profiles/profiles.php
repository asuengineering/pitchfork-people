<?php
/**
 * UDS Profiles
 * - Creates a wrapper for acf/profile-manual and (data block) to organize the profiles
 * - into a grid. Suitable for building an ad-hoc direectory page.
 *
 * @package Pitchfork_People
 */

$columns = get_field( 'uds_profiles_columns' );
$prefer_dept = get_field( 'uds_profiles_select_dept' );

$spacing = pitchfork_people_acf_calculate_spacing( $block );

/**
 * Retrieve additional classes from the 'advanced' field in the editor for inline styles.
 * Explode given string into an array so we can search it later.
 */
$block_classes = array( 'uds-profile-grid', $columns );
if ( ! empty( $block['className'] ) ) {
	$block_classes[] = $block['className'];
}

// Sets InnerBlocks with both a profile-manual and a profile-data card for duplication.
$allowed_blocks = array( 'acf/profile-manual', 'acf/profile-data' );
$template       = array(
	array(
		'acf/profile-manual',
		array(
			'backgroundColor' => 'fill-white',
		),
	),
	array(
		'acf/profile-data',
		array(
			'backgroundColor' => 'fill-white',
		),
	),
);

// Build the profile container.
$profile  = '<div class="' . implode( ' ', $block_classes ) . '" style="' . $spacing . '">';
$profile .= '<InnerBlocks allowedBlocks="' . esc_attr( wp_json_encode( $allowed_blocks ) ) . '" template="' . esc_attr( wp_json_encode( $template ) ) . '" />';
$profile .= '</div>';

echo $profile;


