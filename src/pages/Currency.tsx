import React from "react";
import { useParams } from "react-router";
import { css } from "emotion";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { coinStore, coin } from "../stores/coinStore";

interface Props {}
const card = css({
  padding: "15px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  width: "50%",
  "&:hover": {
    boxShadow: " 0 8px 16px 0 rgba(0,0,0,0.2)",
  },
  "@media(max-width: 1200px) ": {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const topPart = css({
  display: "flex",
  borderBottom: "1px solid #ddd",

  paddingBottom: "10px",
});
const blueText = css({
  paddingRight: "25px",
  fontSize: "30px",
  fontWeight: "bolder",
  color: "rgb(0, 0, 128)",
});
const grayText = css({
  paddingRight: "30px",
  fontSize: "20px",
  fontWeight: "bold",
  color: "gray",
});
const blackText = css({
  fontSize: "25px",
  paddingRight: "30px",
  fontWeight: "bolder",
});
const bootomPart = css({
  paddingTop: "15px",
  display: "flex",
});
const Currency = (props: Props) => {
  //@ts-ignore
  let { name } = useParams();
  const currency = coinStore.findCoin(decodeURI(name));
  const change = css({
    color: `${currency.percentChange > 0 ? "green" : "red"}`,
    fontSize: "25px",
    paddingRight: "30px",
    fontWeight: "bolder",
  });
  return (
    <div className={card}>
      <div>{currency.assetName}</div>
      <div className={topPart}>
        <div>
          <div className={blueText}>{currency.marketSymbol}</div>
          <div className={grayText}>Pair</div>
        </div>
        <div>
          <div className={blueText}>
            ${Number(currency.lastPrice).toFixed(2)}
          </div>
          <div className={grayText}>Price</div>
        </div>
      </div>

      <div className={bootomPart}>
        <div>
          <div className={blackText}>
            ${Number(currency.lastPrice).toFixed(2)}
          </div>
          <div className={grayText}>Last Price </div>
        </div>
        <div>
          <div className={change}>
            {Number(currency.percentChange).toFixed(2)}
          </div>
          <div className={grayText}>24h Change </div>
        </div>
        <div>
          <div className={blackText}>
            {currency.lowPrice}
            {currency.marketSymbol.substr(
              currency.marketSymbol.indexOf("/") + 1,
              currency.marketSymbol.lenght
            )}
          </div>
          <div className={grayText}>24h Low </div>
        </div>
        <div>
          <div className={blackText}>
            {currency.highPrice}
            {currency.marketSymbol.substr(
              currency.marketSymbol.indexOf("/") + 1,
              currency.marketSymbol.lenght
            )}
          </div>
          <div className={grayText}>24h hight</div>
        </div>
      </div>
    </div>
  );
};
export default Currency;
