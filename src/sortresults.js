/* eslint-disable array-callback-return */
//not all markets have usd or usdc or usdt so i am using all of them cos. they are all 1 dollar
export const sort = (data) => {
    const results = data.assets.map((currencys) => {
        const coin = {};
        coin.assetName = currencys.assetName;
        coin.assetSymbol = currencys.assetSymbol;
        coin.marketCapRank = currencys.marketCapRank;
        const market = currencys.markets.filter((currency) => {
            if (currency.marketSymbol.endsWith(`${currencys.assetSymbol}/USD`)) {
                return currency.marketSymbol;
            } else if (
                currency.marketSymbol.endsWith(`${currencys.assetSymbol}/USDC`)
            ) {
                return currency.marketSymbol;
            } else if (
                currency.marketSymbol.endsWith(`${currencys.assetSymbol}/USDT`)
            ) {
                return currency.marketSymbol;
            }
        });
        coin.marketSymbol = market[0].marketSymbol.substr(market[0].marketSymbol.indexOf(':') + 1, market[0].marketSymbol.lenght);
        coin.percentChange = !market[0].ticker ?
            null :
            market[0].ticker.percentChange;
        coin.lastPrice = !market[0].ticker ? null : Number(market[0].ticker.lastPrice).toFixed(2).toString();
        coin.lowPrice = !market[0].ticker ? null : Number(market[0].ticker.lowPrice).toFixed(2).toString();
        coin.highPrice = !market[0].ticker ? null : Number(market[0].ticker.highPrice).toFixed(2).toString();
        coin.baseVolume = !market[0].ticker ?
            null :
            market[0].ticker.baseVolume;
        coin.quoteVolume = !market[0].ticker ?
            null :
            market[0].ticker.quoteVolume;
        return coin;

    });

    return results;

}