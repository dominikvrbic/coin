import React from 'react'
import { css } from "emotion";
import { coin } from '../stores/coinStore';
import { Link } from 'react-router-dom'
interface Props {
    coin?: coin,
}
const link = css({
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    '&visited': {
        textDecoration: 'none',
        color: 'black',

    }

})
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
            <th className={row} >   <Link className={link} to={`/currency/${assetName}`} > {assetName}  </Link ></th>
            <th className={row} >  <Link className={link} to={`/currency/${assetName}`} > {marketSymbol}</Link ></th>
            <th className={row} >  <Link className={link} to={`/currency/${assetName}`} > ${Number(lastPrice) * currentSupply}</Link > </th>
            <th className={row} >  <Link className={link} to={`/currency/${assetName}`} > ${lastPrice}</Link ></th>
        </tr >



    )
}
