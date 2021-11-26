const {QuoteModel} = require( './../models/quoteModel' )

const QuoteController = {
    loadMainPage : function( request, response ){
        response.render( 'index' );
    },

    createQuote : function( request, response ){
        console.log(request.body);
    
        const name = request.body.name;
        const quotes = request.body.quote;
    
        const newQuote = {
            name,
            quotes
        };
        console.log( newQuote );
        QuoteModel
            .createQuote( newQuote )
            .then( result => {
                console.log(result);
                response.redirect('/results');
            })
            .catch( err => {
                console.log( "Something went wrong!", err );
                request.flash( 'messageError', 'You have to fill all the spaces!' );
                response.redirect( '/' );
            })
    },

    displayResult : function( request, response ){
        QuoteModel
            .getQuotes()
            .then( data =>{
                console.log(data);
                response.render( 'results', {quotes:data});
            } )
    
    }
}

module.exports = {QuoteController};