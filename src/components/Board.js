import React from 'react'
import styled from 'styled-components'
import Cell from './Cell'
import {Knight} from './Knight'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const BoardStyle = styled.div`
    width: 640px;
    height: 640px;
    border: 1px solid black;
    display: grid;
    margin: 0 auto;
    margin-top: 10px;
    grid-template-columns: repeat(8, 1fr);
    
`

const CellStyled = styled(Cell)`
    width: 80px;

`
funct

export default function Board() {

    const cells = []

    for(let x = 0; x < 8; x++){
        for(let y=0; y<8; y++){
            cells.push(<CellStyled x={x} y={y} isEven={(x+y) % 2 === 0}></CellStyled>)
        }
    }

    return (
        <DndProvider backend={HTML5Backend}>
        <BoardStyle>
            {cells}
        </BoardStyle>
        </DndProvider>
    )
}
