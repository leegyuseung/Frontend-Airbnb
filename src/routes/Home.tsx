import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={40}
      columnGap={4}
      rowGap={8}
      templateColumns={"repeat(5, 1fr)"}
    >
      <VStack alignItems={"flex-start"}>
        <Box>
          <Box rounded="3xl" overflow={"hidden"} mb={3}>
            <Image
              h="280"
              src={
                "https://a0.muscache.com/im/pictures/b2c0f556-f726-4db8-985f-25a668369fe7.jpg?im_w=720&im_format=avif"
              }
            />
          </Box>
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

          <Text fontSize={"sm"} color={"gray.600"}>
            998Km 거리
          </Text>
        </Box>
        <Text fontSize={"sm"} color={"gray.600"}>
          <Text as={"b"}>₩709,045</Text> / 박
        </Text>
      </VStack>
    </Grid>
  );
}
