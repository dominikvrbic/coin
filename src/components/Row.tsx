import React from 'react';
import { css } from 'emotion';
import { coin } from '../stores/coinStore';
import { Link } from 'react-router-dom';

interface Props {
    coin?: coin;
}

const link = css({
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:visited': {
        textDecoration: 'none',
        color: 'black',
    },
});

const row = css({
    '& th, td': {
        padding: '20px 0px',
        fontWeight: 600,
        textAlign: 'left',
        borderBottom: '1px solid #ddd',
        cursor: 'pointer',
    },
    '&:hover': {
        backgroundColor: ' #f5f5f5',
    },
});

export const Row = (props: Props) => {
    const { coin } = props;
    //@ts-ignore
    const { assetName, marketSymbol, lastPrice, currentSupply } = coin;

    return (
        <tr key={assetName} className={row}>
            <td style={{ paddingLeft: '20px' }}>
                <Link className={link} to={`/currency/${assetName}`}>
                    {assetName}
                </Link>
            </td>
            <td>
                <Link className={link} to={`/currency/${assetName}`}>
                    {marketSymbol}
                </Link>
            </td>
            <td>
                <Link className={link} to={`/currency/${assetName}`}>
                    ${(Number(lastPrice) * currentSupply).toFixed(2)}
                </Link>{' '}
            </td>
            <td style={{ paddingRight: '20px' }}>
                <Link className={link} to={`/currency/${assetName}`}>
                    ${Number(lastPrice).toFixed(2)}
                </Link>
            </td>
        </tr>
    );
};