import React from "react";
import { useParams } from "react-router";
import { Text } from "@chakra-ui/layout";
import RealTimeGraph from "../components/RealTimeGraph";
const Exchange = () => {
  const { Id } = useParams();
  console.log(Id);
  return (
    <>
      <Text fontSize="4xl" fontWeight="bold">
        Real-Time Exchange Prices
      </Text>
      <RealTimeGraph coinId={Id} />
    </>
  );
};

export default Exchange;
