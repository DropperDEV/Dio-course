import { Heading, Flex, SimpleGrid, Center, Spinner } from "@chakra-ui/react";
import CardBlock from "./CardBlock";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { IData } from "../interface/data";
import CardInfo from "./CardInfo";

export const Card = () => {
  const [dataAccount, setDataAccount] = useState<null | IData>();

  useEffect(() => {
    const getData = async () => {
      const data: any | IData = await api;
      console.log(data);
      setDataAccount(data);
    };

    getData();
  }, []);

  return (
    <Flex flexDirection={"column"} gap={10}>
      <Heading fontSize={"5xl"}>Informações do usuário:</Heading>
      {dataAccount === null || dataAccount === undefined ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <SimpleGrid columns={2} spacing={14}>
          <CardBlock>
            <CardInfo title={"O seu id é:"} find={dataAccount?.id} />
            <CardInfo
              title={"um resumo sobre você:"}
              find={dataAccount?.paragraph}
            />
            <CardInfo
              title={"detalhes sobre ti:"}
              find={dataAccount?.details}
            />
          </CardBlock>
          <CardBlock>
            <CardInfo title={"saldo:"} find={dataAccount?.balance} />
            <CardInfo title={"sua conta é:"} find={dataAccount?.tipoConta} />
          </CardBlock>
        </SimpleGrid>
      )}
    </Flex>
  );
};
