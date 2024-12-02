import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa6";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text
          color={"gray.500"}
          textTransform={"uppercase"}
          as={"b"}
          fontSize={"xs"}
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w={"100%"} leftIcon={<FaGithub />} colorScheme={"blue"}>
          Continue with Github
        </Button>
        <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
