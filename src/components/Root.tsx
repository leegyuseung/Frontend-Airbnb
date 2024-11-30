import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import { FaAirbnb, FaMoon, FaUserAstronaut, FaLock } from "react-icons/fa6";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color={"red.500"}>
          <Link to={"/"}>
            <FaAirbnb size={"48"} />
          </Link>
        </Box>
        <HStack spacing={2}>
          <IconButton
            variant={"ghost"}
            aria-label="Toggle dark mode"
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement children={<FaUserAstronaut />} />
                  <Input placeholder="Username" variant={"filled"} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement children={<FaLock />} />
                  <Input placeholder="Password" variant={"filled"} />
                </InputGroup>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme={"red"} width={"100%"}>
                Log in
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
