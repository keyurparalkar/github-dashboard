import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  SkeletonText,
  Spinner,
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useGetForks from "../../hooks/useGetForks";
import useGetIssues from "../../hooks/useGetIssues";
import useGetReleases from "../../hooks/useGetReleases";
import useGetRepos from "../../hooks/useGetRepos";
import { convertToDateValObject } from "../../Utils/chores.utils";
import AreaChartGraph from "../charts/AreaChartGraph";
import CounterFormatter from "../CountFormatter";

const RepoDetails = () => {
  //@ts-ignore
  const { name } = useParams();
  const history = useHistory();
  const { data, isSuccess, isLoading } = useGetRepos(name);
  const item: any = isSuccess
    ? (data as any)?.items.filter((val: any) => val?.full_name === name)[0]
    : null;

  //Fetch Top 100 newest forks:
  const forkData = useGetForks(name);

  //Fetch Top 100 newest Issues combined with PR:
  const issuesPrData = useGetIssues(name);
  const issuesData =
    issuesPrData.isSuccess &&
    issuesPrData.data.filter(
      (item: any) => !item.hasOwnProperty("pull_request")
    );
  const prData =
    issuesPrData.isSuccess &&
    issuesPrData.data.filter((item: any) =>
      item.hasOwnProperty("pull_request")
    );
  //Fetch Top 100 newest releases:
  const releasesData = useGetReleases(name);

  const forkChartsData =
    forkData.isSuccess && convertToDateValObject(forkData.data);
  const issuesChartData =
    issuesPrData.isSuccess && convertToDateValObject(issuesData);
  const prChartData = issuesPrData.isSuccess && convertToDateValObject(prData);
  const releasesChartData =
    releasesData.isSuccess && convertToDateValObject(releasesData.data);

  if (isLoading) return <h2>Loading {name} data...</h2>;

  return (
    <Container maxW="90vw">
      <Stack direction="row" alignItems="center">
        <Button
          leftIcon={<ArrowBackIcon fontSize="25px" />}
          variant="ghost"
          onClick={() => history.replace("/")}
        />
        <Text fontSize="xxx-large" fontWeight="hairline" p={5} pl={0}>
          {name}
        </Text>
        <Link href={item?.html_url} isExternal pl={3}>
          <ExternalLinkIcon fontSize="25px" />
        </Link>
      </Stack>
      <StatGroup display="flex">
        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Forks</StatLabel>
            <StatNumber fontSize="4xl">
              <CounterFormatter num={item?.forks_count} />
            </StatNumber>
          </Box>
        </Stat>

        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Stars</StatLabel>
            <StatNumber fontSize="4xl">
              {/* {kFormatter(item?.stargazers_count)} */}
              <CounterFormatter num={item?.stargazers_count} />
            </StatNumber>
          </Box>
        </Stat>

        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Watchers</StatLabel>
            <StatNumber fontSize="4xl">
              {/* {kFormatter(item?.watchers_count)} */}
              <CounterFormatter num={item?.watchers_count} />
            </StatNumber>
          </Box>
        </Stat>

        <Stat mr={5}>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Issue Count</StatLabel>
            <StatNumber fontSize="4xl">
              {/* {kFormatter(issuesData.length)} */}
              <CounterFormatter num={issuesData.length} />
            </StatNumber>
          </Box>
        </Stat>

        <Stat>
          <Box p={3} borderRadius="5px" borderWidth="1px" boxShadow="xs">
            <StatLabel fontSize="l">Pull requests</StatLabel>
            <StatNumber fontSize="4xl">
              {/* {kFormatter(prData.length)} */}
              <CounterFormatter num={prData.length} />
            </StatNumber>
          </Box>
        </Stat>
      </StatGroup>

      <br />
      {forkData.isLoading && (
        <>
          <Spinner />
          <span>Loading forks charts....</span>
        </>
      )}

      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(2,1fr)"
        gap={5}
      >
        {issuesPrData.isLoading ? (
          <Stack>
            <SkeletonText noOfLines={5} spacing={30} skeletonHeight="6" />
          </Stack>
        ) : (
          <Box borderRadius="5px" borderWidth="1px" boxShadow="xs" p={2}>
            <Text fontSize="xx-large" fontWeight="thin">
              Issues
            </Text>
            <Text fontSize="small" fontWeight="thin" color="gray.600">
              Top 100 new issues and PRs
            </Text>
            <AreaChartGraph
              id="issue-graph"
              chartData={issuesChartData}
              width={400}
              height={400}
              xDataKey="time"
              yDataKey="value"
              colors={{
                stroke: "#3a7290",
                fill: "#53b8bb",
              }}
              margin={{
                left: 0,
                right: 40,
                top: 20,
              }}
              tipText="Issues"
            />
          </Box>
        )}

        {forkData.isSuccess && (
          <Box borderRadius="5px" borderWidth="1px" boxShadow="xs" p={2}>
            <Text fontSize="xx-large" fontWeight="thin">
              Forks
            </Text>
            <Text fontSize="small" fontWeight="thin" color="gray.600">
              Top 100 new forks
            </Text>
            <AreaChartGraph
              id="fork-graph"
              chartData={forkChartsData}
              width={400}
              height={400}
              xDataKey="time"
              yDataKey="value"
              colors={{
                stroke: "#50CB93",
                fill: "#ACFFAD",
              }}
              margin={{
                left: 0,
                right: 40,
                top: 20,
              }}
              tipText="Forks"
            />
          </Box>
        )}

        {forkData.isLoading ? (
          <Stack>
            <SkeletonText noOfLines={5} spacing={30} skeletonHeight="6" />
          </Stack>
        ) : (
          <Box borderRadius="5px" borderWidth="1px" boxShadow="xs" p={2}>
            <Text fontSize="xx-large" fontWeight="thin">
              Pull Requests
            </Text>
            <Text fontSize="small" fontWeight="thin" color="gray.600">
              Top pull requests
            </Text>
            <AreaChartGraph
              id="pr-graph"
              chartData={prChartData}
              width={800}
              height={400}
              xDataKey="time"
              yDataKey="value"
              colors={{
                stroke: "#3a7290",
                fill: "#53b8bb",
              }}
              margin={{
                left: 0,
                right: 40,
                top: 20,
              }}
              tipText="PRs"
            />
          </Box>
        )}

        {releasesData.isLoading ? (
          <Stack>
            <SkeletonText noOfLines={5} spacing={30} skeletonHeight="6" />
          </Stack>
        ) : (
          <Box borderRadius="5px" borderWidth="1px" boxShadow="xs" p={2}>
            <Text fontSize="xx-large" fontWeight="thin">
              Releases
            </Text>
            <Text fontSize="small" fontWeight="thin" color="gray.600">
              Top 100 releases newest
            </Text>
            <AreaChartGraph
              id="releases-graph"
              chartData={releasesChartData}
              width={800}
              height={400}
              xDataKey="time"
              yDataKey="value"
              colors={{
                stroke: "#50CB93",
                fill: "#ACFFAD",
              }}
              margin={{
                left: 0,
                right: 40,
                top: 20,
              }}
              tipText="Releases"
            />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default RepoDetails;
