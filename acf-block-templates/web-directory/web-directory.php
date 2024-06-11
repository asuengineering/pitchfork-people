<?php
/**
 * UDS Web Directory
 *
 * Single block with two display types supported.
 * - 1. Web directory by department ID.
 * - 2. Faculty Rank web directory
 *
 * TODO: Web directory by ASURITE ID + Dept ID (people) & the combination of everything (people_directory)
 *
 * Support for the selection of multiple department IDs implemented by a standard ACF multi-select field.
 *
 * @package Pitchfork_Blocks
 */


/**
 * Get ACF fields and profile data from Search endpoint.
 */
$display 			= get_field( 'uds_webdir_display' );
$department_ids 	= get_field( 'uds_webdir_select_dept' );
$pagination 		= get_field( 'uds_webdir_profiles_per_page' );
$alpha 				= get_field( 'uds_webdir_include_alpha' );
$exclude			= get_field( 'uds_webdir_filter_exclude' );
$expertise			= get_field( 'uds_webdir_filter_expertise' );
$employee_type		= get_field( 'uds_webdir_filter_employee_type' );
$campus				= get_field( 'uds_webdir_filter_campus' );

$spacing = pitchfork_people_acf_calculate_spacing( $block );

/**
 * Split arrays generated by multiselect select boxes.
 * Convert to comma delineated string.
 */
// Split the array generated by the multiselect department ids. Convert to string.
$dept_string = implode(',' , $department_ids);
$expertise_string = implode(',' , $expertise);
$employee_string = implode(',' , $employee_type);

// Assemble data attributes for block markup.
$data_attributes = array();
$data_attributes[] = 'data-searchType="' . $display . '"';
$data_attributes[] = 'data-depts="' . $dept_string . '"';
$data_attributes[] = 'data-pagination="' . $pagination . '"';

if ( ! empty ( $exclude ) ) {
	$data_attributes[] = 'data-exclude="' . $exclude . '"';
}

if ( ! empty ( $expertise_string ) ) {
	$data_attributes[] = 'data-expertise="' . $expertise_string . '"';
}

if ( ! empty ( $employee_string ) ) {
	$data_attributes[] = 'data-employeeType="' . $employee_string . '"';
}

if ( ! empty ( $campus ) ) {
	$data_attributes[] = 'data-campus="' . $campus . '"';
}

// Convert boolean control to "true" or "false" strings for react props.
if ( $alpha ) {
	$data_attributes[] = 'data-alphaFilter="true"';
} else {
	$data_attributes[] = 'data-alphaFilter="false"';
}

// Prep for insertion into HTML output
$attributes = implode(' ', $data_attributes);

/**
 * API call to obtain info for display within block editor.
 * (The API call to display on the front end initated via React component.)
 * Sort results alphabetical by last name
 */
$api_results = get_asu_directory_people_list($dept_string);
usort($api_results, function($a, $b) {
	return strcmp($a->last_name->raw, $b->last_name->raw);
});

/**
 * Print results within the block editor.
 * Format for easy scaning for exclude by name filter.
 */
$resultlist = '<div class="resultlist">';
foreach ($api_results as $result) {
	// $resultlist .= $result->display_name->raw . ' (' . $result->asurite_id->raw . '), ';
	// do_action('qm/debug', $result->asurite_id->raw);
	// do_action('qm/debug', $result->display_name->raw);
	//
	$resultlist .= '<div class="result"><h4>' . $result->display_name->raw . '</h4>';
	$resultlist .= '<p>' . $result->asurite_id->raw . '</p></div>';
}

// do_action('qm/debug', $search_results);
// do_action('qm/debug', $resultlist);

// Echos either a placeholder graphic in the editor or the container div + data attributes for init.
if (! $is_preview ) {
	echo '<div id="pfpeople-web-directory" style="' . $spacing .'" ' . $attributes . '></div>';
} else {
	echo '<div class="web-directory-placeholder"><h2><span class="highlight-black">Web directory placeholder</span></h2>';
	echo $resultlist . '</div>';
	// echo '<div id="pfpeople-web-directory" style="' . $spacing .'" ' . $data_attributes . '></div>';
}
