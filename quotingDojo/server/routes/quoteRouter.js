const express = require( 'express' );
const QuoteRouter = express.Router();
const { QuoteController } = require( './../controllers/quoteController' )

QuoteRouter
    .route( '/' )
    .get( QuoteController.loadMainPage )
    .post( QuoteController.createQuote );

QuoteRouter
    .get("/results", QuoteController.displayResult);

module.exports = { QuoteRouter };