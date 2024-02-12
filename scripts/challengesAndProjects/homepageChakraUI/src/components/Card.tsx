import { Heading, Flex, Text } from "@chakra-ui/react";

interface ICard {
  id: number;
  paragraph: string;
  details: string;
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return (
    <Flex flexDirection={"column"} gap={10}>
      <Heading fontSize={"5xl"}>Informações do usuário:</Heading>
      <Text fontSize={"3xl"} display={"flex"} gap={4}>
        O seu id é:
        <Text backgroundColor={"pink.300"} borderRadius={"xl"}  px={4}>
          {" "}
          {id}{" "}
        </Text>
      </Text>
      <Text fontSize={"3xl"} display={"flex"} gap={4}>
        um resumo sobre você:
        <Text backgroundColor={"pink.300"} borderRadius={"xl"}  px={4}>
          {" "}
          {paragraph}
        </Text>
      </Text>
      <Text fontSize={"3xl"} display={"flex"} gap={4}>
        detalhes sobre ti:
        <Text backgroundColor={"pink.300"} borderRadius={"xl"}  px={4}>
          {" "}
          {details}
        </Text>
      </Text>
    </Flex>
  );
};
