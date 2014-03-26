
var fs = require( 'fs' );
var expect = require( 'expect.js' );
var _ = require( 'lodash' );
var tree = require( '../lib/tree' );
var alert_hotml;
var index_hotml;

describe( 'basic hotml tree parsing', function() {

	it( 'should provide valid hotml syntax tree', function() {
		var blank_source = '<div />';
		var blank_tree = tree.parse( blank_source );
		expect( blank_tree._source ).to.equal( blank_source );
		expect( _.isArray( blank_tree.imports ) ).to.be( true );
		expect( _.isArray( blank_tree.definitions ) ).to.be( true );
		expect( _.isArray( blank_tree.plugins ) ).to.be( true );
	});

});

describe( 'alert hotml file tree parsing', function() {
	
	it( 'should read alert hotml file', function() {
		var alert_hotml = fs.readFileSync( './test/hotml/alert.hotml' ).toString();
		expect( typeof alert_hotml ).to.equal( 'string' );
	});

	it( 'should correctly parse alert hotml file', function() {
		var alert_tree = tree.parse( alert_hotml );

		expect( alert_tree.imports.length ).to.equal( 0 );
		expect( alert_tree.definitions.length ).to.equal( 1 );
		expect( alert_tree.plugins.length ).to.equal( 0 );
	});
});