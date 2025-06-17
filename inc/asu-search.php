<?php
/**
 * Utility functions to return data and format from the ASU Search API.
 *
 * @package pitchfork_people
 */

/**
 * Populate ACF controls with data from ASU Search.
 * Used by: acf/web-directory, acf/profiles.
 * API endpoint determined by $endpoint option
 */
function get_asu_search_webdir_data_assets($endpoint) {

	/**
	 * Get data from ASU Search application.
	 * Endpoint determined by option provided in the function call.
	 */

	switch ($endpoint) {
		case 'departments':
			$search_json = 'https://search.asu.edu/api/v1/webdir-departments?format=flat';
			break;
		case 'expertise':
			$search_json = 'https://search.asu.edu/api/v1/webdir-expertise-areas';
			break;
		case 'employee_types':
			$search_json = 'https://search.asu.edu/api/v1/webdir-employee-types';
			break;
		default:
			do_action('qm/debug', 'Endpoint not specifed in ASU Search function.');
			return;
	}

	$args = array(
		'timeout'     => 45,
	);
	$search_request = wp_safe_remote_get( $search_json, $args );

	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	$search_body   = wp_remote_retrieve_body( $search_request );
	$search_data   = json_decode( $search_body, true );

	return $search_data;
}

/**
 * Utility function to returned a flattened set of options from a JSON feed.
 * Used to provide formatted data to ACF multiselect controls.
 * See: pitchfork_people_acf_load_directory_select()
 */
function pfpeople_flatten_webdir_departments_json($json, &$result = [], $depth = 0) {

	// if $json variable is called when empty, it will be false. Bail early.
	if (! is_array($json)) {
		return;
	}

	// Loop through each node in the JSON object
	foreach ($json as $node) {

		// Check if the node has children
		if (isset($node['children'])) {
			// If the node has children, recursively call the flatten_json function
			// with the children array, incrementing the depth by 1
			pfpeople_flatten_webdir_departments_json($node['children'], $result, $depth + 1);
		}

		// Add the current node to the result array, with its depth and any other attributes you want to include
		$result[] = [
			'name' => $node['name'] . ' (' . $node['dept_id'] . ')',
			'id' => $node['dept_id'],
			'depth' => $depth,
		];
	}

	// Sort the result array by name
	usort($result, function($a, $b) {
		return strcmp($a['name'], $b['name']);
	});
}

/**
 * Called when web directory block is rendered within web-directory.php
 * Conditions: Display type = either "faculty_rank" or "directory"
 */
function get_asu_directory_people_list($dept_string) {

	/**
	 * Quick check for an unset or empty department selection.
	 * Dept ID = 9999 should return zero results (June 2024)
	 */
	if (empty($dept_string)) {
		$dept_string = '9999';
	}

	// Get Search data from ASURITE ID.
	$search_json = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?dept_ids=' . $dept_string . '&size=999&client=pitchfork_people';

	do_action('qm/debug', $search_json);

	$args = array(
		'timeout'     => 45,
	);
	$search_request = wp_safe_remote_get( $search_json, $args );

	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	$search_body   = wp_remote_retrieve_body( $search_request );
	$search_data   = json_decode( $search_body );

	if ( ! empty( $search_data ) ) {
		$path = $search_data->results;
		// $path = $search_data;
	}

	return $path;
}

/**
 * Called when web directory block is rendered within web-directory.php
 * Conditions: Display type = "people"
 */
function get_asu_directory_custom_people_list($custom_list) {

	$profiles = array();
	$custom_list = substr($custom_list, 1);
	$users = explode(',', $custom_list);

	foreach ($users as $user) {
		list($asurite_id, $dept_id) = explode(':', $user);
		$profiles[] = array(
			"asurite_id" => $asurite_id,
			"dept_id" => $dept_id
		);
	}

	//test this sort by: faculty_rank
	$data = array(
		"size" => count($profiles),
		"page" => 1,
		"sort-by" => "last_name_asc",
		"full_records" => true,
		"profiles" => $profiles,
		"last_init" => null,
		"profiles_to_exclude" => null
	);

	$args = array(
		'body'    => json_encode($data),
		'headers' => array(
			'Content-Type' => 'application/json',
			'Accept' => '*/*',
			'Connection' => 'keep-alive',
			'Accept-Encoding' => 'gzip, deflate, br',
			'User-Agent' => 'Pitchfork People Plugin',
		),
	);

	$search_request = wp_safe_remote_post('https://search.asu.edu/api/v1/webdir-profiles/department', $args);
	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	$search_body   = wp_remote_retrieve_body( $search_request );
	return json_decode( $search_body );

}


