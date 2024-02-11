import {
  ChakraProvider,
  Flex,
  Center,
  Input,
  Button,
  Box,
  FormLabel,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box
        backgroundColor={"#292828"}
        minHeight={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          flexDirection={"column"}
          backgroundColor={"#e1dede"}
          minW={"800px"}
        >
          <FormLabel>Insira seu email</FormLabel>
          <Input
            placeholder="Email"
            _placeholder={{ opacity: 1, color: "gray.900" }}
            p={6}
          />
          <FormLabel>Insira sua senha</FormLabel>
          <Input
            placeholder="Senha"
            _placeholder={{ opacity: 1, color: "gray.900" }}
            p={6}
          />
          <Button colorScheme={"whatsapp"}>Entrar</Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
