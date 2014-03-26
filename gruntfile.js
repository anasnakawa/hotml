
module.exports = function( grunt ) {

  grunt.initConfig({

    simplemocha: {
      all: { 
        src: [ 'test/*.js' ] 
      }
    }

    , concat: {
      hotml: {
        files: {}
      }
    }

    , clean: {
      tests: [ 'test/tmp' ]
    }

    , 'node-inspector': {
      dev: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost'
        }
      }
    }

    , shell: {
      debug: {
          optoins: { stdout: true }
        , command: 'node-debug $(which grunt) debug'
      }
    }

  });

  // offical plugins
  grunt.loadNpmTasks( 'grunt-contrib-clean' );
  grunt.loadNpmTasks( 'grunt-contrib-concat' );

  // other
  grunt.loadNpmTasks( 'grunt-simple-mocha' );
  grunt.loadNpmTasks( 'grunt-node-inspector' );
  grunt.loadNpmTasks( 'grunt-shell' );

  // tasks
  grunt.registerTask( 'mocha', [ 'simplemocha' ] );
  grunt.registerTask( 'debug', [ 'node-inspector' ] );
  grunt.registerTask( 'travis', [ 'clean', 'simplemocha' ] );
}