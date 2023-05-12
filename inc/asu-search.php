<?php
/**
 * Utility function to return data from the ASU Search API.
 * - Pulls individual results. Possible to adjust results to pull multiple IDs within the same call.
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
