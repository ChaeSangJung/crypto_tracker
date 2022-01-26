import WrapContent from "../components/WrapContent";

interface PriceData {
    id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
    coinId :string;
    tickerData? : PriceData;
    tickerLoading : boolean;
}

const Price = ({coinId, tickerData, tickerLoading}:PriceProps) => {
    
    return (
        <div>
            {tickerLoading ? "Loading..." : (<>
                <WrapContent 
                    title={"Price"}
                    type={"$"}
                    cont={tickerData?.quotes.USD.price}
                />
                <WrapContent 
                    title={"Max Change rate in last 24h"}
                    type={"%"}
                    cont={tickerData?.quotes.USD.market_cap_change_24h}
                />
                <WrapContent 
                    title={"Change rate (last 30 Minutes)"}
                    type={"%"}
                    cont={tickerData?.quotes.USD.percent_change_30m}
                />
                <WrapContent 
                    title={"Change rate (last 1 hours)"}
                    type={"%"}
                    cont={tickerData?.quotes.USD.percent_change_1h}
                />
                <WrapContent 
                    title={"Change rate (last 12 hours)"}
                    type={"%"}
                    cont={tickerData?.quotes.USD.percent_change_12h}
                />
                <WrapContent 
                    title={"Change rate (last 24 hours)"}
                    type={"%"}
                    cont={tickerData?.quotes.USD.percent_change_24h}
                />
            </>)}
        </div>
    )
}

export default Price;