const mongoose = require( 'mongoose' );

const QuoteSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 20
    }, 
    quotes : {
        type : String,
        required : true,
        minlength : 2,
        maxlength : 200
    }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Quote = mongoose.model( 'quotes', QuoteSchema );

const QuoteModel = {
    createQuote : function( newQuote ){
        return Quote.create( newQuote );
    },
    getQuotes : function( ){
        return Quote.find().sort( { created_at: -1 } );
    }
};

module.exports = {QuoteModel};