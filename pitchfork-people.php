<?php
/**
 * Plugin Name:     Pitchfork People
 * Plugin URI:      https://github.com/asuengineering/pitchfork-people
 * Description:     Build a directory of people that is automatically maintained by data from ASU Search.
 * Author:          Steve Ryan
 * Author URI:      https://engineering.asu.edu
 * Text Domain:     pitchfork_people
 * Version:         1.1.1
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

// PHP function to pull data from ASU Search API for a single ASURITE.
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/asu-search.php';

// Functions used to render the profile-data block correctly.
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/profile-data-functions.php';

// Functions used to render the profile-data block correctly.
// require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/profile-data-functions.php';

// Create CPT for Pitchfork People
// require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/cpt-people.php';

// ACF configurations.
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/acf-config.php';
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/acf-block-utilities.php';
require_once PITCHFORK_PEOPLE_BASE_PATH . '/inc/acf-register-blocks.php';
