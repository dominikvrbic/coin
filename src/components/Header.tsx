import React, { useState, useEffect } from "react";
import { css } from "emotion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { coinStore, coin } from "../stores/coinStore";
import { Link } from "react-router-dom";
import { Search } from "../assets";

interface Props {}

const heder = css({
  width: "90%",
  display: "flex",
  alignItems: "center",
});

const wraper = css({
  justifyContent: "center",
  display: "flex",
});

const form = css({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
});

const title = css({
  color: "black",
  cursor: "pointer",
  textDecoration: "none",
  "&visited": {
    textDecoration: "none",
    color: "black",
  },
  "@media(max-width: 1200px)": {
    fontSize: "10px",
  },
});

const search = css({
  cursor: "pointer",
});

const input = css({
  "&:input": {
    outline: "none",
  },
  "@media(max-width: 1200px)": {
    width: "100px",
  },
});

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
        <Link className={title} to="/">
          {" "}
          <h1>Cryptocurrency market</h1>
        </Link>
        <div className={form}>
          <img src={Search} alt="Search" style={{ marginRight: "10px" }} />
          <input
            className={input}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>

        {searchResults.length !== 25 && (
          <ul className={search}>
            {searchResults.map((item) => (
              <Link className={title} to={`/currency/${item}`}>
                <li key={item}>{item}</li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
