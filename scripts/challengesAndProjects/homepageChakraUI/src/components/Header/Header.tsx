import { Center, Flex, Text } from "@chakra-ui/react";

export const Header = () => {
  const time = new Date();

  return (
    <Flex
      backgroundColor={"orange"}
      p={6}
      fontSize={24}
      mb={10}
      fontWeight={600}
      alignItems={"center"}
    >
      <Center>
        <Text>Horário de Brasília {time.toLocaleTimeString()}</Text>
      </Center>
      <Center flex={1}>
        <Text>Banco-DIO</Text>
      </Center>
    </Flex>
  );
};
