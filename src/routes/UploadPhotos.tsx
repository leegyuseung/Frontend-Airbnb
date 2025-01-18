import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import ProtectedPage from "../components/ProtectedPage";
import useHostOnlyPage from "../components/HostOnlyPage";
import { useMutation } from "@tanstack/react-query";
import { getUploadURL, uploadImage } from "../api";

interface IForm {
  file: FileList;
}

interface IUploadURLResponse {
  id: string;
  uploadURL: string;
}

export default function UploadPhotos() {
  const { register, handleSubmit, watch } = useForm<IForm>();
  const uploadImageMutation = useMutation(uploadImage, {
    onSuccess: (data: any) => {
      console.log(data);
    },
  });
  const uploadURLMutation = useMutation(getUploadURL, {
    onSuccess: (data: IUploadURLResponse) => {
      uploadImageMutation.mutate({
        uploadURL: data.uploadURL,
        file: watch("file"),
      });
    },
  });
  const { roomPk } = useParams();
  useHostOnlyPage();
  const onSubmit = () => {
    uploadURLMutation.mutate();
  };
  return (
    <ProtectedPage>
      <Box
        pb={40}
        mt={10}
        px={{
          base: 10,
          lg: 40,
        }}
      >
        <Container>
          <Heading textAlign={"center"}>Upload a Photo</Heading>
          <VStack
            onSubmit={handleSubmit(onSubmit)}
            as={"form"}
            spacing={5}
            mt={10}
          >
            <FormControl>
              <Input {...register("file")} type="file" accept="image/*" />
            </FormControl>
            <Button type="submit" w="full" colorScheme={"red"}>
              Upload photos
            </Button>
          </VStack>
        </Container>
      </Box>
    </ProtectedPage>
  );
}
