window.addEventListener("DOMContentLoaded", event => {
	const webDirTargets = document.querySelectorAll(".pfpeople-web-directory");

	webDirTargets.forEach(webDirTarget => {
		const searchType = webDirTarget.dataset.searchtype;
		const deptIDs = webDirTarget.dataset.depts;
		const pagination = webDirTarget.dataset.pagination;
		const alphaFilter = webDirTarget.dataset.alphafilter;
		const exclude = webDirTarget.dataset.exclude;
		const expertise = webDirTarget.dataset.expertise;
		const employeeType = webDirTarget.dataset.employeetype;
		const campus = webDirTarget.dataset.campus;
		const ids = webDirTarget.dataset.ids;

		const display = {
			defaultSort: "last_name",
			doNotDisplayProfiles: exclude,
			profilesPerPage: pagination,
			usePager: "1",
		};
		const filters = {
			employee: employeeType,
			expertise: expertise,
			title: "",
			campuses: campus,
		};

		webdirUI.initWebDirectory({
			targetSelector: `#${webDirTarget.id}`,
			props: {
				searchType: searchType,
				deptIds: deptIDs,
				API_URL: 'https://search.asu.edu/',
				searchApiVersion: 'api/v1/',
				filters: filters,
				display: display,
				alphaFilter: alphaFilter,
				ids: ids
			},
		});
	});
});
