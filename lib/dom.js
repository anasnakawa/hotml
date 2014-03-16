
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