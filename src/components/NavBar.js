import { Box, Text, HStack } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box bgColor="white">
        <HStack spacing="15px" justifyContent="flex-start" pr="15vw" m="10px">
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/exchange/bitcoin">
            <Text>Exchange</Text>
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default NavBar;
