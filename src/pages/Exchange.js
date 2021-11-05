import React, { useContext } from "react";
import { useParams } from "react-router";
import { Flex } from "@chakra-ui/layout";
import CoinInfo from "../components/CoinInfo";
import RealTimeGraph from "../components/RealTimeGraph";
import { CoinsContext } from "../contexts/coinsContext";

const Exchange = () => {
  const { Id } = useParams();
  const { currency, cryptoComparator } = useContext(CoinsContext);
  return (
    <>
      <Flex>
        <RealTimeGraph
          cryptoComparator={cryptoComparator}
          currency={currency}
          coinId={Id}
        />
        <CoinInfo currency={currency} coinId={Id} />
      </Flex>
    </>
  );
};

export default Exchange;
