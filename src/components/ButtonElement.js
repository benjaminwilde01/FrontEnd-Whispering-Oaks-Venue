import styled from 'styled-components'

import { Link } from 'react-scroll'

export const Button = styled(Link)`
    text-decoration: none;
    border-radius: 50px;
    background: white;
    white-space: nowrap;
    padding: 14px 48px;
    color: black;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: white;
    }
`

