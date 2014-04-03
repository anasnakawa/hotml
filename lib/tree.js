
var util = require( './util' );
var traverser = require( './traversing' );

/**
 * expose `syntax tree`
 */

var tree = module.exports = {};


/**
 * parse given `hotml` string and return
 * an object representation
 *
 * @param {string} hotml
 * @return {object} tree
 * @api public
 */

tree.parse = function( hotml ) {
  var result = {};

  // source
  result._source = hotml;

  // imports
  result.imports = traverser.getImports( hotml );

  // definitions
  result.definitions = traverser.getDefinitions( hotml );

  // plugins
  result.plugins = traverser.getUsings( hotml );

  return result;
}

// parse hotml file
// - get imports
// - load them into path
// - go through all childrens
// - get import for each children
// - load them into path as well
// - current children has