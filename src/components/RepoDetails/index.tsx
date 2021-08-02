import {
  Box,
  Container,
  Link,
  Spacer,
  Spinner,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router";
import useGetForks from "../../hooks/useGetForks";
import useGetRepos from "../../hooks/useGetRepos";
import { convertToDateValObject, kFormatter } from "../../Utils/chores.utils";
import AreaChartGraph from "../charts/AreaChartGraph";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
    <Container maxW="container.xl">
      <Text fontSize="xxx-large" fontWeight="hairline" p={5} pl={0}>
        {name}
        <Link href={item?.html_url} isExternal pl={3}>
          <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <StatGroup display="flex"> 
        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Forks</StatLabel>
            <StatNumber fontSize="4xl">{kFormatter(item?.forks_count)}</StatNumber>
          </Box>
        </Stat>

        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Stars</StatLabel>
            <StatNumber fontSize="4xl">{kFormatter(item?.stargazers_count)}</StatNumber>
          </Box>
        </Stat>


        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Watchers</StatLabel>
            <StatNumber fontSize="4xl">{kFormatter(item?.watchers_count)}</StatNumber>
          </Box>
        </Stat>


        <Stat>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Open Issue Count</StatLabel>
            <StatNumber fontSize="4xl">{kFormatter(item?.open_issues_count)}</StatNumber>
          </Box>
        </Stat>
      </StatGroup>

      {forkData.isLoading && (
        <>
          <Spinner />
          <span>Loading forks charts....</span>
        </>
      )}

      <br/>

      {forkData.isSuccess && (
        <Box borderRadius="5px" borderWidth="1px" boxShadow="xs" p={2}>
          <Text fontSize="xx-large" fontWeight="thin">
            Forks
          </Text>
          <Text fontSize="small" fontWeight="thin" color="gray.600">
            Top 100 new forks
          </Text>
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
        </Box>
      )}
    </Container>
  );
};

export default RepoDetails;
