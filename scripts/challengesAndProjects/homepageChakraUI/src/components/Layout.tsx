import { Box, ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Box minHeight="100vh" backgroundColor="#ffffff" padding="25px">
          {children}
        </Box>
        <Footer />
      </ChakraProvider>
    </>
  );
};
