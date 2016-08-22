var suite = require( './app' );
var expect = require( 'chai' ).expect;

describe( 'testing connection', function () {
    it( 'should return true if there is connection', function () {
        expect( suite.connected() ).to.equal( true );
    } );

} );

describe( 'GET /', function () {
    it( 'should 'function ( done ) {
        request.get( '/index' ).expect( 200 )
            .end( function ( err, res ) {
                if ( err ) return done( err )
                done();
            } );
    } );
} );
