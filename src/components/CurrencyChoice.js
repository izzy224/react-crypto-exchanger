import React from "react";
import { Flex, Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
const CurrencyChoice = ({ setCurrency, currency }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setCurrency(event.target.value);
  };
  return (
    <>
      <Flex>
        <Box w="10%">
          <Select value={currency} onChange={handleInputChange}>
            <option value="USD">USD</option>
            <option value="JPY">JPY</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
          </Select>
        </Box>
      </Flex>
    </>
  );
};

export default CurrencyChoice;
