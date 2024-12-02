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
import {
  FaEnvelope,
  FaLock,
  FaUserAstronaut,
  FaUserSecret,
} from "react-icons/fa6";
import SocialLogin from "./SocialLogin";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement children={<FaUserSecret />} />
              <Input placeholder="Name" variant={"filled"} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaEnvelope />} />
              <Input placeholder="Email" variant={"filled"} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaUserAstronaut />} />
              <Input placeholder="Username" variant={"filled"} />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<FaLock />} />
              <Input placeholder="Password" variant={"filled"} />
            </InputGroup>
          </VStack>
          <Button colorScheme={"red"} width={"100%"}>
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
