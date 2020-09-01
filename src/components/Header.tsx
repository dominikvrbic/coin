import React, { useState, useEffect } from "react";
import { css } from "emotion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { coinStore, coin } from "../stores/coinStore";
import { Link } from "react-router-dom";
import { Search } from "../assets";
import { useWindowSize } from "react-use";

interface Props {
  limit: number;
}

const header = css({
  width: "90%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const wraper = css({
  justifyContent: "center",
  display: "flex",
});

const form = css({
  marginLeft: "auto",
  display: "flex",
  padding: "2px 10px",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  borderRadius: "12px",
  border: "1px solid #EFEFEF",
});

const title = css({
  color: "black",
  cursor: "pointer",
  textDecoration: "none",
  ":visited": {
    textDecoration: "none",
    color: "black",
  },
  "@media(max-width: 1200px)": {
    fontSize: "10px",
  },
});

const search = css({
  position: "absolute",
  margin: 0,
  padding: 0,
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  width: "100%",
  top: "38px",
  left: 0,
  listStyleType: "none",
  fontWeight: 600,
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
});

const input = css({
  outline: "none",
  border: "none",
  width: "250px",
  height: "50px",
  "@media(max-width: 1200px)": {
    height: "30px",
    width: "120px",
  },
});

const formContainer = css({
  position: "relative",
});

const resultItem = css({
  padding: "5px 15px",
  borderBottom: "1px solid #DDD",
  ":hover": {
    backgroundColor: "#f5f5f5",
  },
});

export const Header = (props: Props) => {
  const { limit } = props;
  const { width } = useWindowSize();
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
      <div className={header}>
        <Link className={title} to="/">
          <h1>Cryptocurrency market</h1>
        </Link>
        <div className={formContainer}>
          <div className={form}>
            <img src={Search} alt="Search" style={{ marginRight: "10px" }} />
            <input
              className={input}
              type="text"
              placeholder={
                width > 1200
                  ? "Search cryptocurrency, rates and prices"
                  : "Search"
              }
              value={searchTerm}
              onChange={handleChange}
            />
          </div>

          {searchResults.length !== limit && (
            <ul className={search}>
              {searchResults.map((item) => (
                <li key={item} className={resultItem}>
                  <Link className={title} to={`/currency/${item}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
