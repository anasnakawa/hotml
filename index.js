// -----------------------------------------------------------------
// hotml - v0.0.1 
// (c) Anas Nakawa - <anas.nakawa@gmail.com>
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
// -----------------------------------------------------------------

var fs = require( 'fs' )
  , hotml = require( './lib/hotml' );

/**
 * Parse given `hotml` string into html
 *
 * @param {string} input
 * @param {function} callback
 */

function parseString( input, callback ) {
  console.log( hotml( input ) );
}

/**
 * Parse given `hotml` file into html
 *
 * @param {string} path
 * @param {function} callback
 */

function parseFile( path, callback ) {
  fs.readFile( path, function( e, file ) {
    if( e ) {
      return callback( e, null );
    }

    parseString( file.toString(), callback );
  });
}

/**
 * expose parsing methods
 */

module.exports = {
    parseString: parseString
  , parseFile: parseFile
}

parseFile( './test/hotml/index.hotml' );