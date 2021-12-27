import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
    coinId:string;
    isDark : boolean;
}
interface IHistorical {
    close: number;
    high: number;
    low: number;
    market_cap: number;
    open: number;
    time_close: string;
    time_open: string;
    volume: number
}

const Chart = ({coinId, isDark}:ChartProps) => {
    const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], ()=> fetchCoinHistory(coinId));
    
    return (
        <div>
            {isLoading ? ("Loading chart")
             : (<ApexChart
                type="candlestick"
                series={[
                  {
                    name: "Price",
                    data: data?.map((price) => ({
                      x: price.time_close,
                      y: [price.open, price.high, price.low, price.close],
                    })),
                  },
                ]}
                options={{
                  theme: {
                    mode: isDark ? "dark" : "light",
                  },
                  chart: {
                    type: "candlestick",
                    height: 900,
                    background: "transparent",
                    foreColor: "white",
                    animations: {
                      enabled: true,
                      easing: "easeinout",
                      speed: 800,
                      animateGradually: {
                        enabled: true,
                        delay: 150,
                      },
                      dynamicAnimation: {
                        enabled: true,
                        speed: 350,
                      },
                    },
                  },
                  xaxis: {
                    type: "datetime",
                  },
                  yaxis: {
                    show: false,
                  },
                  tooltip: {
                    enabled: true,
                    y: {
                        formatter: (value) => `$${value.toFixed(2)}`,
                      },
                  },
                  
                }}
              />
              )}
        </div>
    )
}

export default Chart;