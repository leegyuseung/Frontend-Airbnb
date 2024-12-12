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

interface IRoomProps {
  imageURL: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  imageURL,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} rounded="3xl" overflow={"hidden"} mb={3}>
        <Image minH="280" src={imageURL} />
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
            {name}
          </Text>
          <HStack
            _hover={{
              color: "red.100",
            }}
            spacing={1}
            alignItems={"center"}
            color={"gray"}
          >
            <FaStar size={12} />
            <Text fontSize={"sm"}>{rating}</Text>
          </HStack>
        </Grid>

        <Text fontSize={"sm"} color={gray}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>${price}</Text> / night
      </Text>
    </VStack>
  );
}
