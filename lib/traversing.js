
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
 * @param {string} html
 * @param {string} selector
 * @return {object}
 */

traversing.objectify = function( html, selector ) {
  var $ = cheerio.load( html );
  var result = [];

  $( selector ).each( function( index, element ) {
    result.push({
        name : element.name
      , type : element.type
      , attrs: element.attribs
      , data : element.data
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