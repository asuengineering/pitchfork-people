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
 * Register a custom block category for our blocks to live in. We hook into
 * the block_categories_all() filter to do this.
 */
if ( ! function_exists( 'pitchfork_people_custom_category' ) ) {
	/**
	 * Merges our custom category in with the others.
	 *
	 * @param array                   $categories The existing block categories.
	 * @param WP_Block_Editor_Context $editor_context Editor context.
	 */
	function pitchfork_people_custom_category( $categories, $editor_context ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'pitchfork-people',
					'title' => __( 'Pitchfork People', 'pitchfork-people' ),
				),
			)
		);
	}
}
add_filter( 'block_categories_all', 'pitchfork_people_custom_category', 10, 2 );

/**
 * Note: Blocks appear in the block picker IN THE ORDER THEY ARE LISTED HERE.
 * When adding a new block, please make sure to insert it an alphabetical order.
 */

function pitchfork_people_acf_blocks_init() {

	// Icons kept in a separate file.
	require_once PITCHFORK_PEOPLE_BASE_PATH . '/acf-block-templates/icons.php';

	// UDS Profiles, container block for directories.
	register_block_type(
		PITCHFORK_PEOPLE_BASE_PATH . 'acf-block-templates/profiles',
		array(
			'icon'     => $block_icon->users_rectangle,
			'category' => 'pitchfork-people',
		)
	);

	// UDS Profile (Manual), manual data entry edition.
	register_block_type(
		PITCHFORK_PEOPLE_BASE_PATH . 'acf-block-templates/profile-manual',
		array(
			'icon'     => $block_icon->image_user,
			'category' => 'pitchfork-people',
		)
	);

	// UDS Profile (Data), powered by ASU Search
	register_block_type(
		PITCHFORK_PEOPLE_BASE_PATH . 'acf-block-templates/profile-data',
		array(
			'icon'     => $block_icon->image_user,
			'category' => 'pitchfork-people',
		)
	);

	// UDS Profile (Data), powered by ASU Search
	register_block_type(
		PITCHFORK_PEOPLE_BASE_PATH . 'acf-block-templates/web-directory',
		array(
			'icon'     => $block_icon->address_book,
			'category' => 'pitchfork-people',
		)
	);
}
add_action( 'acf/init', 'pitchfork_people_acf_blocks_init' );
