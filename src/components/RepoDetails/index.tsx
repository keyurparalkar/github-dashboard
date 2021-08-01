import {
  Box,
  Spinner,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import * as React from "react";
import { useParams } from "react-router";
import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useGetForks from "../../hooks/useGetForks";
import useGetRepos from "../../hooks/useGetRepos";
import { convertToDateValObject } from "../../Utils/chores.utils";

const CustomToolTip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <Stat>
        <Box
          borderRadius="5px"
          borderWidth="1px"
          boxShadow="xs"
          backgroundColor="white"
          p={3}
          pb={1}
        >
          <StatLabel>{dayjs(label).format("MMM D YYYY")}</StatLabel>
          <StatNumber>{payload[0].value}</StatNumber>
          <StatHelpText>Forks</StatHelpText>
        </Box>
      </Stat>
    );
  }

  return null;
};

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

      {forkData.isSuccess &&
        JSON.stringify(convertToDateValObject(forkData.data))}
      {forkData.isSuccess && (
        <AreaChart
          width={800}
          height={300}
          data={areaChartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="time"
            domain={["auto", "auto"]}
            name="Time"
            scale="time"
            tickFormatter={(epochTime: number) =>
              dayjs(epochTime).format("MM/DD")
            }
          />
          <YAxis dataKey="value" />
          <Tooltip content={<CustomToolTip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      )}
    </div>
  );
};

export default RepoDetails;
