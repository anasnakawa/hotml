
var file = require( '../lib/file' );
var assert = require( 'assert' );
var expect = require( 'expect.js' );

describe( 'file type detection', function() {
	it( 'should detect valid file types for hotml', function() {
		expect( file.isValidType( './hotml/alert.hotml' ) ).to.equal( true );
		expect( file.isValidType( './hotml/alert.js' ) ).to.equal( true );
		expect( file.isValidType( './hotml/alert.html' ) ).to.equal( true );
	});
});