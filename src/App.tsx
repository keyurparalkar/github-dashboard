import {
  Box,
  ChakraProvider,
  Grid,
  Input,
  Spinner,
  theme
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

    if(event.target.value!== ""){
      const debounceTempCall =_.debounce(() => {
        refetch();
      }, 1000);

      debounceTempCall();
    } else {
      queryClient.removeQueries("getRepos", {exact: true});
    }
  };

  const { isLoading, isError, data, refetch, isSuccess} = useGetRepos(() => getReposAxios(value));

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
            {isLoading  && <Spinner />}
            {isSuccess && data ? (data as any).items.map((item: any, index: number) => (
                  <li key={`v--${index}`}>
                    <span>{item?.full_name}</span>
                    &nbsp;
                    <span>{item?.forks_count}</span>
                    &nbsp;
                    <span>{item?.stargazers_count}</span>
                    &nbsp;
                    <span>{item?.watchers_count}</span>
                    &nbsp;
                    <span>{item?.watchers_count}</span>
                    &nbsp;
                    <span>{item?.open_issues_count}</span>
                  </li>
                )) : "No data found. Please search for repos."
              }

            {isError && "Error is displaying data."}
            {/* {!isLoading ? (
              data ? (
                (data as any).items.map((item: any, index: number) => (
                  <li key={`v--${index}`}>
                    <span>{item?.full_name}</span>
                    &nbsp;
                    <span>{item?.forks_count}</span>
                    &nbsp;
                    <span>{item?.stargazers_count}</span>
                    &nbsp;
                    <span>{item?.watchers_count}</span>
                    &nbsp;
                    <span>{item?.watchers_count}</span>
                    &nbsp;
                    <span>{item?.open_issues_count}</span>
                  </li>
                ))
              ) : (
                "No data found. Please search for repos."
              )
            ) : (
              <Spinner />
            )} */}
          </ul>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
