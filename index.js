var express = require( 'express' );


var port = process.env.PORT || 3000;
app.listen( port, function () {
    console.log( "Im listening yo!" );
} );

module.exports = {
    app
};
