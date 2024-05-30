<?php
/**
 * Additional functions for Advanced Custom Fields.
 *
 * Contents:
 *   - Load path for ACF groups from the parent.
 *   - Register custom blocks for the theme.
 *
 * @package pitchfork_people
 */

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


/**
 * Create a save point for specifc JSON files for the the plugin's ACF groups.
 *
 * Key list
 * - UDS Block: Profile (Manual) - group_63e3e25f75f79
 * - UDS Block: Profile (Data) - group_63bf28de165c4
 * - UDS Block: Profiles - group_63c98c0738345
 * - UDS Block: Web Directory - group_645ebe42aaa12
 *
 * @return $paths
 */
function pitchfork_people_acf_json_save_point( $path ) {
    $path = PITCHFORK_PEOPLE_BASE_PATH . '/acf-json';
    return $path;
}
add_filter( 'acf/settings/save_json/key=group_63e3e25f75f79', 'pitchfork_people_acf_json_save_point' );
add_filter( 'acf/settings/save_json/key=group_63bf28de165c4', 'pitchfork_people_acf_json_save_point' );
add_filter( 'acf/settings/save_json/key=group_63c98c0738345', 'pitchfork_people_acf_json_save_point' );
add_filter( 'acf/settings/save_json/key=group_645ebe42aaa12', 'pitchfork_people_acf_json_save_point' );
