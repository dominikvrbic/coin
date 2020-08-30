import React, { useState } from "react";
import "./App.css";
import { css } from "emotion";
import ApplicationRouter from "./ApplicationRouter";
import Spinner from "./components/Spinner";
import { gql, useQuery } from "@apollo/client";

const appStyle = css({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
const GET_COINS = gql`
  query topRanked($limit: Int!) {
    assets(sort: { marketCapRank: ASC }, page: { limit: $limit }) {
      assetName
      assetSymbol
      marketCapRank
      markets {
        marketSymbol
        ticker {
          lastPrice
          percentChange
          lastPrice
          lowPrice
          highPrice
          baseVolume
          quoteVolume
        }
      }
    }
  }
`;

function App() {
  const [limit, setlimit] = useState(25);
  const { loading, error, data } = useQuery(GET_COINS, {
    variables: { limit },
  });
  return (
    <div className={appStyle}>
      {loading ? <Spinner /> : <ApplicationRouter data={data} />}
    </div>
  );
}

export default App;
