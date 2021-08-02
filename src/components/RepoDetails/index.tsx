import {
  Box,
  Spinner,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router";
import useGetForks from "../../hooks/useGetForks";
import useGetRepos from "../../hooks/useGetRepos";
import { convertToDateValObject } from "../../Utils/chores.utils";
import AreaChartGraph from "../charts/AreaChartGraph";

const RepoDetails = () => {
  //@ts-ignore
  const { name } = useParams();
  const { data, isSuccess, isLoading } = useGetRepos(name);
  const item = isSuccess
    ? (data as any)?.items.filter((val: any) => val?.full_name === name)[0]
    : null;

  //Fetch Top 100 newest forks:
  const forkData = useGetForks(name);

  const areaChartData =
    forkData.isSuccess && convertToDateValObject(forkData.data);

  if (isLoading) return <h2>Loading {name} data...</h2>;

  return (
    <div>
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

      {forkData.isLoading && (
        <>
          <Spinner />
          <span>Loading forks charts....</span>
        </>
      )}

      {forkData.isSuccess && (
        <AreaChartGraph
          chartData={areaChartData}
          width={800}
          height={400}
          xDataKey="time"
          yDataKey="value"
          colors={{
            stroke: "#50CB93",
            fill: "#ACFFAD",
          }}
        />
      )}
    </div>
  );
};

export default RepoDetails;
