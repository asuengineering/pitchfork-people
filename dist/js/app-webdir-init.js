/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./src/scripts/app-webdir-init.js ***!
  \****************************************/
// console.log(udsWebdirVars);

window.addEventListener("DOMContentLoaded", event => {
  const webDirTarget = document.querySelector("#pfpeople-web-directory");
  const searchType = webDirTarget.dataset.searchtype;
  const deptIDs = webDirTarget.dataset.depts;
  const pagination = webDirTarget.dataset.pagination;
  const alphaFilter = webDirTarget.dataset.alphafilter;
  const display = {
    defaultSort: "last_name",
    profilesPerPage: pagination,
    usePager: "1"
  };
  const filters = {
    employee: "",
    expertise: "",
    title: "",
    campuses: ""
  };
  webdirUI.initWebDirectory({
    targetSelector: "#pfpeople-web-directory",
    props: {
      searchType: searchType,
      deptIds: deptIDs,
      API_URL: 'https://search.asu.edu/',
      searchApiVersion: 'api/v1/',
      filters: filters,
      display: display,
      alphaFilter: alphaFilter
    }
  });

  // console.log(udsWebdirVars);
});
/******/ })()
;
//# sourceMappingURL=app-webdir-init.js.map