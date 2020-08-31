import { observable, action } from "mobx";
export interface coins {
    coins: coin[];
}
export interface coin {
    assetName: string;
    assetSymbol: string;
    marketCapRank: string;
    marketSymbol: string;
    percentChange: string;
    lastPrice: string;
    lowPrice: string;
    highPrice: string;
    baseVolume: string;
}
export class CoinStore {
    @observable
    coins: coins | any = [];
    @action.bound
    setCoins(coins: coins) {
        this.coins = coins;
    }
}
export const coinStore = new CoinStore();
