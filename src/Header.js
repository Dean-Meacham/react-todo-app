import React from 'react'

const headerStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: 'center',
}

export default function Header() {
    return (
        <header>
            <h1 style={headerStyle}>TaDa!List</h1>
        </header>
    )
}