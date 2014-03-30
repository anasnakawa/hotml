
var util = require( '../lib/util' );
var assert = require( 'assert' );
var expect = require( 'expect.js' );

describe( 'object type detection', function() {
  
  it( 'should have negation for all methods inside util.is', function() {
    var types = {
        fn: function() {}
      , array: []
      , hash: {}
      , number: 10
      , bool: true
      , string: 'hello'
      , numeric: '20.1'
    }

    expect( Object.keys( util.is.not ).length ).not.to.equal( 0 );
    util.each( types, function( value, key ) {
      expect( util.is[ key ]( value ) ).not.to.equal( util.is.not[ key ]( value ) );
    });
  });

});

describe( 'dynamic id generation', function() {

  it( 'should generate a unique id everytime', function() {

    var total = 20;
    while( total-- ) {
      expect( util.id.next() ).not.to.equal( util.id.next() );
    }

  });

  it( 'should prefix the unique id with a string', function() {

    expect( !!util.id.next( 'hotml' ).match( /hotml/ ) ).to.be( true );

  });

}); 