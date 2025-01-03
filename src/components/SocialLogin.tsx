import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa6";

export default function SocialLogin() {
  const kakaoParams = {
    client_id: "d2bc2d82990b07d32b9cb34d04cdf087",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
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
        <Button
          as={"a"}
          href={
            "https://github.com/login/oauth/authorize?client_id=Ov23lieNcP741VySjXuD&scope=read:user,user:email"
          }
          w={"100%"}
          leftIcon={<FaGithub />}
          colorScheme={"blue"}
        >
          Continue with Github
        </Button>
        <Button
          as={"a"}
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w={"100%"}
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
