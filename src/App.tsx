import {
  Box,
  ChakraProvider,
  Grid,
  Input,
  Spinner,
  theme,
} from "@chakra-ui/react";
import axios from "axios";
import _ from "lodash";
import * as React from "react";
import { useQuery } from "react-query";

export const App = () => {
  const [value, setValue] = React.useState("react-query");
  //@ts-ignore
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const debounceTempCall =_.debounce(() => {
      refetch();
    }, 300);

    debounceTempCall();
  };

  const debouncedFuncCall = async () => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(
        value
      )}`
    );
    return response.data;
  };
  const { isLoading, isError, data, error, refetch } = useQuery(
    "getRepo",
    debouncedFuncCall,
    {
      enabled: false,
      refetchOnWindowFocus: false,
      initialData: null,
    }
  );

  if (isError) {
    return <h4>ERROR: {JSON.stringify(error)}</h4>;
  }

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
            {!isLoading ? (
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
            )}
          </ul>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
