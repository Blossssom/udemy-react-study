import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Bloxxom', text: 'hello!!'},
    {id: 'q2', author: 'Flower', text: 'Good!!!'},
    {id: 'q3', author: 'Earth', text: 'GoGOGO!!!!'},
    {id: 'q4', author: 'Bloxxom', text: 'Perfect~!'},
];

export default function QuoteDetail() {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(v => v.id === params.quoteId);

    return (
        <Container>
            {
                quote
                    ? <HighlightedQuote text={quote.text} author={quote.author} />
                    : <NoQuotesFound />    
            }
            <Outlet />
        </Container>
    )
}

const Container = styled.section`

`;
