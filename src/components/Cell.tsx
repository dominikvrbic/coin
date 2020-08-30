import React from 'react'
import { css } from "emotion";

interface Props {
    text: string
}
const cell = css({
    paddingRight: '6em'
});

export const Cell = (props: Props) => {
    const { text } = props;
    return (
        <div className={cell}>
            {text}
        </div>
    )
}
