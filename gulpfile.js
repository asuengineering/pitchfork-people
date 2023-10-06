const gulp = require('gulp');

// Require GulpWP and pass your local `gulp` instance to it
const gulpWP = require('gulp-wp')(gulp);

/**
 * Copy assets from node_modules.
 * Run: gulp upboot
 *
 * Does the following:
 * 1. Copies _custom-asu-variables.scss partial from asu package.
 *
 */

gulp.task("upboot", function (done) {

	var paths = {
		"node": "./node_modules",
		"dev": "./src",
	}

	/** ----------------------------------------------------------
	Part 1. Assembling the assets for UDS Bootstrap design kit.
	------------------------------------------------------------- */
	// Copy UDS SCSS files from the node /src folder.
	gulp
		.src(paths.node + "/@asu/unity-bootstrap-theme/src/scss/_custom-asu-variables.scss")
		.pipe(gulp.dest(paths.dev + "/styles/unity-bootstrap-theme"));

	// Copy app-webdir-ui JS files
	gulp
		.src(paths.node + "/@asu/app-webdir-ui/dist/*.js")
		.pipe(gulp.dest(paths.dev + "/app-webdir-ui/js"));

	// Copy components core JS files
	gulp
		.src(paths.node + "/@asu/components-core/dist/*.js")
		.pipe(gulp.dest(paths.dev + "/components-core/js"));

	done();
});
