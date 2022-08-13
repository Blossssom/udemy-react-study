import React from 'react'
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'

export default function NewQuotes() {
    const navigate = useNavigate();

    const addQuoteHander = (quoteData) => {
        navigate('/quotes');
    };
        
    return (
        <QuoteForm onAddQuote={addQuoteHander} />
    )
}
