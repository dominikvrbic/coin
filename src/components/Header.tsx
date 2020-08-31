import React, { useState, useEffect } from 'react'
import { css } from 'emotion';
import { routerStore } from '../stores/routerStore';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { coinStore, coin } from '../stores/coinStore';

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
const search = css({
    cursor: 'pointer'

})
export const Header = (props: Props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        coinStore.setCoinNames();
        const results = coinStore.coinNames.filter((coin: string) =>
            coin.toLowerCase().includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);


    return (
        <div className={wraper}>
            <div className={heder}>
                <h1 className={title} onClick={() => { routerStore.toHome() }}>Cryptocurrency market</h1>
                <div className={form}>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>

                {searchResults.length !== 25 &&
                    <ul className={search}>
                        {searchResults.map(item => (
                            <li key={item} onClick={() => {
                                routerStore.toCurrency(item)
                            }}>{item}</li>
                        ))}
                    </ul>}

            </div>
        </div>

    )
}
