
var parser = require( './parser' );

/**
 * expose `hotml`
 */

module.exports = hotml;

/**
 * `hotml` constructor
 */

function hotml( content ) {
	var parsed = new parser( content );

	return {
		  imports: parsed.imports()
		, definitions: parsed.definitions()
		, plugin: parsed.plugin()
	}
}