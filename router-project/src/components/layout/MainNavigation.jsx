import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function MainNavigation() {
  return (
    <Container>
        <div className='logo'>Great Quotes</div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/quotes'>All Quotes</NavLink>
                </li>
                <li>
                    <NavLink to='/new-quote'>New Quote</NavLink>
                </li>
            </ul>
        </nav>
    </Container>
  )
}

const Container = styled.header`
    width: 100%;
    height: 5rem;
    display: flex;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background-color: #008080;

    .logo {
        font-size: 2rem;
        color: #ffffff;
    }

    nav {
        ul {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;

            li {
                margin-left: 1.5rem;
                font-size: 1.25rem;
            }

            a {
                text-decoration: none;
                color: #88dfdf;
                &:hover,
                &:active {
                    color: #e6fcfc;
                    border-bottom: 1px solid black;
                }
            }
        }

        
    }

    .active {
        color: #e6fcfc;
        border-bottom: 1px solid black;
    }
`;


