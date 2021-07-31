import { Box, Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router";
import useGetForks from "../../hooks/useGetForks";
import useGetRepos from "../../hooks/useGetRepos";

const RepoDetails = () => {
  //@ts-ignore
  const { name } = useParams();
  const { data, isSuccess, isLoading } = useGetRepos(name);
  const item = isSuccess ? (data as any)?.items.filter((val: any) => val?.full_name === name)[0] : null;

  //Fetch Top 100 newest forks:
  const forkData = useGetForks(name);


  if(isLoading)
    return <h2>Loading {name} data...</h2>

  return (
    <StatGroup>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Forks</StatLabel>
          <StatNumber>{item?.forks_count}</StatNumber>
        </Box>
      </Stat>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Stars</StatLabel>
          <StatNumber>{item?.stargazers_count}</StatNumber>
        </Box>
      </Stat>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Watchers</StatLabel>
          <StatNumber>{item?.watchers_count}</StatNumber>
        </Box>
      </Stat>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Open Issue Count</StatLabel>
          <StatNumber>{item?.open_issues_count}</StatNumber>
        </Box>
      </Stat>
    </StatGroup>
  );
};

export default RepoDetails;
