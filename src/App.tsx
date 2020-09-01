import React, { useState } from "react";
import "./App.css";
import { css } from "emotion";
import ApplicationRouter from "./ApplicationRouter";
import Spinner from "./components/Spinner";
import { gql, useQuery } from "@apollo/client";
import { sort } from "./sortresults";

const appStyle = css({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(230, 230, 230, 0.5)",
});

const GET_COINS = gql`
  query topRanked($limit: Int!) {
    assets(sort: { marketCapRank: ASC }, page: { limit: $limit }) {
      assetName
      assetSymbol
      marketCapRank
      currentSupply
      markets {
        marketSymbol
        ticker {
          percentChange
          lastPrice
          lowPrice
          highPrice
        }
      }
    }
  }
`;

function App() {
  const [limit] = useState(3);
  const { loading, data } = useQuery(GET_COINS, {
    variables: { limit },
  });
  if (!loading) sort(data);

  return (
    <div className={appStyle}>
      {loading ? <Spinner /> : <ApplicationRouter />}
    </div>
  );
}

export default App;
