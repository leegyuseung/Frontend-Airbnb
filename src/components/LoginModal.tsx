import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { FaLock, FaUserAstronaut } from "react-icons/fa6";
import SocialLogin from "./SocialLogin";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
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
          <Button mt={4} colorScheme={"red"} width={"100%"}>
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
