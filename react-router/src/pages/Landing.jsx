import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

export default function Landing() {
  return (
    <Container>
      <h2>Welcome to Landing page!!!</h2>
      <Routes>
        <Route path='/new-user' element={<p>new User</p>} />
      </Routes>
    </Container>
  )
}

const Container = styled.section`
  
`;