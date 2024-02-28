import { Box } from "@chakra-ui/react";
interface ICardBlock {
  children: any;
}

function CardBlock({ children }: ICardBlock) {
  return (
    <Box backgroundColor={"#cccccc"} borderRadius={20} p={4}>
      {children}
    </Box>
  );
}

export default CardBlock;
