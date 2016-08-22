var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );

var routes = require( './routes/index' );
var app = express();


app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, '/views' ) );
app.use( express.static( path.join( __dirname, '/public' ) ) );
app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );

app.use( './', routes );

app.get( '/', function ( req, res ) {
    res.render( 'index' )
} );

var port = process.env.PORT || 3000;
app.listen( port, function () {
    console.log( "Im listening yo!" );
} );

module.exports = {
    app
};
