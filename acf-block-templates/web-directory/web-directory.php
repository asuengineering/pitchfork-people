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
$showfilter			= get_field( 'uds_webdir_filter_display');
$custom_list 		= get_field( 'uds_webdir_custom_list' );
$grid               = get_field( 'uds_webdir_grid' );

$spacing = pitchfork_people_acf_calculate_spacing( $block );

/**
 * Check for an anchor attribute in the block settings. If none found, assign a generic ID.
 *
 * Note: If there are multiple blocks with the same (generic) ID on the page,
 * only the first block found in the DOM will render.
 */

if (! empty($block['anchor'])) {
	$anchor = $block['anchor'];
} else {
	$anchor = 'pf-directory';
}

/**
 * Split arrays generated by multiselect select boxes.
 * Convert to comma delineated string.
 */



// Assemble data attributes for block markup.
$data_attributes = array();
$data_attributes[] = 'data-searchType="' . $display . '"';
$data_attributes[] = 'data-pagination="' . $pagination . '"';

// Split the array generated by the multiselect department ids. Convert to string.
if ( ! empty ( $department_ids ) ) {
	$dept_string = implode(',' , $department_ids);
	$data_attributes[] = 'data-depts="' . $dept_string . '"';

}

if ( ! empty ( $department_ids ) ) {
	$dept_string = implode(',' , $department_ids);
	$data_attributes[] = 'data-depts="' . $dept_string . '"';

}

if ( ! empty ( $exclude ) ) {
	$data_attributes[] = 'data-exclude="' . $exclude . '"';
}

if ( ! empty ( $expertise ) ) {
	$expertise_string = implode(',' , $expertise);
	$data_attributes[] = 'data-expertise="' . $expertise_string . '"';
}

if ( ! empty ( $employee_type ) ) {
	$employee_string = implode(',' , $employee_type);
	$data_attributes[] = 'data-employeeType="' . $employee_string . '"';
}

if ( ! empty ( $campus ) ) {
	$data_attributes[] = 'data-campus="' . $campus . '"';
}

if ( ! empty ( $custom_list ) ) {
	$custom_list = "," . $custom_list;
	$data_attributes[] = 'data-ids="' . $custom_list . '"';
}

// Convert boolean control to "true" or "false" strings for react props.
if ( $alpha ) {
	$data_attributes[] = 'data-alphaFilter="true"';
} else {
	$data_attributes[] = 'data-alphaFilter="false"';
}

if ( $grid ) {
	$data_attributes[] = 'data-grid="true"';
} else {
	$data_attributes[] = 'data-grid="false"';
}

//set dept id to 1466 if no dept id is selected
if ($display === 'people') {
	$dept_string = '1466';
	$data_attributes[] = 'data-deptIds="' . $dept_string . '"';
}
// Prep for insertion into HTML output
$attributes = implode(' ', $data_attributes);

/**
 * API call to obtain info for display within block editor.
 * (The API call to display on the front end is initated via React component.)
 *
 * Departments and Facukty Rank use slightly different API endpoint than the 'people' list does.
 * Sort results alphabetical by last name if department or faculty_rank
 */
if ($display === 'people') {
	$api_results = get_asu_directory_custom_people_list($custom_list);
} else {
	// $display = 'departments' or 'faculty_rank'
	$api_results = get_asu_directory_people_list($dept_string);
	if(!empty($api_results)) {
		usort($api_results, function($a, $b) {
			return strcmp($a->last_name->raw, $b->last_name->raw);
		});
	}
}

/**
 * Early if/then statement for displaying the intended result.
 * Either output the empty div + data attributes for the React component.
 * Or, continue and output the display for the end user within the block editor.
 */
