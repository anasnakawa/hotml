
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
		alert_hotml = fs.readFileSync( './test/hotml/alert.hotml' ).toString();
		expect( typeof alert_hotml ).to.equal( 'string' );
	});

	it( 'should correctly parse alert hotml file', function() {
		var _tree = tree.parse( alert_hotml );

		expect( _tree.imports.length ).to.equal( 0 );
		expect( _tree.definitions.length ).to.equal( 1 );
		expect( _tree.plugins.length ).to.equal( 0 );

		var define = _tree.definitions[ 0 ];
		expect( define.type ).to.equal( 'tag' );
		expect( define.name ).to.equal( 'define' );
		expect( define.attrs[ 'tag-name' ] ).to.equal( 'alert' );
	});
});