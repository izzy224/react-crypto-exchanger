import { Text } from "@chakra-ui/layout";
import React from "react";
import CoinsList from "../components/CoinsList";

const Homepage = () => {
  return (
    <>
      <Text fontSize="4xl" fontWeight="bold">
        Current cryptocurrency prices
      </Text>

      <CoinsList></CoinsList>
    </>
  );
};

export default Homepage;
