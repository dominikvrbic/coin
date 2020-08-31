import React from 'react';
import { HeaderRow } from './HeaderRow';
import { Row } from './Row';
import { css } from 'emotion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { coinStore, coin } from '../stores/coinStore';

interface Props { }

const table = css({
    borderCollapse: 'collapse',
    width: '100%',
    boxShadow: '0px 3px 25px -15px rgba(0,0,0,0.75)',
});

export const Table = (props: Props) => {
    return (
        <table className={table}>
            <tbody>
                <HeaderRow />
                {coinStore.coins.map((coin: coin) => {
                    return <Row coin={coin} />;
                })}
            </tbody>
        </table>
    );
};