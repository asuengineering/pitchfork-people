<?php
/**
 * Plugin Name:     Pitchfork People
 * Plugin URI:      https://github.com/asuengineering/pitchfork-people
 * Description:     Build a directory of people that is automatically maintained by data from ASU Search.
 * Author:          Steve Ryan
 * Author URI:      https://engineering.asu.edu
 * Text Domain:     pitchfork_people
 * Version:         0.1
 *
 * @package         pitchfork_people
 *
 * GitHub Plugin URI: https://github.com/asuengineering/pitchfork-people
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Variable for root directory of this plugin.
define( 'PITCHFORK_PEOPLE_BASE_PATH', plugin_dir_path( __FILE__ ) );

// Function: Activate.
// Function: Deactivate.
// Function: Execute plugin.

// TGM Plugin Activation Script. Checks for Advanced Custom Fields.
require_once PITCHFORK_PEOPLE_BASE_PATH . '/tgmpa/class-tgm-plugin-activation.php';
require_once PITCHFORK_PEOPLE_BASE_PATH . '/tgmpa/dependency-check.php';

// Enqueue scripts.
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/enqueue-scripts.php';

// ACF configurations.
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/acf-config.php';
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/acf-register-blocks.php';
