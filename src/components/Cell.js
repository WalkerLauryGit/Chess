import React from 'react'
import styled from 'styled-components'
    
const StyledCell = styled.div`
width: 80px;
background-color: ${props => props.isEven === true ? "white" : "blue" };
border: 1px solid black;
`

export default function Cell(props) {
    return (
        <StyledCell>
            <p>{props.x}{props.y}</p>
        </StyledCell>
    )
}
