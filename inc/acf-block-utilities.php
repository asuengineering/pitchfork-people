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
function pitchfork_people_acf_calculate_spacing( $block ) {

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
 * Add choices to ACF select field for department name/ID.
 * Used within acf/web-directory block.
 * Field ID: field_645f173cb76ff
 */
add_filter('acf/load_field/key=field_645f173cb76ff', 'pitchfork_people_acf_load_directory_select');
function pitchfork_people_acf_load_directory_select( $field ) {

    // reset choices
    $field['choices'] = array();

	// Get the web directory data
	$data = get_asu_search_webdir_data_assets('departments');

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

/**
 * Add choices to ACF select field for filter by expertise
 * Used within acf/web-directory block.
 * Field ID: field_66676c7192b02
 */
add_filter('acf/load_field/key=field_66676c7192b02', 'pitchfork_people_acf_load_expertise_select');
function pitchfork_people_acf_load_expertise_select( $field ) {

    // reset choices
    $field['choices'] = array();

	// Get the web directory data
	$choices = get_asu_search_webdir_data_assets('expertise');

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

/**
 * Add choices to ACF select field for filter by expertise
 * Used within acf/web-directory block.
 * Field ID: field_66676d1492b03
 */
add_filter('acf/load_field/key=field_66676d1492b03', 'pitchfork_people_acf_load_employee_type_select');
function pitchfork_people_acf_load_employee_type_select( $field ) {

    // reset choices
    $field['choices'] = array();

	// Get the web directory data
	$choices = get_asu_search_webdir_data_assets('employee_types');

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

