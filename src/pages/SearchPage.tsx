import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Spinner,
  Text,
} from "@chakra-ui/react";
import _ from "lodash";
import * as React from "react";
import { useQueryClient } from "react-query";
import SearchList from "../components/SearchList";
import useGetRepos from "../hooks/useGetRepos";

const SearchPage = () => {
  const [value, setValue] = React.useState("");
  const [, setDataIdx] = React.useState<number | null>(null);

  const queryClient = useQueryClient();

  //@ts-ignore
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick =  () => {
    if (value !== "") {
      const debounceTempCall = _.debounce(() => {
        refetch();
      }, 1000);

      debounceTempCall();
    } else {
      queryClient.removeQueries("getRepos", { exact: true });
    }
  }
  
  const { isLoading, isError, data, refetch, isSuccess, isFetched} = useGetRepos(value, {enabled: false});

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        GITHUB DASHBOARD SEARCH RESPONSE
        {isFetched && <Text fontSize="9xl">GRD</Text>}
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            placeholder="Enter github repository name"
            value={value}
            onChange={handleChange}
            size="md"
          />
          <InputRightAddon
            pl={0}
            pr={0}
            children={
              <Button colorScheme="teal" size="md"
              onClick={handleClick}
              >
                Search
              </Button>
            }
          />
        </InputGroup>
        <ul>
          {isLoading && <Spinner />}
          {isSuccess &&
            (data ? (
              <SearchList data={(data as any).items} selectItem={setDataIdx} />
            ) : (
              "No data found. Please search for repository"
            ))}

          {isError && "Error is displaying data."}
        </ul>
      </Grid>
    </Box>
  );
};

export default SearchPage;
