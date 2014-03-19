// -----------------------------------------------------------------
// hotml - v0.0.1 
// (c) Anas Nakawa - <anas.nakawa@gmail.com>
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
// -----------------------------------------------------------------

module.exports = function( grunt ) {

  grunt.initConfig({

    simplemocha: {
      options: {
        //   globals: [ 'should' ]
        // , timeout: 3000
        // , ignoreLeaks: false
        // , grep: '*-test'
        // , ui: 'bdd'
        // , reporter: 'tap'
        }
        , all: { 
          src: [ 'test/*.js' ] 
        }
    }

    , clean: {
      tests: [ 'test/tmp' ]
    }

  });

  // offical plugins
  grunt.loadNpmTasks( 'grunt-contrib-clean' );

  // other
  grunt.loadNpmTasks( 'grunt-simple-mocha' );

  grunt.registerTask( 'mocha', [ 'simplemocha' ] );
  grunt.registerTask( 'travis', [ 'clean', 'simplemocha' ] );
}