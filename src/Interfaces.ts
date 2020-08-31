export interface data {
  data: Data;
}
export interface Data {
  assets?: AssetsEntity[] | null;
}
export interface AssetsEntity {
  assetName: string;
  assetSymbol: string;
  marketCapRank: number;
  markets?: MarketsEntity[] | null;
  __typename: string;
}
export interface MarketsEntity {
  marketSymbol: string;
  ticker?: Ticker | null;
  __typename: string;
}
export interface Ticker {
  percentChange: string;
  lastPrice: string;
  lowPrice: string;
  highPrice: string;
  baseVolume: string;
  quoteVolume: string;
  __typename: string;
}
