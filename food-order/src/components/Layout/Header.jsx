import React from 'react';
import styled from  'styled-components';
import bannerImg from '../../assets/shutterstock_2056306409.png';


export default function Header() {
  return (
    <>
        <Container>
            <h1>React Site</h1>
            <button>Cart</button>
        </Container>
        <div className='img-wrapper'>
            <img src={bannerImg} alt="banner" />
        </div>
    </>
  )
}


const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;