/**
 * Function for render_block_data hook for acf/profiles block.
 * Used to update ACF field prior to render with results from ASU Search API.
 */
function profiles_update_block_meta_with_search_api($parsed_block) {

    if ($parsed_block['blockName'] === 'acf/profiles') {

		$inners = array();
		$query = array();
		$people_list = '';

		$inners = $parsed_block['innerBlocks'];

		/**
		 * Gather field information for each of the inner blocks within this profiles collection.
		 * Specifically, build a comma separated list of ASURITE IDs for the API query.
		 */

		foreach ( $inners as $inner ) {
			if (!empty ($inner['attrs']['data']['uds_profiledata_asuriteid']) ) {
				$query[] = $inner['attrs']['data']['uds_profiledata_asuriteid'];
			}
		}

		$people_list = implode(',' , $query);

		// Grab returned value from search results and store it in ACF field.
		do_action('qm/debug', 'Search API call for: ' . $people_list);
		$parsed_block['attrs']['data']['uds_profiles_query_results'] = get_asu_search_profile_results($people_list);
    }

    return $parsed_block;
}
add_filter( 'render_block_data', 'profiles_update_block_meta_with_search_api' );

/**
 * This function is used within acf/profiles block to actually retrieve data from ASU Search API.
 * Is called directly from profiles_update_block_meta_with_search_api().
 * Execute request up to 3 times with a 1.5 second delay between requests.
 */
function get_asu_search_profile_results($asurite_string) {
	$search_json = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' . $asurite_string . '&size=999&client=pitchfork_people';

	$args = array(
		'timeout' => 45,
	);

	$max_retries = 3;
	$retry_delay_us = 1500000; // 1.5 second in microseconds

	do_action('qm/debug', 'Grabbing search data about multiple profiles.');
	for ($attempt = 0; $attempt <= $max_retries; $attempt++) {
		do_action('qm/debug', 'Attempt #' . $attempt);
		$search_request = wp_safe_remote_get($search_json, $args);

		if (is_wp_error($search_request)) {
			return false; // Bail early on error
		}

		$search_body = wp_remote_retrieve_body($search_request);
		$search_data = json_decode($search_body);

		if (!empty($search_data->meta->page->total_results)) {
			return $search_data;
		}

		// If not last attempt, wait before retrying
		if ($attempt < $max_retries) {
			usleep($retry_delay_us);
		}
	}

	// All retries failed or no results found
	return false;
}

/**
 * This function is called by the singular acf/profile-data block when:
 * - The set of data found in the wrapping acf/profiles block doesn't contain this individual profile
 * - Or, there is no acf/profiles block present and therefore we need data.
 */
function get_asu_search_single_profile_results( $asurite ) {
	$search_json = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' . urlencode( $asurite ) . '&size=1&client=pitchfork_people';

	$args = array(
		'timeout' => 45,
	);

	$max_retries = 3;
	$retry_delay_us = 1500000; // 1.5 seconds in microseconds

	do_action( 'qm/debug', 'Grabbing search data about a single profile: ' . $asurite );

	for ( $attempt = 0; $attempt <= $max_retries; $attempt++ ) {
		do_action( 'qm/debug', 'Attempt #' . $attempt . ' for ASURITE: ' . $asurite );

		$search_request = wp_safe_remote_get( $search_json, $args );

		if ( is_wp_error( $search_request ) ) {
			return false; // Bail early on request error
		}

		$search_body = wp_remote_retrieve_body( $search_request );
		$search_data = json_decode( $search_body );

		if ( ! empty( $search_data->meta->page->total_results ) ) {
			return $search_data->results[0]; // Success
		}

		// Wait before next attempt if this isn't the last
		if ( $attempt < $max_retries ) {
			usleep( $retry_delay_us );
		}
	}

	// All retries failed or no results — fallback
	do_action( 'qm/debug', 'All attempts failed for ASURITE: ' . $asurite . ', using fallback.' );
	return pfpeople_fake_asurite_data();
}

