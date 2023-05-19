# Pitchfork Blocks

A plugin for use with the [Pitchfork theme](https://github.com/asuengineering/pitchfork) for WordPress.

This plugin adds blocks for the creation of directory and people-centric pages for the WordPress block editor. The block designs are consistent with the ASU Unity Design system for web standards.

Requires at least: WP 6.2
Tested up to: 6.2
Requires PHP: 7.3
Stable tag: 1.0
License: GPLv2 or later

License URI: https://www.gnu.org/licenses/gpl-2.0.html

**Contributors**

- Steve Ryan (ASU Engineering)

## Usage Requirements

- Download the lastest release from Github.
- Install in the normal WP location for plugins which is typically `/wp-content/plugins`.

**Recommended / Required Additional Plugins**

This plugin contains blocks that are constructed with the use of Advanced Custom Fields Pro.

- The ACF Pro plugin is also required by the Pitchfork theme.
- The theme contains a script which will prompt the user to install this plugin upon theme activation.
- ASU Engineering provides a licensed copy of this plugin within its standard distribution of WordPress on the Pantheon hosting platform.

Plugin updates can applied from the admin dashboard through the use of [WP Pusher](https://wppusher.com/) or GitHub Updater.

## Includes

- This plugin [conditionally loads the app-webdir-ui package](https://github.com/orgs/ASU/packages) from the Unity project as needed. All other styles are expected to be provided by the theme for WordPress theme (which ideally would load a copy of the `unity-bootstrap-theme` also found within the ASU package library).

## Development

- SASS and JS compile & watch tasks are triggered via WP-Gulp and `npm start` from the project root.

## Release Notes

See [CHANGELOG.md](CHANGELOG.md) for the a list of all improvements made to the plugin.

We also keep similar notes in the [releases section](https://github.com/asuengineering/pitchfork-people/releases) of our project for an overview of what changed with each release.
