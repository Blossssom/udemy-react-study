import React from 'react';
import styled from 'styled-components';
import MainNavigation from './MainNavigation';

export default function Layout(props) {
  return (
    <>
        <MainNavigation />
        <Container>
            {props.children}
        </Container>
    </>
  )
}

const Container = styled.main`
    margin: 3rem auto;
    width: 90%;
    max-width: 40rem;
`;
