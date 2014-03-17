
var dom = require( './dom' );

/**
 * expose `parser`
 */

module.exports = parser;

/**
 * `parser` constructor
 */

function parser( content ) {
  this.content = content;
  this.$ = new dom( content );
}

/**
 * get `hotml` imports
 *
 * @return {dom} instance
 */

parser.prototype.imports = function() {
  return this.$.tag( 'import' );
};

/**
 * get `hotml` definitions
 *
 * @return {dom} instance
 */

parser.prototype.definitions = function() {
  return this.$.tag( 'define' );
};

/**
 * get `hotml` plugins
 *
 * @return {dom} instance
 */

parser.prototype.plugin = function() {
  return this.$.tag( 'using' );
};