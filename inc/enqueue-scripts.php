<?php
/**
 * - Enqueue plugin scripts.
 * - Register additional scripts to be loaded with individual blocks.
 *
 * @package pitchfork-people
 */

add_action('admin_enqueue_scripts', 'pitchfork_people_enqueue_admin_scripts');
function pitchfork_people_enqueue_admin_scripts() {

	$the_plugin = get_plugin_data( PITCHFORK_PEOPLE_BASE_PATH . '/pitchfork-people.php' );
	$plugin_version = $the_plugin['Version'];
	$profile_js_version = $plugin_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'js/acf-update-profile.js' );
	$profile_css_version = $plugin_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'css/admin.min.css' );

	wp_enqueue_script( 'acf-update-profile', plugin_dir_url( __DIR__ ) . 'js/acf-update-profile.js',  array( 'acf-input' ), $profile_js_version , true );
	wp_enqueue_style( 'acf-update-profile', plugin_dir_url( __DIR__ ) . 'css/admin.min.css',  array(), $profile_css_version );

}

// add_action( 'enqueue_block_editor_assets', 'pitchfork_people_enqueue_block_scripts' );
// function pitchfork_people_enqueue_block_scripts() {

// 		$the_plugin     = get_plugin_data( plugin_dir_path( __DIR__ ) . 'pitchfork-people.php' );
// 		$the_version    = $the_plugin['Version'];
// 		$plugin_version = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'js/block-variations.js' );

// 	wp_enqueue_script( 'uds-block-variations', plugin_dir_url( __DIR__ ) . 'js/block-variations.js',  array( 'wp-blocks', 'wp-dom' ), $plugin_version , true );

// }
