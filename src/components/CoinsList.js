import React, { useContext, useEffect } from "react";
import { CoinsContext } from "../contexts/coinsContext";
import Coin from "./Coin";
import { Table, Th, Tr, Thead, Tbody } from "@chakra-ui/table";
import { Center } from "@chakra-ui/layout";
const CoinsList = () => {
  const { allCoins, currency } = useContext(CoinsContext);
  useEffect(() => {}, [currency]);
  return (
    <>
      <Center>
        <Table w="65%" variant="striped" colorScheme="teal" m="0">
          <Thead>
            <Tr>
              <Th>Coin</Th>
              <Th isNumeric>Price({currency})</Th>
              <Th isNumeric>1h Change({currency})</Th>
              <Th isNumeric>24h Change({currency})</Th>
              <Th isNumeric>Market Cap({currency})</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allCoins.map((coin) => {
              return <Coin coin={coin} />;
            })}
          </Tbody>
        </Table>
      </Center>
    </>
  );
};

export default CoinsList;
