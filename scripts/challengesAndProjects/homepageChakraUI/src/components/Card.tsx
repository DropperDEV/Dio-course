import { Heading, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IData } from "../interface/data";

export const Card = () => {
  const [dataAccount, setDataAccount] = useState<(null | IData)>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IData = await api;
      console.log(data);
      setDataAccount(data)
    };

    getData();
  });

  return (
    <Flex flexDirection={"column"} gap={10}>
      <Heading fontSize={"5xl"}>Informações do usuário:</Heading>
      <Text fontSize={"3xl"} display={"flex"} gap={4}>
        O seu id é:
        <Text backgroundColor={"pink.300"} borderRadius={"xl"} px={4}>
          {" "}
          {dataAccount?.id}{" "}
        </Text>
      </Text>
      <Text fontSize={"3xl"} display={"flex"} gap={4}>
        um resumo sobre você:
        <Text backgroundColor={"pink.300"} borderRadius={"xl"} px={4}>
          {" "}
          {dataAccount?.paragraph}
        </Text>
      </Text>
      <Text fontSize={"3xl"} display={"flex"} gap={4}>
        detalhes sobre ti:
        <Text backgroundColor={"pink.300"} borderRadius={"xl"} px={4}>
          {" "}
          {dataAccount?.details}
        </Text>
      </Text>
    </Flex>
  );
};
