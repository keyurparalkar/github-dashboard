import { Box, Grid, Input, Spinner } from "@chakra-ui/react";
import _ from "lodash";
import * as React from "react";
import { useQueryClient } from "react-query";
import RepoDetails from "../components/RepoDetails";
import SearchList from "../components/SearchList";
import useGetRepos from "../hooks/useGetRepos";
import getReposAxios from "../services/getRepos.axios";

const SearchPage = () => {
  const [value, setValue] = React.useState("");
  const [dataIdx, setDataIdx] = React.useState<number | null>(null);

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
          {isSuccess && data ? (
            <SearchList data={(data as any).items} selectItem={setDataIdx} />
          ) : (
            "No data found. Please search for repository"
          )}
          {dataIdx && <RepoDetails item={(data as any).items[dataIdx]} />}

          {isError && "Error is displaying data."}
        </ul>
      </Grid>
    </Box>
  );
};

export default SearchPage;
