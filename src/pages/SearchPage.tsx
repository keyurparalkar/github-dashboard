import { GridItem, Text } from "@chakra-ui/react";
import * as React from "react";
import SearchRepo from "../components/SearchRepo";
import SvgGraphs from "../components/SvgGraphs";

const SearchPage = () => {
  return (
    <>
      <GridItem colStart={2} colEnd={3} textAlign="center">
        <Text fontSize="9xl">GRD</Text>
        <Text fontSize="md" fontWeight="bold" color="gray.600">
          Github repository dashboard
        </Text>
      </GridItem>

      <SearchRepo />

      <SvgGraphs />
    </>
  );
};

export default SearchPage;
