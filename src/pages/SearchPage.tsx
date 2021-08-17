import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button, Grid,
  GridItem, Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon, Kbd,
  List,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import _ from "lodash";
import * as React from "react";
import { useQueryClient } from "react-query";
import SearchList from "../components/SearchList";
import useGetRepos from "../hooks/useGetRepos";
import GithubIcon from "../icons/GithubIcon";
import LinkedIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";

const SearchPage = () => {
  const [value, setValue] = React.useState("");
  const [, setDataIdx] = React.useState<number | null>(null);
  const [, setShowTitle] = React.useState<boolean>(true);

  const queryClient = useQueryClient();

  //@ts-ignore
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value !== "") {
      const debounceTempCall = _.debounce(() => {
        refetch();
        setShowTitle(false);
      }, 1000);

      debounceTempCall();
    } else {
      queryClient.removeQueries("getRepos", { exact: true });
    }
  };

  const { isLoading, isError, data, refetch, isSuccess } = useGetRepos(value, {
    enabled: false,
  });

  React.useEffect(() => {
    if (isLoading || isSuccess) {
      setShowTitle(false);
    }
  }, [isLoading, isSuccess]);

  return (
    <Grid
      h="100vh"
      templateColumns="repeat(3, 1fr)"
      templateRows="60px repeat(3,1fr)"
      gap={1}
    >
      <GridItem colSpan={3}>
        <Stack
         spacing={8}
         align="center"
         justify="flex-end"
         direction="row"
        //  pt={[4, 4, 0, 0]}
        pt={2}
        pr={4}
        >
        <GithubIcon />

        <LinkedIcon />
            <TwitterIcon />
        </Stack>
      </GridItem>

      <GridItem colStart={2} colEnd={3} textAlign="center">
        <Text fontSize="9xl">GRD</Text>
        <Text fontSize="md" fontWeight="bold" color="gray.600">
          Github repository dashboard
        </Text>
      </GridItem>

      <GridItem colStart={2} colEnd={3}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            placeholder="Enter github repository name"
            value={value}
            onChange={handleChange}
            size="md"
            borderRightColor="transparent"            
          />
          <InputRightAddon
            pl={2}
            pr={0}
            bgColor="transparent"
            children={
              <span>
                <Kbd>ctrl</Kbd> + <Kbd mr={2}>K</Kbd>
              <Button colorScheme="teal" size="md" onClick={handleClick}>
                Search
              </Button>
              </span>
            }
          />
        </InputGroup>
        <List position="absolute" w="33%" zIndex={10} backgroundColor="white">
          {isLoading && <Spinner />}
          {isSuccess &&
            (data ? (
              <SearchList data={(data as any).items} selectItem={setDataIdx} />
            ) : (
              "No data found. Please search for repository"
            ))}

          {isError && "Error is displaying data."}
        </List>
      </GridItem>

      <GridItem colSpan={3} rowStart={4}>
        <Box id="bottom-shape" position="relative">
        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 320">
          <path fill="#cacaca" fill-opacity="1" d="M0,32L0,160L120,160L120,0L240,0L240,224L360,224L360,32L480,32L480,288L600,288L600,192L720,192L720,320L840,320L840,96L960,96L960,96L1080,96L1080,128L1200,128L1200,288L1320,288L1320,96L1440,96L1440,320L1320,320L1320,320L1200,320L1200,320L1080,320L1080,320L960,320L960,320L840,320L840,320L720,320L720,320L600,320L600,320L480,320L480,320L360,320L360,320L240,320L240,320L120,320L120,320L0,320L0,320Z">
            </path></svg>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
