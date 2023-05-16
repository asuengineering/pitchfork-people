// console.log(udsWebdirVars);

window.addEventListener("DOMContentLoaded", event => {

	const webDirTarget = document.querySelector("#pfpeople-web-directory");
	const searchType = webDirTarget.dataset.searchtype;
	const deptIDs = webDirTarget.dataset.depts;

	const display = {
		defaultSort: "last_name",
		profilesPerPage: "20",
		usePager: "1",
	};
	const filters = {
		employee: "",
		expertise: "",
		title: "",
		campuses: "",
	};

	webdirUI.initWebDirectory({
		targetSelector: "#pfpeople-web-directory",
		props: {
			searchType: searchType,
			deptIds: deptIDs,
			API_URL: 'https://search.asu.edu/',
			searchApiVersion: 'api/v1/',
			filters: filters,
			display: display
		},
	});

	// console.log(udsWebdirVars);
});
