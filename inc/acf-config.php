<?php
/**
 * ACF Configurations.
 * - Add save/load points for JSON feature.
 *
 * @package pitchfork_people
 */

/**
 * Register a new save point for the Local JSON feature for this plugin.
 *
 * @param  mixed $path // path to ACF safe point.
 * @return $path
 */
function pitchfork_people_acf_json_save_point( $path ) {
	$path = PITCHFORK_PEOPLE_BASE_PATH . '/acf-json';
	return $path;
}
add_filter( 'acf/settings/save_json', 'pitchfork_people_acf_json_save_point' );

/**
 * Register a new loading point for the Local JSON feature for this plugin.
 *
 * @param  mixed $paths // path to ACF load point.
 * @return $paths
 */
function pitchfork_people_acf_json_load_point( $paths ) {
	$paths[] = PITCHFORK_PEOPLE_BASE_PATH . '/acf-json';
	return $paths;
}
add_filter( 'acf/settings/load_json', 'pitchfork_people_acf_json_load_point' );
