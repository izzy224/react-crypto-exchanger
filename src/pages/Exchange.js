import React, { useContext } from "react";
import { useParams } from "react-router";
import { Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import CoinInfo from "../components/CoinInfo";
import RealTimeGraph from "../components/RealTimeGraph";
import { CoinsContext } from "../contexts/coinsContext";
const Exchange = () => {
  const { setCurrency } = useContext(CoinsContext);
  const { Id } = useParams();
  console.log(Id);
  const setCurrencyHelper = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Select placeholder="Currency">
        <option value="USD" onClick={setCurrencyHelper}>
          USD
        </option>
        <option value="MDL" onClick={setCurrencyHelper}>
          MDL
        </option>
        <option value="JPY" onClick={setCurrencyHelper}>
          JPY
        </option>
        <option value="EUR" onClick={setCurrencyHelper}>
          EUR
        </option>
      </Select>
      <Flex>
        <RealTimeGraph coinId={Id} />
        <CoinInfo coinId={Id} />
      </Flex>
    </>
  );
};

export default Exchange;
