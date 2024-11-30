import { Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg={"gray.100"} justifyContent={"center"} minH={"100vh"}>
      <Heading>Page not found.</Heading>
      <Text>It seems that your'r lost.</Text>
      <ReactRouterLink to={"/"}>
        <Button colorScheme={"red"} variant={"link"}>
          Go home &rarr;
        </Button>
      </ReactRouterLink>
    </VStack>
  );
}
