import { Heading, Text, VStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack bg={"gray.100"} justifyContent={"center"} minH={"100vh"}>
      <Heading>Page not found.</Heading>
      <Text>It seems that your'r lost.</Text>
      <ReactRouterLink to={"/"}>
        <ChakraLink colorPalette={"black"} variant={"underline"}>
          Go home &rarr;
        </ChakraLink>
      </ReactRouterLink>
    </VStack>
  );
}