if (! $is_preview ) {

	/**
	 * Render alert box on front end of the site if department ID not set and page published.
	 */
	if (empty($department_ids) && empty($custom_list)) {
		$alert_message = 'Web directory block is missing a department ID.';

		echo '<div class="wp-block-alert alert alert-dismissable">';
		echo '<div class="alert-icon"><span class="fas fa-exclamation-triangle"></span></div>';
		echo '<div class="alert-content"><div class="acf-innerblocks-container">';
		echo '<p>' . $alert_message . '</p>';
		echo '</div></div><div class="alert-close">';
		echo '<button type="button" class="btn btn-circle btn-circle-alt-black close" data-bs-dismiss="alert" aria-label="Close">';
		echo '<span class="fas fa-times"></span></button></div></div>';
	} else {
		echo '<div id="' . $anchor . '" class="pfpeople-web-directory" style="' . $spacing .'" ' . $attributes . '></div>';
	}


} else {

	if ( 'departments' === $display ) {
		$display_label = "Web directory";
	} else if ('people' === $display) {
		$display_label = "Custom People Directory";
	}
	else {
		$display_label = "Faculty Rank Directory";
	}

	echo '<div class="uds-tabbed-panels"><div class="nav nav-tabs" id="nav-tab">';
	echo '<span class="nav-item nav-link active">' . $display_label . '</span>';
	echo '<span class="nav-item nav-link">';
	echo '<svg style="width:2rem;height:2rem;margin-right:.5rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 128A64 64 0 1 0 128 0a64 64 0 1 0 0 128zm-22.4 32c-41.6 0-76.3 31.9-79.7 73.4l-4.1 49.3c-2.5 29.8 15.7 56.1 42.2 65.6V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V348.3c26.5-9.5 44.7-35.8 42.2-65.6l-4.1-49.3C226.7 191.9 192 160 150.4 160H105.6zM384 128A64 64 0 1 0 384 0a64 64 0 1 0 0 128zm-15.7 32c-28.6 0-53.7 18.9-61.5 46.4L267.7 343.2c-5.8 20.4 9.5 40.8 30.8 40.8H320v80c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V384h21.6c21.3 0 36.6-20.3 30.8-40.8L461.3 206.4c-7.8-27.5-33-46.4-61.5-46.4H368.3z"/></svg>';
	if (!empty($api_results)) {
		echo count($api_results) . ' people</span></div></div>';
	} else {
		echo '0 people</span></div></div>';
	}
	/**
	 * Handles initial state of block when no dept ID is supplied.
	 * Query returned is dept_id = 9999, set within function call for API results.
	 */
	if (empty ($api_results)) {
		echo '<div class="web-directory-placeholder"><h4>Select a department or add a user to continue.</h4></div>';
	} else {

		if ( $display === 'people' ) {

			$resultlist = '<div class="resultlist">';
			$counter = 0;

			foreach ($api_results as $result) {
				$classlist = array('result');
				$show_pages = true;

				/**
				 * Create CSS class list and echo markup for each tile.
				 */
				$class = implode(' ', $classlist);
				$resultlist .= '<div class="' . $class . '"><h4>' . $result->{'display_name'} . '</h4>';
				$resultlist .= '<p>' . $result->{'asurite_id'} . '</p>';
				$resultlist .= '</div>';


				/**
				 * Increment counter for pagination based on what is displayed / filtered.
				 * Check if a page break indication is needed.
				 */
				$counter++;
				if ($show_pages) {
					if (($counter % $pagination == 0) && ($counter > 0)) {
						$resultlist .= '<div class="grid-break"></div>';
					}
				}
			}
		} else {

			/**
			 * $display === 'people' or 'faculty_rank'
			 * Format results for easy scaning for exclude by name filter.
			 * Add visual separator to indicate pagination.
			 * Add color change to indicate filtered exclusion.
			 */
			$resultlist = '<div class="resultlist">';
			$counter = 0;
			$exclude_array = explode(',', $exclude);

			foreach ($api_results as $result) {

				$classlist = array('result');
				$show_pages = true;

				/**
				 * Add classes to items that were excluded by filters or manually.
				 * Check: Manually excluded
				 * Check: Expert list
				 * Check: Employee Type
				 * Check: Campus location
				*/

				// Check: manually excluded list.
				// Decrement the counter variable early, counteracted by increment at bottom.
				if ( in_array( $result->asurite_id->raw, $exclude_array ) ) {
					$classlist[] = 'excluded-manual';
					$counter--;
				}

				// Check if any filter is on at all. Reset all tiles to default off color.
				if ( (!empty($expertise)) || (!empty($employee_type)) || (!empty($campus))) {
					$classlist[] = 'filtered';
					$show_pages = false;
				}

				// Check: expert list
				if ( (is_array($result->expertise_areas->raw)) && (is_array($expertise)) ) {
					$check_expert = array_intersect($result->expertise_areas->raw, $expertise);
					if (! empty($check_expert)) {
						$classlist[] = 'matched';
					}
				}

				// Check: employee type
				if ( (property_exists($result, 'empl_classes')) && (is_array($result->empl_classes->raw)) && (is_array($employee_type)) ) {
					$check_type = array_intersect($result->empl_classes->raw, $employee_type);
					if (! empty($check_type)) {
						$classlist[] = 'matched';
					}
				}

				// Check: campus location
				if ( (property_exists($result, 'primary_job_campus')) && (is_array($result->primary_job_campus->raw)) ) {
					$check_campus = in_array($campus, $result->primary_job_campus->raw);
					if ($check_campus) {
						$classlist[] = 'matched';
					}
				}

				/**
				 * Build filter display for any indicated value that COULD be filtered.
				 * Check: Expert list
				 * Check: Employee type
				 * Check: Campus location
				 */

				$filter_display = '<ul class="filters">';

				/**
				 * Employee type display.
				 * Check array in results, eliminate null values and duplicates.
				 * Return a string only if there are results to display.
				 */
				if ((property_exists($result, 'empl_classes')) && (is_array($result->empl_classes->raw))) {

					// Filter out null values and remove duplicates
					$emp_classes_filtered = array_filter(array_unique($result->empl_classes->raw), function($value) {
						return !is_null($value);
					});

					// Check if the filtered array is not empty
					if (!empty($emp_classes_filtered)) {
						$filter_display .= '<li><strong>Employee Type:</strong> ' . implode(', ', $emp_classes_filtered) . '</li>';
					}
				}


				if ( (is_array($result->expertise_areas->raw)) ) {
					$filter_display .= '<li><strong>Expertise:</strong> ' . implode(', ', $result->expertise_areas->raw) . '</li>';
				}

				if ( (property_exists($result, 'primary_job_campus')) && (is_array($result->primary_job_campus->raw)) ) {
					$filter_display .= '<li><strong>Campus:</strong> ' . implode(', ', $result->primary_job_campus->raw) . '</li>';
				}

				$filter_display .= '</ul>';

				/**
				 * Create CSS class list and echo markup for each tile.
				 */
				$class = implode(' ', $classlist);
				$resultlist .= '<div class="' . $class . '"><h4>' . $result->display_name->raw . '</h4>';
				$resultlist .= '<p>' . $result->asurite_id->raw . '</p>';
				if ($showfilter) { $resultlist .= $filter_display;}
				$resultlist .= '</div>';


				/**
				 * Increment counter for pagination based on what is displayed / filtered.
				 * Check if a page break indication is needed.
				 */
				$counter++;
				if ($show_pages) {
					if (($counter % $pagination == 0) && ($counter > 0)) {
						$resultlist .= '<div class="grid-break"></div>';
					}
				}

			}
		}

		// Result list completed, echo to the screen.
		echo '<div class="web-directory-placeholder">' . $resultlist . '</div>';
	}
}
