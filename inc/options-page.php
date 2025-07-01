<?php
/**
 * Register options page for Pitchfork People
 *
 * Contents:
 *   - User defined constant for how long to cache the results of API calls.
 *   - A "clear transient" button to clear cached results manually.
 *
 * @package pitchfork_people
 */

/**
 * Register options page
 */
add_action( 'admin_menu', function() {
	add_options_page(
		'Pitchfork People',
		'Pitchfork People',
		'manage_options',
		'pfpeople_block_cache',
		'pfpeople_block_cache_settings_page'
	);
} );

/**
 * Register settings
 */
add_action( 'admin_init', function() {
	register_setting( 'pfpeople_block_cache_options', 'pfpeople_block_cache_mode' );
} );

/**
 * Settings page UI
 */

function pfpeople_block_cache_settings_page() {
	$mode = get_option( 'pfpeople_block_cache_mode', 'standard' );

	// Check if button was pressed
	if ( isset( $_POST['clear_cache_now'] ) && check_admin_referer( 'clear_pfpeople_cache' ) ) {
		pfpeople_clear_block_transients();
		echo '<div class="notice notice-success is-dismissible"><p>Cache cleared successfully.</p></div>';
	}

	?>
	<div class="wrap">
		<h1>Pitchfork People</h1>
		<h2>Cache length</h2>
		<form method="post" action="options.php">
			<?php
			settings_fields( 'pfpeople_block_cache_options' );
			do_settings_sections( 'pfpeople_block_cache_options' );
			?>

			<p>The default cache length for ASU Search API results to be stored by any <code>acf/profile-data</code> or <code>acf/profiles</code> block is 30 days.</p>
			<p>Temporarily switching to <strong>development mode</strong> to make extensive changes to pages containing profile data can help ensure the most accurate results are available.</p>
			<p>Pages which display profile data that is not subject to frequent change will benefit from caching the results for <strong>long term</strong> display.</p>

			<table class="form-table">
				<tr valign="top">
					<th scope="row">Pitchfork Block Cache length</th>
					<td>
						<select name="profile_block_cache_mode">
							<option value="development" <?php selected( $mode, 'development' ); ?>>Development (1 hour)</option>
							<option value="daily" <?php selected( $mode, 'daily' ); ?>>Daily (1 day)</option>
							<option value="standard" <?php selected( $mode, 'standard' ); ?>>Standard (30 days)</option>
							<option value="long_term" <?php selected( $mode, 'long_term' ); ?>>Long Term (1 year)</option>
						</select>
						<p class="description">Controls how long profile data is cached before requiring a call to the ASU Search API for new data.</p>
					</td>
				</tr>
			</table>

			<?php submit_button(); ?>
		</form>


		<hr>
		<h2>Cached Data Summary</h2>

		<?php
			$cached = pfpeople_get_cached_transients_summary();
			$count = count( $cached );

			if ( $count ) {
				echo "<p><strong>$count cached item(s) found.</strong></p>";
				echo '<table class="widefat fixed striped">';
				echo '<thead><tr><th>Key</th><th>Expires</th></tr></thead><tbody>';

				foreach ( $cached as $item ) {
					echo '<tr>';
					echo '<td><code>' . esc_html( $item['key'] ) . '</code></td>';
					echo '<td>' . esc_html( $item['expiry'] ) . '</td>';
					echo '</tr>';
				}

				echo '</tbody></table>';
			} else {
				echo '<p><em>No cached profile data found.</em></p>';
			}
		?>
		<form method="post">
			<?php wp_nonce_field( 'clear_pfpeople_cache' ); ?>
			<?php submit_button( 'Clear Cache Now', 'secondary', 'clear_cache_now' ); ?>
		</form>
	</div>
	<?php
}

/**
 * Translate stored option into defined WordPress constant for transient expiration.
 */
function pfpeople_get_block_cache_expiration() {
	$mode = get_option( 'profile_block_cache_mode', 'standard' );

	switch ( $mode ) {
		case 'development':
			return HOUR_IN_SECONDS;
		case 'daily':
			return DAY_IN_SECONDS;
		case 'long_term':
			return YEAR_IN_SECONDS;
		case 'standard':
		default:
			return 30 * DAY_IN_SECONDS;
	}
}

/**
 * Get a summary of the transient data that is stored in the table.
 */
function pfpeople_get_cached_transients_summary() {
	global $wpdb;

	$prefixes = [
		'_transient_pfpeople_single_profile_',
		'_transient_uds_profiles_',
	];

	$transient_data = [];

	foreach ( $prefixes as $prefix ) {
		$results = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT option_name, option_value FROM {$wpdb->options} WHERE option_name LIKE %s",
				$prefix . '%'
			)
		);

		foreach ( $results as $row ) {
			$key = $row->option_name;
			$transient_data[] = [
				'key'    => $key,
				'expiry' => pfpeople_get_transient_expiry_time( $key ),
			];
		}
	}

	return $transient_data;
}

/**
 * For each known transient key, calculate the expected expiration date/time.
 */
function pfpeople_get_transient_expiry_time( $transient_key ) {
	global $wpdb;

	$timeout_key = str_replace( '_transient_', '_transient_timeout_', $transient_key );

	$timeout = $wpdb->get_var( $wpdb->prepare(
		"SELECT option_value FROM {$wpdb->options} WHERE option_name = %s",
		$timeout_key
	) );

	if ( $timeout ) {
		return date( 'Y-m-d H:i:s', (int) $timeout );
	}

	return 'N/A';
}
