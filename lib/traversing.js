
var cheerio = require( 'cheerio' );

/**
 * expose `dom`
 */

module.exports = dom;

/**
 * `dom` constructor
 */

function dom( html ) {
  this.html = html;
  this.$ = cheerio.load( html );
  this.result = null;
}

/**
 * get elements by tag name
 *
 * @param {string} tagname
 * @return {dom} instance
 */

dom.prototype.tag = function( tagname ) {
  this.result = this.$( tagname );
  return this;
};

/**
 * get traversed output as html string
 *
 * @return {string} html
 */

dom.prototype.html = function() {
  return this.result.html();
};

var traversnig =  module.exports = {};

traversnig.getImports = function( html ) {
  var $ = cheerio.load( html );
  $( 'import' )
}

/**
 * extract given nodes from an html string, and return them as an object
 *
 * @param {string} html
 * @param {string} selector
 * @return {object}
 */

traversnig.objectify = function( html, selector ) {
  var $ = cheerio.load( html );
  var result = [];
  $( selector ).each( function() {
    result.push( traversnig.nodeFactory( this ) );
  });

  return result;
}

traversnig.nodeFactory = function( node ) {
  return {
      name: node.name
    , attrs: node.attribs
    , data: node.data
  }
}

function nodeFactory( node ) {
  return {
      name: node.name
    , attrs: node.attribs
    , data: node.data
  }
}