import React from 'react'
import { css } from 'emotion'


const cell = css({
    backgroundColor: 'rgb(244,245,247)',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    padding: '10px 0px'

})

export const HederRow = () => {
    return (
        <tr >
            <th className={cell}>Name</th><th className={cell}>Pair</th><th className={cell}>Market Cap</th> <th className={cell}>Average Last Price</th>
        </tr>
    )
}
