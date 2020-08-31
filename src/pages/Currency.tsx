import React from "react";
import { useParams } from "react-router";
import { css } from "emotion";
import { coinStore } from "../stores/coinStore";

interface Props {
}
const card = css({
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: '40%',
  '&:hover': {
    boxShadow: ' 0 8px 16px 0 rgba(0,0,0,0.2)'

  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

})
const topPart = css({
  display: 'flex',
  borderBottom: '1px solid #ddd',
  width: '90%'

})
export const Currency = (props: Props) => {
  const { id } = useParams();
  const currency = coinStore.coins[id];

  return <div className={card}>
    <div>{currency.assetName}</div>
    <div className={topPart}>
      <div>
        <div>{currency.marketSymbol}</div>
        <div>Pair</div>
      </div>
      <div>
        <div>${Number(currency.lastPrice).toFixed(2)}</div>
        <div>Price</div>
      </div>
    </div>
    <div>srbi</div>
  </div>
};
