import React from 'react'
import { useForm } from "react-hook-form";
import { css } from 'emotion';
import { routerStore } from '../stores/routerStore';

interface Props {

}
const heder = css({
    width: '90%',
    display: 'flex',
    alignItems: 'center'


})
const wraper = css({
    justifyContent: 'center',
    display: 'flex',

})
const form = css({
    marginLeft: 'auto'
})
const title = css({
    cursor: 'pointer'

})
export const Header = (props: Props) => {
    const { register, } = useForm<FormData>();

    return (
        <div className={wraper}>
            <div className={heder}>
                <h1 className={title} onClick={() => { routerStore.toHome() }}>Cryptocurrency market</h1>
                <form className={form} >
                    <input name="search" ref={register} />
                </form>
            </div>
        </div>

    )
}
