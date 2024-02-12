import { Box, Center, Input } from "@chakra-ui/react";
import ButtonLogin from "./Button";
 

interface ILogin {
  setLoginShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({setLoginShow}: ILogin) {
  const onClickLogin = (): void => {
    setLoginShow(true)
  }
  return (
    <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <ButtonLogin onClickLogin={onClickLogin}/>
    </Box>
  );
}
