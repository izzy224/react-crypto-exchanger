import React, { useContext } from "react";
import { CoinsContext } from "../contexts/coinsContext";
import Coin from "./Coin";
import { Table, Th, Tr, Thead, Tbody } from "@chakra-ui/table";
import { Center } from "@chakra-ui/layout";
const CoinsList = () => {
  const { allCoins } = useContext(CoinsContext);
  return (
    <>
      <Center>
        <Table w="65%" variant="striped" colorScheme="teal" m="0">
          <Thead>
            <Tr>
              <Th>Coin</Th>
              <Th isNumeric>Price</Th>
              <Th isNumeric>1h Change</Th>
              <Th isNumeric>24h Change</Th>
              <Th isNumeric>Market Cap</Th>
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
