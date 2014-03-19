
var fs = require( 'fs' );
var path = require( 'path' );

/**
 * expose `file`
 */

var file = exports = module.exports = {};

/**
 * enum file types
 */

file.types = {
    HTML: 1
  , HOTML: 2
  , JS: 3
  , UNKNOWN: 4
}

/**
 * checks wither given url belongs to .html, .hotml or .js file
 *
 * @param {string} url
 * @return {boolean}
 * @api public
 */

file.isValidType = function( url ) {
  var ext = path.extname( url );
  var regValidTypes = /.(hotml|html|js)/;

  return ext == '' || !!ext.match( regValidTypes ) || ext == null;
}

file.readFile = function( url ) {
  var output;
  try {
    output = fs.readFileSync( url ).toString();
  } catch( e ) {}

  return output;
}