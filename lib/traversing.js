
var cheerio = require( 'cheerio' );

/**
 * expose `traversing`
 */

var traversing =  module.exports = {};

traversing.getImports = function( html ) {
  return traversing.objectify( html, 'import' );
}

traversing.getUsings = function( html ) {
  return traversing.objectify( html, 'using' );
}

traversing.getDefinitions = function( html ) {
  return traversing.objectify( html, 'define' );
}

/**
 * extract given nodes from an html string, and return them as an object
 *
 * @alias `getObject`
 *
 * @param {string} html
 * @param {string} selector
 * @return {object}
 */

traversing.objectify = traversing.getObject = function( html, selector ) {
  var $ = cheerio.load( html );
  var result = [];
  $( selector ).each( function() {
    result.push({
        name : this[ 0 ].name
      , type : this[ 0 ].type
      , attrs: this[ 0 ].attribs
      , data : this[ 0 ].data
    });
  });

  return result;
}

traversing.nodeFactory = function( node ) {
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