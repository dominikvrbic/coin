import React from 'react'
import { css } from "emotion";
import { routerStore } from '../stores/routerStore';
import { coin } from '../stores/coinStore';

interface Props {
    coin?: coin,
    id: number
}
const row = css({
    '& th,td': {
        padding: '10px 1px',
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer'
    },
    '&:hover': {
        backgroundColor: ' #f5f5f5'

    }
})
export const Row = (props: Props) => {
    const { coin, id } = props;
    //@ts-ignore
    const { assetName, marketSymbol, lastPrice, currentSupply } = coin;

    return (
        <tr className={row}>
            <th className={row} onClick={() => { routerStore.toCurrency(id) }} > {assetName}</th>
            <th className={row} onClick={() => { routerStore.toCurrency(id) }} > {marketSymbol}</th>
            <th className={row} onClick={() => { routerStore.toCurrency(id) }} > ${Number(lastPrice) * currentSupply} </th>
            <th className={row} onClick={() => { routerStore.toCurrency(id) }} > ${lastPrice}</th>
        </tr>
    )
}
