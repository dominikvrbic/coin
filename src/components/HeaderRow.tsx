import React from 'react';
import { css } from 'emotion';

const cell = css({
    backgroundColor: 'rgb(244,245,247)',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '20px 0px',
});

export const HeaderRow = () => {
    return (
        <tr>
            <th className={cell} style={{ paddingLeft: '20px' }}>
                Name
      </th>
            <th className={cell}>Pair</th>
            <th className={cell}>Market Cap</th>{' '}
            <th className={cell} style={{ paddingRight: '20px' }}>
                Average Last Price
      </th>
        </tr>
    );
};