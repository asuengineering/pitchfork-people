<?php
/**
 * Utility function to return data from the ASU Search API.
 * - Pulls individual profile results. Possible to adjust results to pull multiple IDs within the same call.
 *
 * @package pitchfork_people
 */

function get_asu_search_single_profile_results($asurite) {

	// Get Search data from ASURITE ID.
	$search_json = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' . $asurite . '&size=1&client=pitchfork_people';

	$search_request = wp_safe_remote_get( $search_json );

	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	$search_body   = wp_remote_retrieve_body( $search_request );
	$search_data   = json_decode( $search_body );

	if ( ! empty( $search_data ) ) {
		$path = $search_data->results[0];
	}

	return $path;
}

function get_asu_search_webdir_departments() {

	// Get Search data from ASURITE ID.
	$search_json = 'https://search.asu.edu/api/v1/webdir-departments?format=flat';

	$search_request = wp_safe_remote_get( $search_json );

	// Error check for invalid JSON.
	if ( is_wp_error( $search_request ) ) {
		return false; // Bail early.
	}

	$search_body   = wp_remote_retrieve_body( $search_request );
	$search_data   = json_decode( $search_body, true );

	return $search_data;
}

function pfpeople_flatten_webdir_departments_json($json, &$result = [], $depth = 0) {

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
