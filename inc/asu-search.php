<?php
/**
 * Utility function to return data from the ASU Search API.
 * - Pulls individual profile results. Possible to adjust results to pull multiple IDs within the same call.
 *
 * @package pitchfork_people
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

function get_asu_directory_custom_people_list($custom_list, $pagination) {
	do_action('qm/debug', 'This custom list passed into function: ' . $custom_list);
	do_action('qm/debug', 'This pageination: ' . $pagination);

	$profiles = array();
	$users = explode(',', $custom_list);
	do_action('qm/debug', 'This $users: ' . $users[0]);

	foreach ($users as $user) {
		list($asurite_id, $dept_id) = explode(':', $user);
		$profiles[] = array(
			"asurite_id" => $asurite_id,
			"dept_id" => $dept_id
		);
	do_action('qm/debug', 'This $asurite_id: ' . $asurite_id);
	do_action('qm/debug', 'This $dept_id: ' . $dept_id);


	}
	do_action('qm/debug', 'This profile 1: ' . $profiles[0]["asurite_id"]);

	$data = array(
		"size" => $pagination,
		"page" => 1,
		"sort-by" => "last_name_asc",
		"full_records" => true,
		"profiles" => $profiles,
		"last_init" => null,
		"profiles_to_exclude" => null
	);
	do_action('qm/debug', 'This is our data array size: ' . $data["size"]);
	do_action('qm/debug', 'This is our data array profiles: ' . $data["profiles"][0]["asurite_id"]);


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

function get_asu_search_profile_results($asurite_string) {

	// Get Search data from ASURITE ID.
	$search_json = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' . $asurite_string . '&size=999&client=pitchfork_people';

	$args = array(
		'timeout'     => 45,
	);
	$search_request = wp_safe_remote_get( $search_json, $args );

	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	$search_body   = wp_remote_retrieve_body( $search_request );
	$search_data   = json_decode( $search_body );

	return $search_data;

}

function get_asu_search_single_profile_results($asurite) {

	// Get Search data from ASURITE ID.
	$search_json = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' . $asurite . '&size=1&client=pitchfork_people';
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

	// Similar information: $search_data->meta->page->total_results = 0
	if ( $search_data->meta->page->total_results <> 0 ) {
		$path = $search_data->results[0];
	} else {
		$path = pfpeople_fake_asurite_data();
	}

	return $path;
}

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

	// $search_json = 'https://search.asu.edu/api/v1/webdir-departments?format=flat';

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
 * Check if a remote image file exists.
 * Useful to validate if the returned URL for a profile portrait is actually a valid image.
 * See: https://kellenmace.com/check-if-a-remote-image-file-exists-in-wordpress/
 *
 * @param  string $url The url to the remote image.
 * @return bool        Whether the remote image exists.
 */
function pfpeople_remote_image_file_exists( $url ) {
	$response = wp_remote_head( $url );
	return 200 === wp_remote_retrieve_response_code( $response );
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

