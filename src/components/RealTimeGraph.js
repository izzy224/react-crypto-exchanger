import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const RealTimeGraph = ({ coinId }) => {
  const [currentData, setCurrentData] = useState({ data: { prices: [] } });
  const [chartData, setChartData] = useState({
    labels: [0],
    datasets: [{ label: "Price for the last 24 hours", data: [0] }],
  });
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=1m`
      )
      .then((response) => setCurrentData(response));
  }, [coinId]);

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
          label: "Price in USD",
          data: currentData.data.prices.map((price) => {
            return price[1];
          }),
          fill: false,
          backgroundColor: "rgb(255,99,132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    });
  }, [currentData]);

  return (
    <>
      {chartData ? (
        <Box w="60%" m="0">
          {" "}
          <Line
            data={chartData}
            options={{
              interaction: {
                intersect: false,
              },
            }}
          />
        </Box>
      ) : (
        <div />
      )}
    </>
  );
};

export default RealTimeGraph;
