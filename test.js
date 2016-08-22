var suite = require( './app' );
var expect = require( 'chai' ).expect;

describe( 'testing connection', function () {
    it( 'should return true if there is connection', function () {
        expect( suite.connected() ).to.equal( true );
    } );
} );
