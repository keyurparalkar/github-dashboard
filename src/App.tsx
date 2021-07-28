import {
  Box,
  ChakraProvider,
  Grid,
  Input,
  Spinner,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  theme,
} from "@chakra-ui/react";
import _ from "lodash";
import * as React from "react";
import { useQueryClient } from "react-query";
import useGetRepos from "./hooks/useGetRepos";
import getReposAxios from "./services/getRepos.axios";

export const App = () => {
  const [value, setValue] = React.useState("");
  const queryClient = useQueryClient();

  //@ts-ignore
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (event.target.value !== "") {
      const debounceTempCall = _.debounce(() => {
        refetch();
      }, 1000);

      debounceTempCall();
    } else {
      queryClient.removeQueries("getRepos", { exact: true });
    }
  };

  const { isLoading, isError, data, refetch, isSuccess } = useGetRepos(() =>
    getReposAxios(value)
  );

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          GITHUB DASHBOARD SEARCH RESPONSE
          <Input
            placeholder="Enter github repository name"
            value={value}
            onChange={handleChange}
            size="sm"
          />
          <ul>
            {isLoading && <Spinner />}
            {isSuccess && data
              ? (data as any).items.map((item: any, index: number) => (
                  <li key={`v--${index}`}>
                    <span>{item?.full_name}</span>
                    &nbsp;
                    <StatGroup>
                      <Stat>
                        <Box
                          borderRadius="5px"
                          borderWidth="1px"
                          boxShadow="xs"
                        >
                          <StatLabel>Forks</StatLabel>
                          <StatNumber>{item?.forks_count}</StatNumber>
                        </Box>
                      </Stat>
                      <Stat>
                        <Box
                          borderRadius="5px"
                          borderWidth="1px"
                          boxShadow="xs"
                        >
                          <StatLabel>Stars</StatLabel>
                          <StatNumber>{item?.stargazers_count}</StatNumber>
                        </Box>
                      </Stat>
                      <Stat>
                        <Box
                          borderRadius="5px"
                          borderWidth="1px"
                          boxShadow="xs"
                        >
                          <StatLabel>Watchers</StatLabel>
                          <StatNumber>{item?.watchers_count}</StatNumber>
                        </Box>
                      </Stat>
                      <Stat>
                        <Box
                          borderRadius="5px"
                          borderWidth="1px"
                          boxShadow="xs"
                        >
                          <StatLabel>Open Issue Count</StatLabel>
                          <StatNumber>{item?.open_issues_count}</StatNumber>
                        </Box>
                      </Stat>
                    </StatGroup>
                  </li>
                ))
              : "No data found. Please search for repos."}

            {isError && "Error is displaying data."}
          </ul>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
