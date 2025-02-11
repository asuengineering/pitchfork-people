<?php
/**
 * File: profile-data-functions
 *
 * @package         Pitchfork_People
 *
 * Registers functions used to build the acf/profile-data card.
 */


/**
 * Create markup for the profile image.
 * See notes about how the default img is rendered.
*/
function pfpeople_disply_profile_image($data) {

	$photo_url = $data->photo_url->raw;

	$displayname = '';
	$displayname 	= $data->display_name->raw;

	/**
	 * $photo_url property will always return a URL. However, the URL might not aways point to a valid image.
	 * Including '?blankImage2=1` at the end of the produced URL for the profile image will display either
	 * the person's real image or the "missing-man.png" image. Magic via the ASU Search API.
	*/

	$profileimg = '<div class="profile-img-container"><div class="profile-img-placeholder">';
	$profileimg .= '<img src="' . $photo_url . '?blankImage2=1" class="profile-img" alt="Portrait of ' . $displayname . '" decoding="async" loading="lazy">';
	$profileimg .= '</div></div>';

	return $profileimg;
}


/**
 * Build name, title and department strings.
 * Include .person-name and .person-profession wrappers.
 */
function pfpeople_card_displayname($data, $display_size, $dept_override, $title_override) {

	// Get the ASURITE fields from the data source.
	$asurite = $data->asurite_id->raw;
	$eid = $data->eid->raw;

	$displayname 	= $data->display_name->raw ?? '';
	$email			= $data->email_address->raw ?? '';

	// Attempt to look for department and title that corresponds to the department override provided.
	/**
	 * Assign a department and a title.
	 * Search for title/dept pair that matches override dept ID provided.
	 * Otherwise default to working title and primary department.
	*/
	$deptids = $data->deptids->raw;
	$dept_index = false;

	if (is_array($deptids)) {
		$dept_index = array_search($dept_override, $deptids);
	}

	if ( $dept_index ) {
		$title  		= $data->titles->raw[$dept_index] ?? '';
		$dept			= $data->departments->raw[$dept_index] ?? '';
		if ( ! empty( $title_override ) ) {
			$title = $title_override;
		}
	} else {
		$title  		= $data->working_title->raw[0] ?? '';
		$dept			= $data->primary_department->raw ?? '';
		if ( ! empty( $title_override ) ) {
			$title = $title_override;
		}
	}

	$output = '';

	/**
	 * Add display name details + link to Seach if appropriate.
	 * Small display size uses a button instead of a linked title.
	 */
	if ( 'small' == $display_size ) {
		$output .= '<h3 class="person-name">' . $displayname . '</h3>';
	} else {
		$output .= '<h3 class="person-name"><a href="https://search.asu.edu/profile/' . $eid . '">' . $displayname . '</a></h3>';
	}

	// Add title string. Results will mostly have a title of some kind but the 'working title' may be unset.
	if ( ! empty( $title ) ) {
		$output .= '<div class="person-profession"><h4><span>' . $title . '</span></h4>';
	} else {
		$output .= '<div class="person-profession">';
	}

	// Add department name or email address (no link) if display is micro.
	if ( 'micro' !== $display_size ) {
		$output .= '<h4><span>' . $dept . '</span></h4></div>';
	} else {
		$output .= '<h4><a href="mailto:' . $email . '" aria-label="Email user" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-section="' . $displayname . '" data-ga="' . $email . '">' . $email . '</a></h4></div>';
	}

	return $output;
}



/**
 * Get contact details, check for blanks. Wrap with <li> elements initially.
 * Check to see if at least one of these is rendered. Then wrap in the <ul> element.
 * If not, return an empty string for the whole thing.
 *
 */
function pfpeople_card_profile_contacts($data, $show_location, $show_phone, $show_email) {

	// Get the ASURITE fields from the data source.
	$asurite 	 = $data->asurite_id->raw ?? '';
	$email 		 = $data->email_address->raw ?? '';
	$phone 		 = $data->phone->raw ?? '' ;
	$address 	 = $data->campus_address->raw ?? '';

	if ( ! empty( $email ) && $show_email ) {
		$email = '<li><a href="mailto:' . $email . '" aria-label="Email user" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="' . $email . '">' . $email . '</a></li>';
	} else {
		$email = '';
	}

	if ( ! empty( $phone ) ) {
		$phone = '<li><a href="tel:' . $phone . '" aria-label="Call user" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="' . $phone . '">' . $phone . '</a></li>';
	}

	// Not linked at all. Can be an address or a room/building number.
	if ( ! empty( $address ) ) {
		$address = '<li>' . $address . '</li>';
	}

	$contactlist = '';
	$contactlist .= $email;

	if ( $show_phone ) {
		$contactlist .= $phone;
	}

	if ( $show_location ) {
		$contactlist .= $address;
	}
	if ( ! empty( $contactlist ) ) {
		$contactlist = '<ul class="person-contact-info">' . $contactlist . '</ul>';
	}

	return $contactlist;
}

/**
 * Render only the email address for vertical profiles.
 */
function pfpeople_card_email_only ( $data ) {

	$contact_data 	= '';
	$email 			= $data->email_address->raw ?? '';
	$asurite 	 	= $data->asurite_id->raw ?? '';

	if ( ! empty( $email ) ) {
		$contact_data = '<a href="mailto:' . $email . '" aria-label="Email user" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="internal link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="' . $email . '">' . $email . '</a>';
	}

	return $contact_data;
}

