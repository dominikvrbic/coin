import React from 'react'
import { css } from "emotion";
import { routerStore } from '../stores/routerStore';
import { coin } from '../stores/coinStore';

interface Props {
    coin?: coin,
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
    const { coin } = props;
    //@ts-ignore
    const { assetName, marketSymbol, lastPrice, currentSupply } = coin;

    return (
        <tr key={assetName} className={row}>
            <th className={row} onClick={() => { routerStore.toCurrency(assetName) }} > {assetName}</th>
            <th className={row} onClick={() => { routerStore.toCurrency(assetName) }} > {marketSymbol}</th>
            <th className={row} onClick={() => { routerStore.toCurrency(assetName) }} > ${Number(lastPrice) * currentSupply} </th>
            <th className={row} onClick={() => { routerStore.toCurrency(assetName) }} > ${lastPrice}</th>
        </tr>
    )
}
