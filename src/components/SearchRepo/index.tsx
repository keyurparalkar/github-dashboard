import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Kbd,
  List,
  Spinner,
} from "@chakra-ui/react";
import _ from "lodash";
import * as React from "react";
import { useQueryClient } from "react-query";
import useGetRepos from "../../hooks/useGetRepos";
import SearchList from "../SearchList";

const SearchRepo = () => {
  const [value, setValue] = React.useState("");
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
            <SearchList data={(data as any).items} />
          ) : (
            "No data found. Please search for repository"
          ))}

        {isError && "Error is displaying data."}
      </List>
    </GridItem>
  );
};

export default SearchRepo;
