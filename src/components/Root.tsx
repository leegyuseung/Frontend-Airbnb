import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { FaAirbnb } from "react-icons/fa6";

export default function Root() {
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color={"red.500"}>
          <FaAirbnb size={"48"} />
        </Box>
        <Flex gap={2}>
          <Button>Log in</Button>
          <Button colorPalette={"red"}>Sign up</Button>
        </Flex>
      </HStack>
      <Outlet />
    </Box>
  );
}
