/**
 * Admin JS file to monitor ACF fields for changes and deliver a preview.
 */

jQuery(document).ready(function ($) {

	/**
	 * Set initial state.
	 */

	// Create a button for updating the data from the card preview.
	// .acf-field_63dd9c765b15e = ACF message field, 'Update fields'
	button = '<button id="update-fields" type="button" class="button button-primary button-large">' +
			  'Update fields from feed</button>';
	$('.acf-field-63dd9c765b15e').append('<div class="acf-action">' + button + '</div>');

	// Common variables
	var field_asurite = $(".acf-field-63d4433b4c456 input");
	var field_syncdata = acf.getField('field_63d44f52a46e2');

	var isProfileValid = false;
	var profileData;

	/**
	 * Update global profileData with returned results from pull_asu_search_data().
	 * @param {object} data // Returned value
	 */
	function callback_returned_profile_data(data, valid){
		profileData = data;
		isProfileValid = valid;
		console.log( profileData );

		// Set #update-fields button to disabled if there's no data to sync.
		if (isProfileValid && ! field_syncdata.val()) {
			$('#update-fields').prop("disabled",false);
		} else {
			$('#update-fields').prop("disabled",true);
		}
	}

	/**
	 * Event handlers
	*/

	// Toggle data field state based on control.
	field_syncdata.on('change', function() {
		toggle_data_fields_state(field_syncdata.val());
	});

	// Pull profile preview when asurite field is unfocused.
	field_asurite.focusout( function() {
		pull_asu_search_data();
	});

	// Update fields when user clicks the update button.
	$('#update-fields').click( update_fields_from_feed );

	/**
	 * Add an action before the form is submitted to place the disabled fields into an enabled state.
	 * Disabled fields are never submitted via submit button.
	*/
	acf.add_filter('validation_complete', function( json, $form ){
		toggle_data_fields_state( true );
		return json;
	});

	// Pull profile data when the page is initially loaded.
	// Set field visibility to initial state.
	pull_asu_search_data();
	toggle_data_fields_state( field_syncdata.val());

	/**
	 * Retrieve data from ASU Search, build a preview caed.
	 * Pass data to global profileData variable via callback.
	 */
	function pull_asu_search_data() {

		asurite = acf.getField('field_63d4433b4c456').val();
		$('.uds-profile-preview').remove();

		var asuSearchAPI = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff/filtered?asurite_ids=' + asurite;
		$.getJSON( asuSearchAPI, {
			format: 'json'
		})
		.done(function( data ) {
			console.log('Got the data.');
			meta = data.meta;
			results = data.results;

			callback_returned_profile_data( data.results[0], meta.page.total_results );

			// Render example card or placeholder with no data.
			if (meta.page.total_results) {
				exampleCard = '<div class="uds-profile-preview"><img src="' + results[0].photo_url.raw + '" height="100" width="100" class="profile-img" alt="Preview of profile card"><div class="display-contents"><p class="name"><a href="https://search.asu.edu/profile/' + results[0].eid.raw + '">' + results[0].display_name.raw + '</a></p><p class="dept">' + results[0].primary_department.raw + '</p><p class="email">' + results[0].email_address.raw + '</p></div></div>';
			} else {
				exampleCard = '<div class="uds-profile-preview"><div class="display-contents"><p class="name">No results returned.</p><p class="dept">Try a different ASURITE ID</p></div></div>';
			}

			$('.uds-profile-preview').remove();
			$('#preview-results').append(exampleCard);
		});
	}

	/**
	 * Update fields in the fieldset based on data from profileData global variable.
	 */
	function update_fields_from_feed() {

		// field_63d44f52a46e2 = 'pfpeople_sync_data'
		var toggleDisable = acf.getField('field_63d44f52a46e2');

		// If the toggle value is set to update the data fields, perform the update.
		if (toggleDisable) {
			dataFields = {
				'field_63d842cf70dee': profileData.display_name.raw, // pfpeople_name
				'field_63d842cf70e00': 'https://search.asu.edu/' + profileData.eid.raw, // pfpeople_url
				'field_63d842cf70e07': profileData.primary_title.raw[0], // pfpeople_title
				'field_63d842cf70e0b': profileData.primary_department.raw, // pfpeople_department
				'field_63d842cf70e0e': profileData.bio.raw, // pfpeople_description
				'field_63d842cf70e15': profileData.email_address.raw, // pfpeople_email
			};

			/**
			 * Test attributes that might be missing from profileData.
			 * Assign blank values if the key isn't in the object.
			 */
			if (profileData.hasOwnProperty('phone')) {
				dataFields['field_63d842cf70e18'] = profileData.phone.raw; // pfpeople_phone
			} else {
				dataFields['field_63d842cf70e18'] = '';
			}

			if (profileData.hasOwnProperty('campus_address')) {
				dataFields['field_63d842cf70e1b'] = profileData.campus_address.raw; // pfpeople_address
			} else {
				dataFields['field_63d842cf70e1b'] = '';
			}

			for (const key in dataFields) {
				field = acf.getField(key);
				field.val(dataFields[key]);
			};
		};
	};

	/**
	 * Toggle fields to be driven by data input from Search.
	 * Pass a true value to enable the fields.
	 *
	 * @param {boolean} enable
	 */
	function toggle_data_fields_state( enable ) {

		// Disable/enable the following fields.
		dataFields = [
			'field_63d842cf70dee', // pfpeople_name
			'field_63d842cf70e00', // pfpeople_url
			'field_63d842cf70e07', // pfpeople_title
			'field_63d842cf70e0b', // pfpeople_department
			'field_63d842cf70e0e', // pfpeople_description
			'field_63d842cf70e15', // pfpeople_email
			'field_63d842cf70e18', // pfpeople_phone
			'field_63d842cf70e1b', // pfpeople_address
		];

		// Toggle fields to disabled or enabled depending on value passed to function.
		dataFields.forEach(dataField => {
			field = acf.getField(dataField);
			enable ? field.enable() : field.disable();
		});

		// Also hide or show the image upload field since it can't be disabled.
		imageField = acf.getField('field_63d842cf70df9');  // pfpeople_alt_image
		enable ? imageField.show() : imageField.hide();

		// Also check if returned data is valid along with enabled to set state of update button.
		if (! enable && isProfileValid) {
			$('#update-fields').prop("disabled",false);
		} else {
			$('#update-fields').prop("disabled",true);
		};

	};

});

