import { ChakraProvider, theme } from "@chakra-ui/react";
import * as React from "react";
import Routing from "./routes";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routing />
    </ChakraProvider>
  );
};
