<?php
/**
 * - Enqueue plugin scripts.
 * - Register additional scripts to be loaded with individual blocks.
 *
 * @package pitchfork-people
 */

add_action('admin_enqueue_scripts', 'pitchfork_people_enqueue_admin_scripts');
function pitchfork_people_enqueue_admin_scripts() {

	// Get the theme data.
	$the_plugin     = get_plugin_data( PITCHFORK_PEOPLE_BASE_PATH );
	$plugin_version = $the_plugin['Version'];
	$plugin_version = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'js/acf-update-profile.js' );

	wp_enqueue_script( 'uds-block-variations', plugin_dir_url( __DIR__ ) . 'js/acf-update-profile.js',  array( 'wp-blocks', 'wp-dom' ), $plugin_version , true );

}

// add_action( 'enqueue_block_editor_assets', 'pitchfork_people_enqueue_block_scripts' );
// function pitchfork_people_enqueue_block_scripts() {

// 		$the_plugin     = get_plugin_data( plugin_dir_path( __DIR__ ) . 'pitchfork-people.php' );
// 		$the_version    = $the_plugin['Version'];
// 		$plugin_version = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'js/block-variations.js' );

// 	wp_enqueue_script( 'uds-block-variations', plugin_dir_url( __DIR__ ) . 'js/block-variations.js',  array( 'wp-blocks', 'wp-dom' ), $plugin_version , true );

// }
