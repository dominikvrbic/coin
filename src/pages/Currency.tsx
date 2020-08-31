import React from "react";
import { useParams } from "react-router";
import { css } from "emotion";
import { coinStore } from "../stores/coinStore";

interface Props {}

const card = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "40px",
  padding: "15px",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  width: "50%",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
  "@media(max-width: 1200px)": {
    width: "95%",
    padding: "10px 3px",
  },
});

const topPart = css({
  display: "flex",
  borderBottom: "1px solid #ddd",
  padding: "10px 0px",
});

const blueText = css({
  paddingRight: "25px",
  fontSize: "30px",
  fontWeight: "bolder",
  color: "rgb(0, 0, 128)",
  "@media(max-width: 1200px)": {
    fontSize: "14px",
  },
  "@media(max-width: 800px)": {
    fontSize: "10px",
  },
});

const grayText = css({
  paddingRight: "30px",
  fontSize: "20px",
  fontWeight: "bold",
  color: "gray",
  "@media(max-width: 1200px)": {
    fontSize: "10px",
  },
  "@media(max-width: 800px)": {
    fontSize: "6px",
  },
});

const blackText = css({
  fontSize: "25px",
  paddingRight: "30px",
  fontWeight: "bolder",
  "@media(max-width: 1200px)": {
    fontSize: "12px",
  },
  "@media(max-width: 800px)": {
    fontSize: "8px",
  },
});

const bootomPart = css({
  padding: "10px 0px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const assetNameStyle = css({
  fontSize: "24px",
  fontWeight: "bold",
  "@media(max-width: 1200px)": {
    fontSize: "12px",
  },
  "@media(max-width: 800px)": {
    fontSize: "8px",
  },
});

const bottomPiece = css({
  "@media(max-width: 1200px)": {
    maxWidth: "100px",
  },
  "@media(max-width: 800px)": {
    maxWidth: "60px",
  },
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
    "@media(max-width: 1200px)": {
      fontSize: "12px",
    },
    "@media(max-width: 800px)": {
      fontSize: "8px",
    },
  });

  return (
    <div className={card}>
      <div className={assetNameStyle}>{currency.assetName}</div>
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
        <div className={bottomPiece}>
          <div className={blackText}>
            ${Number(currency.lastPrice).toFixed(2)}
          </div>
          <div className={grayText}>Last Price </div>
        </div>
        <div className={bottomPiece}>
          <div className={change}>
            {Number(currency.percentChange).toFixed(2)}
          </div>
          <div className={grayText}>24h Change </div>
        </div>
        <div className={bottomPiece}>
          <div className={blackText}>
            {currency.lowPrice}
            {currency.marketSymbol.substr(
              currency.marketSymbol.indexOf("/") + 1,
              currency.marketSymbol.lenght
            )}
          </div>
          <div className={grayText}>24h Low </div>
        </div>
        <div className={bottomPiece}>
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
