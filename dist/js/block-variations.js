/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************************!*\
  !*** ./src/scripts/block-variations.js ***!
  \*****************************************/
wp.domReady(() => {
  /**
   * Register styles associated with acf/profile-manual
  */

  wp.blocks.registerBlockStyle('acf/profile-manual', [{
    name: 'large',
    label: 'Large',
    isDefault: false
  }]);
  wp.blocks.registerBlockStyle('acf/profile-manual', [{
    name: 'small',
    label: 'Small',
    isDefault: true
  }]);
  wp.blocks.registerBlockStyle('acf/profile-manual', [{
    name: 'vertical',
    label: 'Vertical',
    isDefault: false
  }]);

  /**
   * Register styles associated with acf/profile-data
  */

  wp.blocks.registerBlockStyle('acf/profile-data', [{
    name: 'large',
    label: 'Large',
    isDefault: false
  }]);
  wp.blocks.registerBlockStyle('acf/profile-data', [{
    name: 'small',
    label: 'Small',
    isDefault: true
  }]);
  wp.blocks.registerBlockStyle('acf/profile-data', [{
    name: 'vertical',
    label: 'Vertical',
    isDefault: false
  }]);
});
/******/ })()
;
//# sourceMappingURL=block-variations.js.map