/* Import node module */
	var path = require('path');
	var fs = require('fs');

/* Class declaration */

	function CustomFS () {}

/* Module exportation */

	module.exports = CustomFS;

/* Static method declartion */

	CustomFS.getDirectoriesSync = function(srcPath) {
		return fs.readdirSync(srcPath).filter(function(file) {
			return fs.statSync(path.join(srcPath, file)).isDirectory();
		});
	};

	CustomFS.checkPathSync = function(path) {
		try {
			var stat = fs.lstatSync(path);
			if (stat !== undefined) {
				return true;
			}
			return false;
		} catch (e) {
			return false;
		}
	};

	CustomFS.getFilesSync = function(srcPath) {
		return fs.readdirSync(srcPath).filter(function(file) {
			return fs.statSync(path.join(srcPath, file)).isFile();
		});
	};