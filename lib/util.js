
var _ = require( 'lodash/dist/lodash.underscore' );

/**
 * expose `util`
 */

var util = module.exports = _;

/**
 * local variables
 */
 
var id = 1;
var each = _.each;
var isFunction = _.isFunction;
var ObjProto   = Object.prototype;
var ArrayProto = Array.prototype;
var toString   = ObjProto.toString;
var hasOwn     = ObjProto.hasOwnProperty;

/**
 * type checkig
 */

util.is = {
 	  string 	: _.isString
	, number 	: _.isNumber
	, bool 		: _.isBoolean
	, fn 			: _.isFunction
	, array 	: _.isArray
	, undef 	: 'undefined'
	, numeric : isNumeric
	, hash 		: isHash

	// will hold negations
	, not 		: {}
}

/**
 * negating all type checkings
 */

each( util.is, function( fn, fnName ) {
	isFunction( fn ) && ( util.is.not[ fnName ] = function() {
			return !util.is[ fnName ].apply( this, arguments );
		}
	);
});

/**
 * checks wither a string can be casted into number
 * 
 * @param {string} n
 * @return {boolean}
 * @api public
 */

function isNumeric( n ) {
	return !isNaN( parseFloat( n ) ) && isFinite( n );
}

/**
 * checks wither an object is an object literal `{}`
 * 
 * @param {object} o
 * @return {boolean}
 * @api public
 */

function isHash( o ) {
	// fail fast for falsy/non-object/HTMLElement/window objects
	// also check constructor properties - objects don't have their own constructor,
	// and their constructor does not have its own `isPrototypeOf` function
	if ( !o || typeof o !== 'object' || ( typeof window !== 'undefined' && o === window ) ||
	   ( o.constructor && ! hasOwn.call( o, 'constructor' ) && ! hasOwn.call( o.constructor.prototype, 'isPrototypeOf' ) ) ) {
	  return false;
	}

	// from jQuery source: speed up the test by cycling to the last property,
	// since own properties are iterated over first and therefore the last one will
	// indicate the presence of any prototype properties
	for ( var key in o ){}
	return ( key === undefined || hasOwn.call( o, key ) );
}

/**
 * id generation
 */

util.id = {};

/**
 * get next unique id
 * 
 * @param {string} prefix
 * @return {string|number}
 * @api public
 */

util.id.next = function getNextId( prefix ) {
	if( prefix == null ) {
	  return ++id;
	}
	return prefix + ( ++id );
}