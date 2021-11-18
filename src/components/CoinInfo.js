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
import { Image } from "@chakra-ui/image";
import React, { useEffect, useState, useContext } from "react";
import ReactHtmlParser from "react-html-parser";
const CoinInfo = ({ coinId, currency }) => {
  const [coinInfo, setCoinInfo] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api//v3/coins/${coinId}`)
      .then((response) => setCoinInfo(response.data));
  }, []);
  console.log(coinInfo);
  return (
    <>
      {JSON.stringify(coinInfo) !== "{}" ? (
        <Box width="100%">
          <Flex width="100%" justifyContent="center">
            <Text fontWeight="extrabold" fontSize="3xl" pr="10px">
              {coinInfo.name}
            </Text>
            <Image src={coinInfo.image.small} />
          </Flex>
          <Flex width="100%" flexWrap="wrap">
            <StatGroup width="100%" flexWrap="wrap">
              <Stat>
                <StatLabel>Current price</StatLabel>
                <StatNumber>
                  {currency}
                  {coinInfo.market_data.current_price[
                    currency.toLowerCase()
                  ].toLocaleString()}
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
                <StatLabel>7D price change</StatLabel>
                <StatNumber>
                  {currency}
                  {coinInfo.market_data.price_change_percentage_7d_in_currency[
                    currency.toLowerCase()
                  ].toLocaleString()}
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
              <Stat>
                <StatLabel>7D High</StatLabel>
                <StatNumber>
                  {currency}
                  {coinInfo.market_data.high_24h[
                    currency.toLowerCase()
                  ].toLocaleString()}
                </StatNumber>
              </Stat>
              <Stat>
                <StatLabel>7D Low</StatLabel>
                <StatNumber>
                  {currency}
                  {coinInfo.market_data.low_24h[
                    currency.toLowerCase()
                  ].toLocaleString()}
                </StatNumber>
              </Stat>
            </StatGroup>
          </Flex>
          <Text>{ReactHtmlParser(coinInfo.description.en)}</Text>
        </Box>
      ) : (
        <Box />
      )}
    </>
  );
};

export default CoinInfo;
