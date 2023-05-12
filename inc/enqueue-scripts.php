<?php
/**
 * - Enqueue plugin scripts.
 * - Register additional scripts to be loaded with individual blocks.
 *
 * @package pitchfork-people
 */

// add_action('admin_enqueue_scripts', 'pitchfork_people_enqueue_admin_scripts');
// function pitchfork_people_enqueue_admin_scripts() {

// 	$the_plugin = get_plugin_data( PITCHFORK_PEOPLE_BASE_PATH . '/pitchfork-people.php' );
// 	$plugin_version = $the_plugin['Version'];
// 	$profile_js_version = $plugin_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'js/acf-update-profile.js' );
// 	$profile_css_version = $plugin_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'css/admin.min.css' );

// 	wp_enqueue_script( 'acf-update-profile', plugin_dir_url( __DIR__ ) . 'js/acf-update-profile.js',  array( 'acf-input' ), $profile_js_version , true );
// 	wp_enqueue_style( 'acf-update-profile', plugin_dir_url( __DIR__ ) . 'css/admin.min.css',  array(), $profile_css_version );

// }

// Main styles/scripts enqueue. Front end of the website.
add_action( 'wp_enqueue_scripts', 'pfpeople_enqueue_block_styles' );
function pfpeople_enqueue_block_styles() {

	$the_plugin         = get_plugin_data( plugin_dir_path( __DIR__ ) . 'pitchfork-people.php' );
	$the_version        = $the_plugin['Version'];
	$plugin_version     = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'css/pfpeople.min.css' );

	// Main plugin stylesheet.
	wp_enqueue_style( 'pfpeople-block-styles', plugin_dir_url( __DIR__ ) . 'css/pfpeople.min.css', array( 'pitchfork-styles' ), $plugin_version );

	// app-webdir-ui + init.
	wp_enqueue_script ( 'app-webdir', plugin_dir_url( __DIR__ ) . 'src/app-webdir-ui/js/webdirUI.umd.js', array( 'wp-element', 'wp-components' ), null, false );
	// wp_enqueue_script ( 'app-webdir-profilecard-init', plugin_dir_url( __DIR__ ) . '/js/profilecard-init.js', array( 'wp-element', 'wp-components' ), null, false );
}

// Main styles/scripts enqueue. Block editor.
add_action( 'enqueue_block_editor_assets', 'pfpeople_enqueue_block_editor_styles' );
function pfpeople_enqueue_block_editor_styles() {

	$the_plugin               = get_plugin_data( plugin_dir_path( __DIR__ ) . 'pitchfork-people.php' );
	$the_version              = $the_plugin['Version'];
	$block_editor_version     = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'css/editor.min.css' );
	$block_styles_version     = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'css/pfpeople.min.css' );
	$plugin_version 		  = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'js/block-variations.js' );

	wp_enqueue_script( 'uds-block-variations', plugin_dir_url( __DIR__ ) . 'js/block-variations.js',  array( 'wp-blocks', 'wp-dom' ), $plugin_version , true );
	wp_enqueue_style( 'pfpeople-block-styles', plugin_dir_url( __DIR__ ) . 'css/pfpeople.min.css', array(), $block_styles_version );
	wp_enqueue_style( 'pfpeople-block-editor-styles', plugin_dir_url( __DIR__ ) . 'css/editor.min.css', array(), $block_editor_version );

}
