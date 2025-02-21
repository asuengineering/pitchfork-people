# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

### Version 1.6.1

- FIX: The admin display of the `web-directory` block now shows the returned list of faculty members when displaying a `faculty_rank` list.

### Version 1.6.0

This release adds new features to the `profile-data` and `web-directory` blocks.

- ADD: Users can now toggle the display of an email addrtess within a `profile-data` block.
- ADD: Users can also override the working title within a `profile-data` block.
- ADD: The `web-directory` component now supports a grid view in addition to the traditional single column listing. Block controls were added to allow for the initial view of the block to be set to either "grid view" or "list view."

Props to [@jkcox](https://github.com/jkcox) for implementing all of the above features. :tada:

**Package Versions**

The new grid view options within the `web-directory` block require styles that were added to a corresponding update of the `unity-bootstrap-theme`. Be sure your theme is running at least v1.20.0 of the Bootstrap package in order to display correctly.

| Package         | Old version | Updated Version |
| --------------- | ----------- | --------------- |
| `app-webdir-ui` | 3.6.3       | 4.1.2           |

### Version 1.5.1

This patch release addresses a display issue for ASU Search profiles for courtsey affiliates and other employment statuses.

- FIX: The absence of a working title will no longer result in a display error for a single `profile-data` block.

### Version 1.5.0

This minor release adds some performance updates and additional options to the `web-directory` and `profile-data` blocks. It will also officially deprecate a block style available in individual profile blocks.

DEPRECATED: The "micro" block style for `profile-manual` and `profile-data` blocks has been removed from the UI.

- Blocks currently deployed using that style will still be displayed correctly.
- New blocks will no longer have the "micro" block style as an option in the WordPress block editor.
- If still needed, the micro block style can be manually re-enabled by applying `is-style-micro` as a manual CSS class in the block.
- Consider using the new "vertical" block style for similar content density.

**`/web-directory`**

- ADD: The `web-directory` block now supports an ad-hoc configuration to add unrelated profiles from ASU Search into the component.
- ADD: The ad-hoc configuration for the web directory block also allows for the selection of a preferred title for added profiles.

Props to [@jkcox](https://github.com/jkcox) for the web directory ad-hoc configuration development. :tada:

**`/profile-data`**

- ADD: There will now be a default image assigned to a profile block without the need for an added CSS class to enable the feature.
- FIX: Additional API calls to ASU Search to determine the availability of a profile image were eliminated.
- ADD: Display options to show/hide social media links, the phone number and location details.

**`/profiles`**

- ADD: A preferred department selection field was added to the wrapping `profiles` block.

Selecting the preferred department will align all data profile blocks within the wrapper to use the selected department and affiliated title within the display. Profiles that are unaffiliated with the selected department will continue to use their default title and departments.

**Package Versions**

| Package         | Old version | Updated Version |
| --------------- | ----------- | --------------- |
| `app-webdir-ui` | 3.5.0       | 3.6.3           |

### Version 1.4.2

This patch release addresses a compatability issue with [Git Updater](https://git-updater.com/).

- FIX: Added a primary branch indicator in main plugin file to allow Git Updater to pull updates from the correct branch.

### Version 1.4.1

This patch minor release addresses a compatability issue with the UDS WordPress theme from Knowledge Enterprise.

- FIX: A dependency on a stylesheet from the Pitchfork theme was removed allowing this plugin to load its included stylesheet regardless of the theme in use.
- CHANGE: Users may now create pages with more than one `web-directory` block per page. If more than one `web-directory` block is used on a page, each block is required to have a unique HTML anchor defined in the block settings panel.

**Package Versions**

| Package         | Old version | Updated Version |
| --------------- | ----------- | --------------- |
| `app-webdir-ui` | 3.5.0       | (no change)     |

### Version 1.4

- UPDATE: Performance improvements for `profile-data` blocks. Blocks that are grouped together within the same `profiles` block are now included in the same API call to ASU Search. That results in a faster page load time for both the editor and the front end of the site.
- ADD: The `web-directory` block now displays results of initial department query within the block editor.
- ADD: The `web-directory` block also now supports filtering of a returned set of profiles by expertise, employee type and campus.
- ADD: The `web-directory` block now allows for an arbitrary list of people to be excluded from the results returned on the front end.

**Package Versions**

| Package         | Old version | Updated Version |
| --------------- | ----------- | --------------- |
| `app-webdir-ui` | 3.4.0       | 3.5.0           |

### Version 1.3

This release updates the app-webdir-ui package from the ASU Unity project. This release increments the package to `"@asu/app-webdir-ui": "^3.4.0"`.

- UPDATE: Uses latest react components for the web directory and faculty rank directory blocks.
- ADD: Add support for toggling on/off the "alpha filter" UI control within the web directory block.
- DELETE: Removed a few unused temporary files from the repository.
- CHANGE: Increased timeout for ASU Search API calls to allow a grace period for occasional service slowing.

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
