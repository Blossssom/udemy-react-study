import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Bloxxom', text: 'hello!!'},
    {id: 'q2', author: 'Flower', text: 'Good!!!'},
    {id: 'q3', author: 'Earth', text: 'GoGOGO!!!!'},
    {id: 'q4', author: 'Bloxxom', text: 'Perfect~!'},
];

export default function AllQuotes() {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}
