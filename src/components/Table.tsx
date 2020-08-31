import React from 'react'
import { HederRow } from './HederRow'
import { Row } from './Row'
import { css } from 'emotion'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { coinStore, coin } from '../stores/coinStore'

interface Props {
}
const table = css({
    borderCollapse: 'collapse',
    width: '100%',


})
export const Table = (props: Props) => {

    return (
        <table className={table}>
            <tbody>
                <HederRow />
                {coinStore.coins.map((coin: coin) => {
                    return <Row coin={coin} />
                })}
            </tbody>
        </table>
    )
}
