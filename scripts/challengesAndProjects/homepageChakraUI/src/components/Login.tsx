import {
  ChakraProvider,
  Flex,
  Input,
  Button,
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

import ButtonLogin from "./Button";

interface ILogin {
  setLoginShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Login({ setLoginShow }: ILogin) {
  const [show, setShow] = useState(false);
  const handleSetShow = () => {
    setShow(!show);
  };

  function onClickLogin() {
    setLoginShow(true);
    alert("Seja bem vindo!")
  }

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
          backgroundColor={"#fffffff4"}
          minW={"800px"}
          p={6}
          gap={6}
        >
          <Box>
            <FormLabel fontSize={22}>Insira seu email:</FormLabel>
            <Input
              placeholder="Email"
              _placeholder={{ opacity: 1, color: "gray.900" }}
              width={"100%"}
              size={"md"}
              variant={"outline"}
              backgroundColor={"#e1dede"}
            />
          </Box>

          <Box mb={4}>
            <FormLabel fontSize={22}>Insira sua senha:</FormLabel>
            <InputGroup>
              <Input
                placeholder="Senha"
                type={show ? "text" : "password"}
                _placeholder={{ opacity: 1, color: "gray.900" }}
                width={"100%"}
                size={"md"}
                pr={20}
                variant={"outline"}
                backgroundColor={"#e1dede"}
              />
              <InputRightElement width="4.5rem" mr={1}>
                <Button h="1.75rem" size="sm" onClick={handleSetShow}>
                  {show ? "Esconder" : "Mostrar"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>

          <ButtonLogin onClickLogin={onClickLogin} />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
