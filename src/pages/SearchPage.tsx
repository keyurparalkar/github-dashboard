import { Search2Icon } from "@chakra-ui/icons";
import {
  Button, Grid,
  GridItem, Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon, Kbd,
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
        <ul>
          {isLoading && <Spinner />}
          {isSuccess &&
            (data ? (
              <SearchList data={(data as any).items} selectItem={setDataIdx} />
            ) : (
              "No data found. Please search for repository"
            ))}

          {isError && "Error is displaying data."}
        </ul>
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
