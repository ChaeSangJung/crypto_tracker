import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface ChartProps {
    coinId:string;
}

const Chart = ({coinId}:ChartProps) => {
    const { isLoading, data } = useQuery(["ohlcv", coinId], ()=> fetchCoinHistory(coinId));
    console.log(isLoading, data)
    return <h1>Chart {coinId}</h1>
}

export default Chart;