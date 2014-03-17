// -----------------------------------------------------------------
// hotml - v0.0.1 
// (c) Anas Nakawa - <anas.nakawa@gmail.com>
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
// -----------------------------------------------------------------

module.exports = function( grunt ) {

	grunt.initConfig({

		nodeunit: {
			tests: [ 'test/*_test.js' ]
		}

		, clean: {
			tests: [ 'test/tmp' ]
		}

	});

	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );

	grunt.registerTask( 'test', [ 'clean', 'nodeunit' ] );

}