import React, { useContext, useEffect, useState } from "react";
import { CoinsContext } from "../contexts/coinsContext";
import Coin from "./Coin";
import { Table, Th, Tr, Thead, Tbody } from "@chakra-ui/table";
import { Center } from "@chakra-ui/layout";
const CoinsList = () => {
  const { allCoins, currency, cryptoComparator } = useContext(CoinsContext);
  const [comparatorPrice, setComparatorPrice] = useState(1);
  useEffect(() => {
    let comparatorCoin = allCoins.find((c) => {
      return c.id == cryptoComparator;
    });
    setComparatorPrice(comparatorCoin?.current_price);
  }, [currency]);

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
              <Th isNumeric>Price({cryptoComparator})</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allCoins.map((coin) => {
              return <Coin comparatorPrice={comparatorPrice} coin={coin} />;
            })}
          </Tbody>
        </Table>
      </Center>
    </>
  );
};

export default CoinsList;
