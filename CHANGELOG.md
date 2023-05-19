# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

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
