import { Box, Text, HStack } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Box bgColor="white">
        <HStack spacing="15px" justifyContent="flex-end" pr="15vw" m="10px">
          <Link to="/">
            <Text>Home</Text>
          </Link>
          <Link to="/exchange">
            <Text>Exchange</Text>
          </Link>
          <Link to="/real-time-graph">
            <Text>Real-time graph</Text>
          </Link>
        </HStack>
      </Box>
    </>
  );
};

export default NavBar;
