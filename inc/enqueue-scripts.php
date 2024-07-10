<?php
/**
 * - Enqueue plugin scripts.
 * - Register additional scripts to be loaded with individual blocks.
 *
 * @package pitchfork-people
 */

// Main styles/scripts enqueue. Front end of the website.
add_action( 'wp_enqueue_scripts', 'pfpeople_enqueue_block_styles' );
function pfpeople_enqueue_block_styles() {

	$the_plugin         = get_plugin_data( plugin_dir_path( __DIR__ ) . 'pitchfork-people.php' );
	$the_version        = $the_plugin['Version'];
	$plugin_version     = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'dist/css/pfpeople.css' );

	// Main plugin stylesheet.
	wp_enqueue_style( 'pfpeople-block-styles', plugin_dir_url( __DIR__ ) . 'dist/css/pfpeople.css', array(), $plugin_version );
}

// Main styles/scripts enqueue. Block editor.
add_action( 'enqueue_block_editor_assets', 'pfpeople_enqueue_block_editor_styles' );
function pfpeople_enqueue_block_editor_styles() {

	$the_plugin               = get_plugin_data( plugin_dir_path( __DIR__ ) . 'pitchfork-people.php' );
	$the_version              = $the_plugin['Version'];
	$block_editor_version     = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'dist/css/editor.css' );
	$block_styles_version     = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'dist/css/pfpeople.css' );
	$plugin_version 		  = $the_version . '.' . filemtime( plugin_dir_path( __DIR__ ) . 'dist/js/block-variations.js' );

	wp_enqueue_script( 'pfpeople-block-variations', plugin_dir_url( __DIR__ ) . 'dist/js/block-variations.js',  array( 'wp-blocks', 'wp-dom' ), $plugin_version , true );
	wp_enqueue_style( 'pfpeople-block-styles', plugin_dir_url( __DIR__ ) . 'dist/css/pfpeople.css', array(), $block_styles_version );
	wp_enqueue_style( 'pfpeople-block-editor-styles', plugin_dir_url( __DIR__ ) . 'dist/css/editor.css', array(), $block_editor_version );

}

add_action( 'enqueue_block_assets', 'pfpeople_enqueue_webdir_block_styles' );
function pfpeople_enqueue_webdir_block_styles() {

	// app-webdir-ui + init.
	wp_register_script ( 'app-webdir', plugin_dir_url( __DIR__ ) . 'src/app-webdir-ui/js/webdirUI.umd.js', array( 'wp-element', 'wp-components' ), null, false );
	wp_register_script ( 'app-webdir-init', plugin_dir_url( __DIR__ ) . 'dist/js/app-webdir-init.js', array( 'app-webdir' ), null, false );

}
