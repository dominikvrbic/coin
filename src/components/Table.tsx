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
    width: '90%',
    '@media(max-width: 920px) ': {
        width: '100%'
    }

})
export const Table = (props: Props) => {

    return (
        <table className={table}>
            <HederRow />
            {coinStore.coins.map((coin: coin, index: number) => {
                return <Row id={index} coin={coin} />
            })}

        </table>
    )
}
