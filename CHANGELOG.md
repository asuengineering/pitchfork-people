# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

### Version 1.3

This release updates the app-webdir-ui package from the ASU Unity project. This release increments the package to `"@asu/app-webdir-ui": "^3.4.0"`.

- UPDATE: Uses latest react components for the web directory and faculty rank directory blocks.
- ADD: Add support for toggling on/off the "alpha filter" UI control within the web directory block.
- DELETE: Removed a few unused temporary files from the repository.

### Version 1.2

This release adds support for a fourth block style for both the `acf/profile-manual` and `acf/profile-data` blocks. The new style defines a vertical layout allowing for a very lightweight approach to building directory pages.

- ADD: Add vertical style option for `acf/profile-manual` and `acf/profile-data` blocks.
- ADD: Add support for four column layout with the `acf/profiles` container block.

Props to [@wmcconnell](https://github.com/wmcconnell) for the vertical style implementation.

- FIX: Removed `acf-innerblocks-container` wrapper from `acf/profiles` block. The function performing this task was located within [Pitchfork Blocks](https://github.com/asuengineering/pitchfork-blocks) and was relocated to this plugin for better comptability.

### Version 1.1

A function which filtered the output of `acf/profiles` was redelared in both the Pitchfork People and Pitchfork Blocks plugins with different expected outputs. The result was a layout problem within the `acf/hero` block when the Pitchfork People plugin was also activated.

- FIX: Removed the duplicate ACF block filter function.

### Version 1.0

Initial release of the plugin. Adds four blocks to the native block editor.

The existing blocks for building directory pages with manual profile data were relocated from Pitchfork Blocks to this separate plugin.

- CHANGE: `acf/profiles` and `acf/profile-manual` were moved to this new plugin.

Two new blocks were created for this initial release.

- ADD: The `acf/profile-data` block allows an individual profile to be displayed on a page. The block is formatted in an identical way to the `acf/profile-manual` blocks already in existence. They can easily be substituted in the existing directory patterns within the theme.
- ADD: The `acf/web-directory` block implements the full page directory displays from the Unity project. The block has two display modes: a "standard" web directory and a ranked faculty list.

**Documentation:**

- ADD: https://wordpress.asu.edu/pitchfork/docs/profile-block-data/
- ADD: https://wordpress.asu.edu/pitchfork/docs/web-directory-block/

### Version 0.2

Marks the beta version of the plugin deployed to a production environment for testing.
