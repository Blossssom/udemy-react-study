import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
        <nav>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/landing'>Landing</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
            </ul>
        </nav>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    width: 100%;
    height: 5rem;
    background-color: #044599;
    padding: 0 10%;

    nav {
        height: 100%;
    }

    ul {
        height: 100%;
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: center;

        li {
            margin: 0 1rem;
            width: 5rem;

            a{
                color: #ffffff;
                text-decoration: none;

                &:hover,
                &:active {
                    color: #95bcf0;
                    padding-bottom: 0.25rem;
                    border-bottom: 4px solid #95bcf0;
                }
            }
            .active {
                color: #95bcf0;
                padding-bottom: 0.25rem;
                border-bottom: 4px solid #95bcf0;
            }
        }
    }
`;

