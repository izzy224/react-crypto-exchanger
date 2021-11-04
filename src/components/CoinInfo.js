import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/stat";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CoinsContext } from "../contexts/coinsContext";

const CoinInfo = ({ coinId }) => {
  const [coinInfo, setCoinInfo] = useState({});
  const { currency } = useContext(CoinsContext);
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api//v3/coins/${coinId}`)
      .then((response) => setCoinInfo(response.data));
  }, []);
  console.log(coinInfo);
  return (
    <>
      {JSON.stringify(coinInfo) !== "{}" ? (
        <Flex width="100%">
          <StatGroup width="100%" flexWrap="wrap">
            <Stat>
              <StatLabel>Current price</StatLabel>
              <StatNumber>
                {currency}
                {coinInfo.market_data.current_price.usd}
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coinInfo.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                ></StatArrow>
                {coinInfo.market_data.price_change_percentage_24h}%(24h)
              </StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>7d price change</StatLabel>
              <StatNumber>
                {currency}
                {
                  coinInfo.market_data.price_change_percentage_7d_in_currency
                    .usd
                }
              </StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    coinInfo.market_data.price_change_percentage_7d > 0
                      ? "increase"
                      : "decrease"
                  }
                ></StatArrow>
                {coinInfo.market_data.price_change_percentage_7d}%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </Flex>
      ) : (
        <Box />
      )}
    </>
  );
};

export default CoinInfo;
