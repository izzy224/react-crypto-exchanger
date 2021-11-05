import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
const CurrencyChoice = ({
  setCurrency,
  currency,
  setCryptoComparator,
  cryptoComparator,
  allCoins,
}) => {
  const handleCurrencySelectChange = (event) => {
    event.preventDefault();
    setCurrency(event.target.value);
  };
  const handleCryptoSelectChange = (event) => {
    event.preventDefault();
    setCryptoComparator(event.target.value);
  };
  return (
    <>
      <Flex>
        <Box w="10%">
          <Select value={currency} onChange={handleCurrencySelectChange}>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
          </Select>
        </Box>
        <Box w="10%">
          <Select value={cryptoComparator} onChange={handleCryptoSelectChange}>
            {allCoins.map((coin) => {
              return <option value={coin.id}>{coin.name}</option>;
            })}
          </Select>
        </Box>
      </Flex>
    </>
  );
};

export default CurrencyChoice;
