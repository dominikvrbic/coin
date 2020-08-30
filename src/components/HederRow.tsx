import React from 'react'
import { css } from 'emotion'
const row = css({
    display: 'flex',
    backgroundColor: 'rgb(220,220,220)',
    padding: '2em'
})
const cell = css({
    paddingRight: '6em'
})

export const HederRow = () => {
    return (
        <div className={row}>
            <div className={cell}>Name</div><div className={cell}>Pair</div><div className={cell}>Market Cap</div> <div className={cell}>Average Last Price</div>
        </div>
    )
}
