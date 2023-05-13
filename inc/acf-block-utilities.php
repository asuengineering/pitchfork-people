<?php
/**
 * File: acf-block-utilities.php
 *
 * @package         Pitchfork_Blocks
 *
 * Additional functions that are useful for block manipulation and markup.
 *  - Return string value from calculate spacing
 *  - Remove inner blocks wrapper from a acf/hero blocks.
 */

/**
 * Given an $block object from an ACF block for gutenberg:
 * This will return a string of CSS inline values suitable for
 * inclusion in the block output in PHP.
 *
 * @param  mixed $block
 * @return $style as string
 */
function pitchfork_blocks_acf_calculate_spacing( $block ) {

	if ( ! empty( $block['style'] ) ) {
		$style_engine = wp_style_engine_get_styles( $block['style'] );
		$style        = $style_engine['css'];
	} else {
		$style = '';
	}

	return $style;
	// echo '<div style="' . $style . '">Block content</div>';
}

/**
 * Create filter to remove ACF inner blocks wrapper.
 *
 * Note that some additional CSS to "ignore" the wrapper in a grid context is required
 * for any of these blocks to function correctly in the block editor. The wrapper is
 * non-removable in that context.
 *
 * Removed here for greater transparency and compliance with actual markup for Unity elements.
 *
 * See: https://www.advancedcustomfields.com/resources/whats-new-with-acf-blocks-in-acf-6/#block-versioning
 */
add_filter( 'acf/blocks/wrap_frontend_innerblocks', 'pitchfork_people_acf_remove_wrap_innerblocks', 10, 2 );
function pitchfork_people_acf_remove_wrap_innerblocks( $wrap, $name ) {

	$nowrap_block_names = array( 'acf/profiles' );

	// Loop through the array above. If located, remove the wrapper.
	if ( in_array( $name, $nowrap_block_names ) ) {
		return false;
	}

	return true;
}

/**
 * Add choices to ACF select field for department name/ID.
 * Used within acf/web-directory block.
 * Field ID: field_645f173cb76ff
 */
add_filter('acf/load_field/key=field_645f173cb76ff', 'pitchfork_people_acf_load_directory_select');
function pitchfork_people_acf_load_directory_select( $field ) {

    // reset choices
    $field['choices'] = array();

	// Get the web directory data
	$data = get_asu_search_webdir_departments();

	// Flatten the resulting data array
	$choices = [];
	pfpeople_flatten_webdir_departments_json($data, $choices);

    // loop through array and add to field 'choices'
    if( is_array($choices) ) {

        foreach( $choices as $choice ) {

			$value = $choice['name'];
			$label = $choice['id'];
            $field['choices'][ $label ] = $value;

        }

    }

    // return the field
    return $field;

}
