import React from 'react'
import { css } from "emotion";
import { Cell } from './Cell';

interface Props {
    rowData?: any
}
const row = css({
    display: 'flex',
    alignItems: 'center',
    padding: '3em',
    borderBottom: 'black 3px'
})
export const Row = (props: Props) => {
    return (
        <div className={row}>
            <Cell text='test' />
            <Cell text='test' />
            <Cell text='test' />
            <Cell text='test' />

        </div>
    )
}
