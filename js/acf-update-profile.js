/**
 * Admin JS file to monitor ACF fields for changes and deliver a preview.
 */

jQuery(document).ready(function ($) {

	$(".acf-field-63d4433b4c456 input").focusout(function(){

		console.log( 'Steve: ' + $(this).val() );

		var value = $(this).val();
		var asuSearchAPI = 'https://search.asu.edu/api/v1/webdir-profiles/faculty-staff?size=1&query=' + value;
		$.getJSON( asuSearchAPI, {
			format: 'json'
		})
		.done(function( data ) {
			console.log(data);
			$meta = data.meta
			$results = data.results
			if (data.results) {
				console.log(data.results);
			}

			$returnCount = '<p class="return-count">Search returned ' + data.meta.page.total_results + ' total people.</p>';
			$('.return-count').remove();
			$('#preview-results').prepend($returnCount);

		});
	})

});

