
module.exports = function( grunt ) {

  grunt.initConfig({

    simplemocha: {
      all: { 
        src: [ 'test/*.js' ] 
      }
    }

    , clean: {
      tests: [ 'test/tmp' ]
    }

  });

  // offical plugins
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );

  // other
  grunt.loadNpmTasks( 'grunt-simple-mocha' );

  grunt.registerTask( 'mocha', [ 'simplemocha' ] );
  grunt.registerTask( 'travis', [ 'clean', 'simplemocha' ] );
}