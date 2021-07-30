import { Box, Stat, StatGroup, StatLabel, StatNumber } from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router";
import useGetRepos from "../../hooks/useGetRepos";

const RepoDetails = () => {
  //@ts-ignore
  const { name } = useParams();
  const { data } = useGetRepos("getRepos");
  const item = data?.items.filter((val: any) => val?.full_name === name);

  return (
    <StatGroup>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Forks</StatLabel>
          <StatNumber>{item[0]?.forks_count}</StatNumber>
        </Box>
      </Stat>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Stars</StatLabel>
          <StatNumber>{item[0]?.stargazers_count}</StatNumber>
        </Box>
      </Stat>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Watchers</StatLabel>
          <StatNumber>{item[0]?.watchers_count}</StatNumber>
        </Box>
      </Stat>
      <Stat>
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs">
          <StatLabel>Open Issue Count</StatLabel>
          <StatNumber>{item[0]?.open_issues_count}</StatNumber>
        </Box>
      </Stat>
    </StatGroup>
  );
};

export default RepoDetails;
