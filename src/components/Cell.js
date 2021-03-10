import React from 'react'



export default function Cell({x, y, isEven, children}) {

    let evenStyle = {
        background: 'white',
        color: 'black'
    }
    let oddStyle = {
        background: 'black',
        color: 'white'
    }

    return (
        <div style={isEven ? evenStyle : oddStyle }>
            {children}
        </div>
    )
}
