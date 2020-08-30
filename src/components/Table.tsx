import React from 'react'
import { HederRow } from './HederRow'
import { Row } from './Row'

interface Props {
    data: any
}

export const Table = (props: Props) => {
    return (
        <div>
            <HederRow />
            <Row />
            {/* {data.map(rowData => {
                <Row rowData={rowData}></Row>
            })} */}
        </div>
    )
}
