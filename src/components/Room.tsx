import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa6";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} rounded="3xl" overflow={"hidden"} mb={3}>
        <Image
          minH="280"
          src={
            "https://a0.muscache.com/im/pictures/b2c0f556-f726-4db8-985f-25a668369fe7.jpg?im_w=720&im_format=avif"
          }
        />
        <Button
          variant={"unstyled"}
          position={"absolute"}
          top={0}
          right={0}
          color={"black"}
        >
          <FaRegHeart size={"20px"} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} fontSize={"sm"} noOfLines={1}>
            Shinano, Kamiminochi District, 일본의 초소형 주택
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>

        <Text fontSize={"sm"} color={gray}>
          998Km 거리
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>₩709,045</Text> / 박
      </Text>
    </VStack>
  );
}
