import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Cell from './Cell'

const BoardStyle = styled.div`
    width: 640px;
    height: 640px;
    border: 1px solid black;
    display: grid;
    margin: 0 auto;
    margin-top: 10px;
    grid-template-columns: repeat(8, 1fr);

`

export default function Board() {

    const cells = []

    for(let x = 0; x < 8; x++){
        for(let y=0; y<8; y++){
            cells.push([<Cell key={x+y} x={x} y={y} isEven={(x+y) % 2 === 0}/>])
        }
    }

    return (
        <BoardStyle>
            {cells}
        </BoardStyle>
    )
}
