import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductDetail() {
    const params = useParams();

  return (
    <Container>
        <h2>ProductDetail</h2>
        <p>{params.id}</p>
    </Container>
  )
}

const Container = styled.section`
    
`;
