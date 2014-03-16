// -----------------------------------------------------------------
// hotml - v0.0.1 
// (c) Anas Nakawa - <anas.nakawa@gmail.com>
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
// -----------------------------------------------------------------

var fs = require( 'fs' );

/**
 * Parse given `hotml` string into html
 *
 * @param {string} input
 * @param {function} callback
 */

function parseString( input, callback ) {

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

    parseString( content, callback );
  });
}

module.exports.parseString = parseString;
module.exports.parseFile = parseFile;