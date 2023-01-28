<?php
/**
 * Custom post types
 * - CPT Slug: pitchfork_people
 * - Tax Slug: pf_people_groups
 *
 * @package pitchfork_people
 */

// Register Custom Post Type
function pitchfork_people() {

	$labels = array(
		'name'                  => _x( 'People', 'Post Type General Name', 'pitchfork_people' ),
		'singular_name'         => _x( 'Person', 'Post Type Singular Name', 'pitchfork_people' ),
		'menu_name'             => __( 'People', 'pitchfork_people' ),
		'name_admin_bar'        => __( 'People', 'pitchfork_people' ),
		'archives'              => __( 'People Archives', 'pitchfork_people' ),
		'attributes'            => __( 'People Attributes', 'pitchfork_people' ),
		'parent_item_colon'     => __( 'Parent Person', 'pitchfork_people' ),
		'all_items'             => __( 'All People', 'pitchfork_people' ),
		'add_new_item'          => __( 'Add New Person', 'pitchfork_people' ),
		'add_new'               => __( 'Add New', 'pitchfork_people' ),
		'new_item'              => __( 'New Person', 'pitchfork_people' ),
		'edit_item'             => __( 'Edit Person', 'pitchfork_people' ),
		'update_item'           => __( 'Update Person', 'pitchfork_people' ),
		'view_item'             => __( 'View Person', 'pitchfork_people' ),
		'view_items'            => __( 'View People', 'pitchfork_people' ),
		'search_items'          => __( 'Search person', 'pitchfork_people' ),
		'not_found'             => __( 'Not found', 'pitchfork_people' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'pitchfork_people' ),
		'featured_image'        => __( 'Featured Image', 'pitchfork_people' ),
		'set_featured_image'    => __( 'Set featured image', 'pitchfork_people' ),
		'remove_featured_image' => __( 'Remove featured image', 'pitchfork_people' ),
		'use_featured_image'    => __( 'Use as featured image', 'pitchfork_people' ),
		'insert_into_item'      => __( 'Insert into item', 'pitchfork_people' ),
		'uploaded_to_this_item' => __( 'Uploaded to this item', 'pitchfork_people' ),
		'items_list'            => __( 'People list', 'pitchfork_people' ),
		'items_list_navigation' => __( 'People list navigation', 'pitchfork_people' ),
		'filter_items_list'     => __( 'Filter people list', 'pitchfork_people' ),
	);
	$args = array(
		'label'                 => __( 'Person', 'pitchfork_people' ),
		'description'           => __( 'Profiles of individual people', 'pitchfork_people' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'thumbnail', 'revisions' ),
		'taxonomies'            => array( 'category-zzz' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'menu_icon'             => 'dashicons-admin-users',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => false,
		'can_export'            => true,
		'has_archive'           => false,
		'exclude_from_search'   => true,
		'publicly_queryable'    => false,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'pitchfork-people', $args );

}
add_action( 'init', 'pitchfork_people', 0 );
