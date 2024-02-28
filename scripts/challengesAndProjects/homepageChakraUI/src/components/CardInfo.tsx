import { Text } from "@chakra-ui/react";


interface ICardInfo{
    title: string;
    find: any;
}

function CardInfo({title,find}: ICardInfo) {
    
  return (
    <Text fontSize={"3xl"} display={"flex"} gap={4} mb={4}>
      {title}
      <Text backgroundColor={"pink.300"} borderRadius={"xl"} px={4}>
        {" "}
        {find}
      </Text>
    </Text>
  );
}

export default CardInfo;
