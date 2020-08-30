import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Spinner from "../components/Spinner";
import ApplicationRouter from "../ApplicationRouter";

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
          baseVolume
          percentChange
        }
      }
    }
  }
`;
interface Props {}

export const Home = (props: Props) => {
  const [limit, setlimit] = useState(25);
  const { loading, error, data } = useQuery(GET_COINS, {
    variables: { limit },
  });

  return <div>{loading ? <Spinner /> : <ApplicationRouter data={data} />}</div>;
};
