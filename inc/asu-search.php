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

function profiles_update_block_meta_with_search_api( $context, $parsed_block ) {

	if ( $parsed_block['blockName'] === 'acf/profiles' ) {

		$inners = $parsed_block['innerBlocks'] ?? array();
		$query_ids = array();

		// Gather ASURITE IDs from nested profile blocks
		foreach ( $inners as $inner ) {
			if ( ! empty( $inner['attrs']['data']['uds_profiledata_asuriteid'] ) ) {
				$query_ids[] = sanitize_text_field( $inner['attrs']['data']['uds_profiledata_asuriteid'] );
			}
		}

		if ( empty( $query_ids ) ) {
			return $parsed_block; // Nothing to do
		}

		// Sort for consistent cache keys
		sort( $query_ids );
		$people_list = implode( ',', $query_ids );
		$transient_key = 'pfpeople_multiple_profiles_' . md5( $people_list );

		// Check if results already cached
		$results = get_transient( $transient_key );

		if ( false === $results ) {

			do_action('qm/debug', 'Key not found: ' . $transient_key);
			do_action( 'qm/debug', 'Search API call for: ' . $people_list );

			$results = get_asu_search_profile_results( $people_list );
			$cache_value = [
				'data' => $results->results,
				'source_post_id' => get_the_ID(),
				'asurite_list' => $people_list,
				'saved_at' => time(),
			];

			$expiration = pfpeople_get_block_cache_expiration();
			set_transient( $transient_key, $cache_value, $expiration );

		} else {

			do_action('qm/debug', 'Key found! ' . $transient_key);
			do_action( 'qm/debug', 'Using cached results for: ' . $people_list );

		}

		// Pass the transient key via block context hook
		$context['uds_profiles/query_cache_key'] = $transient_key;

	}

	return $context;
}
add_filter( 'render_block_context', 'profiles_update_block_meta_with_search_api', 10, 2 );

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
 * - The user is in the block editor and is manipulating a single profile block.
 * - When a set of data found in the wrapping acf/profiles block doesn't contain this individual profile.
 * - Or, where there is no acf/profiles block present and therefore we need data.
 */
function get_asu_search_single_profile_results( $asurite ) {

	$transient_key = 'pfpeople_single_profile_' . md5( $asurite );
	$cached = get_transient( $transient_key );

	if ( is_array( $cached ) && isset( $cached['data'] ) ) {
		do_action( 'qm/debug', 'Profile data loaded from transient for: ' . $cached['asurite'] );

		return $cached['data'];
	}

	$url = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' . urlencode( $asurite ) . '&size=1&client=pitchfork_people';
	$args = array(
		'timeout' => 45,
		'redirection' => 5,
	);

	$max_retries = 3;
	$retry_delay_us = 1500000; // 1.5 seconds

	for ( $attempt = 0; $attempt <= $max_retries; $attempt++ ) {
		do_action( 'qm/debug', 'Attempt #' . $attempt . ' for ASURITE: ' . $asurite );

		$response = wp_safe_remote_get( $url, $args );

		if ( is_wp_error( $response ) ) {
			do_action( 'qm/debug', 'Request error: ' . $response->get_error_message() );
			break; // Bail on error
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = wp_remote_retrieve_body( $response );
		$data = json_decode( $body );

		if ( $code === 200 && isset( $data->meta->page->total_results ) ) {

			if ( $data->meta->page->total_results > 0 ) {

				$result = $data->results[0];
				$cache_value = [
					'data' => $result,
					'source_post_id' => get_the_ID(),
					'asurite' => $asurite,
					'saved_at' => time(),
				];
				$expiration = pfpeople_get_block_cache_expiration();
				set_transient( $transient_key, $cache_value, $expiration );

				do_action( 'qm/debug', 'Profile data stored in transient for: ' . $asurite );

				return $result;

			} else {

				do_action( 'qm/debug', 'Zero results for ASURITE: ' . $asurite );
				return pfpeople_fake_asurite_data();

			}
		}

		// Only retry on "Too Many Requests"
		if ( $code === 429 && $attempt < $max_retries ) {
			do_action( 'qm/debug', '429 received, delaying retry for ' . $retry_delay_us . ' microseconds' );
			usleep( $retry_delay_us );
			continue;
		}

		// Don't retry for other statuses like 400/404
		do_action( 'qm/debug', 'Unexpected status code: ' . $code );
		break;
	}

	// All attempts failed or returned bad structure — fallback
	do_action( 'qm/debug', 'Fallback triggered for ASURITE: ' . $asurite );
	return pfpeople_fake_asurite_data();
}


