<?php
/**
 * File: acf-register-blocks.php
 *
 * @package pitchfork_people
 *
 * This file is responsible for loading all of our block 'register.php' files
 * (found in the individual block folders) so that we can register our custom
 * blocks. We do this by hooking into ACF Pro's 'acf/init' action.
 */

/**
 * Note: Blocks appear in the block picker IN THE ORDER THEY ARE LISTED HERE.
 * When adding a new block, please make sure to insert it an alphabetical order.
 */
function pitchfork_people_acf_blocks_init() {
}
add_action( 'acf/init', 'pitchfork_people_acf_blocks_init' );
