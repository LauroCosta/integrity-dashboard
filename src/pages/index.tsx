import {
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        borderRadius={8}
        flexDir="column"
        maxWidth={360}
        bg="gray.700"
        as="form"
        w="100%"
        p="8"
      >
        <Stack spacing="2">
          <Input name="email" label="Email"type="email" />
          <Input name="password" label="Senha"type="password" />
        </Stack>

        <Button type="submit" mt="4" colorScheme="blue" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
