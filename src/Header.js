import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    margin: 0 auto
`

export default function Header() {
    return (
        <header>
            <Title>TaDa!List</Title>
        </header>
    )
}