/**
 * Render description from data feed.
*/
function pfpeople_card_description($data, $display_size) {
	// Get the ASURITE fields from the data source.
	$description = '';

	$eid = $data->eid->raw ?? '';
	$shortbio = $data->short_bio->raw ?? '';
	$longbio = $data->bio->raw ?? '';

	// If the display_size is small, render a button and return early.
	if ( 'small' === $display_size ) {
		$description .= '<a href="https://search.asu.edu/profile/' . $eid . '" class="btn btn-maroon btn-md">View profile</a>';
		return $description;
	}

	// If the display_size is small, render a button and return early.
	if ( 'small' === $display_size ) {
		$description .= '<a href="https://search.asu.edu/profile/' . $eid . '" class="btn btn-maroon btn-md">View profile</a>';
		return $description;
	}

	// Use the long bio. Truncate to ### characters. Run wp_kses_post().
	if ( $longbio ) {
		$description = wp_kses_post($longbio);
		$description = wp_trim_words($description, 100, '...');
	}

	// If there is a short bio present, overwrite with that instead.
	if ( $shortbio ) {
		$description = wp_kses_post($shortbio);
	}

	if ( ! empty( $description ) ) {
		$description = '<div><p class="person-description">' . $description . '</p></div>';
	}

	return $description;
}

/**
 * Render social media icons and links from the returned profile details.
 */
function pfpeople_card_social_icons($data) {

	// Get the ASURITE fields from the data source.
	$facebook = '';
	$linkedin = '';
	$twitter = '';
	$personal = '';

	$asurite 	= $data->asurite_id->raw;
	$facebook 	= $data->facebook->raw ?? '';
	$linkedin 	= $data->linkedin->raw ?? '';
	$twitter 	= $data->twitter->raw ?? '';
	$personal 	= $data->website->raw ?? '';

	$social_list = '';

	if (!empty($facebook)) {
		$social_list .= '<li><a href="' . $facebook . '" aria-label="Go to user social media account: Facebook" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="facebook-icon">';
		$social_list .= '<i class="fa-brands fa-square-facebook"></i></a></li>';
	}

	if (!empty($linkedin)) {
		$social_list .= '<li><a href="' . $linkedin . '" aria-label="Go to user social media account: Linkedin" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="linkedin-icon">';
		$social_list .= '<i class="fa-brands fa-linkedin"></i></a></li>';
	}

	if (!empty($twitter)) {
		$social_list .= '<li><a href="' . $twitter . '" aria-label="Go to user social media account: Twitter" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="twitter-icon">';
		$social_list .= '<i class="fa-brands fa-square-twitter"></i></a></li>';
	}

	if (!empty($personal)) {
		$social_list .= '<li><a href="' . $personal . '" aria-label="Go to user personal website" data-ga-event="link" data-ga-action="click" data-ga-name="onclick" data-ga-type="external link" data-ga-region="main content" data-ga-section="' . $asurite . '" data-ga="web-icon">';
		$social_list .= '<i class="fa-solid fa-globe"></i></a></li>';
	}

	if (! empty($social_list)) {
		$social_list = '<ul class="person-social-medias">' . $social_list . '</ul>';
	}

	return $social_list;
}

/**
 * Return fake profile data for when ASURITE is incomplete or unknown.
 */

function pfpeople_fake_asurite_data() {
	$fakeprofile = new stdClass();

	$fakeprofile->asurite_id = new stdClass();
	$fakeprofile->asurite_id->raw = 'sparky';

	$fakeprofile->eid = new stdClass();
	$fakeprofile->eid->raw = '9999999';

	$fakeprofile->photo_url = new stdClass();
	$fakeprofile->photo_url->raw = 'https://search.asu.edu/sites/default/files/default-headshot.png';

	$fakeprofile->display_name = new stdClass();
	$fakeprofile->display_name->raw = 'Unknown person';

	$fakeprofile->working_title = new stdClass();
	$fakeprofile->working_title->raw[0] = ' ';

	$fakeprofile->primary_department = new stdClass();
	$fakeprofile->primary_department->raw = 'Arizona State University';

	$fakeprofile->deptids = new stdClass();
	$fakeprofile->deptids->raw[0] = '-1';

	$fakeprofile->email_address = new stdClass();
	$fakeprofile->email_address->raw = 'pitchfork@asu.edu';

	$fakeprofile->campus_address = new stdClass();
	$fakeprofile->campus_address->raw = '';

	$fakeprofile->phone = new stdClass();
	$fakeprofile->phone->raw = '';

	$fakeprofile->short_bio = new stdClass();
	$fakeprofile->short_bio->raw = '';

	$fakeprofile->bio = new stdClass();
	$fakeprofile->bio->raw = '';

	$fakeprofile->facebook = new stdClass();
	$fakeprofile->facebook->raw = '';

	$fakeprofile->twitter = new stdClass();
	$fakeprofile->twitter->raw = '';

	$fakeprofile->linkedin = new stdClass();
	$fakeprofile->linkedin->raw = '';

	$fakeprofile->website = new stdClass();
	$fakeprofile->website->raw = '';

	return $fakeprofile;

}
