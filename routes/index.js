var express = require( 'express' );
var router = express.Router();
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );

router.get( '/', function ( req, res ) {
    res.render( 'index' )
} );

module.exports = router;
