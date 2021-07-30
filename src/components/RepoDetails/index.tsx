import * as React from "react";
import { Stat, StatGroup, StatLabel, StatNumber, Box } from "@chakra-ui/react";

const RepoDetails = ({item}: any) => {
    console.log("INSIDE REPO DETAILS = ", item.forks_count);
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
