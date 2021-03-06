import { Box } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const RealTimeGraph = ({ coinId, currency, cryptoComparator }) => {
  const [currentData, setCurrentData] = useState({ data: { prices: [] } });
  const [comparatorPrices, setComparatorPrices] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [0],
    datasets: [{ label: "Price for the last 24 hours", data: [0] }],
  });
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=1&interval=1m`
      )
      .then((response) => setCurrentData(response));
  }, [coinId, currency]);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cryptoComparator}/market_chart?vs_currency=${currency}&days=1&interval=1m`
      )
      .then((response) => setComparatorPrices(response));
  }, [currency, cryptoComparator]);

  useEffect(() => {
    setChartData({
      labels: currentData.data.prices.map((price) => {
        return new Date(price[0]).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
      }),
      datasets: [
        {
          label: `Price in ${currency}`,
          data: currentData.data.prices.map((price) => {
            return price[1];
          }),
          fill: false,
          backgroundColor: "rgb(255,99,132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
          yAxisID: "y1",
        },
        {
          label: `Price in ${cryptoComparator}`,
          data: comparatorPrices?.data?.prices?.map((price, i) => {
            if (price && currentData.data.prices[i]) {
              return currentData?.data?.prices[i][1] / price[1];
            }
          }),
          fill: false,
          yAxisID: "y2",
        },
      ],
    });
  }, [currentData, comparatorPrices]);

  return (
    <>
      {chartData ? (
        <Box w="60%" m="0">
          {" "}
          <Line
            options={{
              responsive: true,
              interaction: {
                mode: "index",
                intersect: false,
              },
              scales: {
                y1: {
                  type: "linear",
                  display: true,
                  position: "left",
                },
                y2: {
                  type: "linear",
                  display: true,
                  position: "right",
                  grid: {
                    drawOnChartArea: false,
                  },
                },
              },
            }}
            data={chartData}
          />
        </Box>
      ) : (
        <div />
      )}
    </>
  );
};

export default RealTimeGraph;
