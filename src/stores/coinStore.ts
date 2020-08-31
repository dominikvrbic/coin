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
  currentSupply: string;
}

export class CoinStore {
  @observable
  coins: coins | any = [];
  @action.bound
  setCoins(coins: coins) {
    this.coins = coins;
  }
  @action.bound
  findCoin(name: string) {
    return this.coins.find((coin: coin) => coin.assetName === name);
  }
  @observable
  coinNames: string[] | any = [];
  setCoinNames() {
    this.coinNames = this.coins.map((coin: coin) => coin.assetName);
  }
}
export const coinStore = new CoinStore();
