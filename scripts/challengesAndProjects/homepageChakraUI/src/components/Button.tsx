import { Button } from "@chakra-ui/react";

interface IButtonLogin{
  onClickLogin: () => void
}
export default function ButtonLogin({onClickLogin}:IButtonLogin) {
  return (
    <Button
      onClick={onClickLogin}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      Entrar
    </Button>
  );
}
