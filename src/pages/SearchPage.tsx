import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Kbd,
  List,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import _ from "lodash";
import * as React from "react";
import { useQueryClient } from "react-query";
import { animated } from "react-spring";
import SearchList from "../components/SearchList";
import useBarAnimation from "../hooks/useBarAnimation";
import useGetRepos from "../hooks/useGetRepos";
import GithubIcon from "../icons/GithubIcon";
import LinkedIcon from "../icons/LinkedInIcon";
import TwitterIcon from "../icons/TwitterIcon";

const SearchPage = () => {
  const [value, setValue] = React.useState("");
  const [, setDataIdx] = React.useState<number | null>(null);
  const [, setShowTitle] = React.useState<boolean>(true);

  const props1 = useBarAnimation(420);
  const props2 = useBarAnimation(820);
  const props3 = useBarAnimation(1220);
  const props4 = useBarAnimation(820);
  const props5 = useBarAnimation(920);
  const props6 = useBarAnimation(720);
  const props7 = useBarAnimation(520);
  const props8= useBarAnimation(620);
  const props9 = useBarAnimation(820);
  const props10  = useBarAnimation(920);
  const props11 = useBarAnimation(520);
  const props12 = useBarAnimation(620);

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
          <svg
            width="1600"
            height="500"
            viewBox="0 0 1600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <animated.path
                d="M179.332 760.611V380.801C179.332 378.462 180.261 376.218 181.915 374.564C183.569 372.91 185.813 371.981 188.152 371.981H227.512C229.851 371.981 232.095 372.91 233.749 374.564C235.403 376.218 236.332 378.462 236.332 380.801V761.601L179.332 760.611Z"
                fill="#53b8bb"
                style={props1}
              />
              <animated.path
                d="M690 760.63V380.82C690 378.481 690.929 376.237 692.583 374.583C694.237 372.929 696.481 372 698.82 372H738.18C740.519 372 742.763 372.929 744.417 374.583C746.071 376.237 747 378.481 747 380.82V380.82V761.62L690 760.63Z"
                fill="#ACFFAD"
                style={props2}
              />
              <animated.path
                d="M309.332 761.801V459.801C309.332 457.462 310.261 455.218 311.915 453.564C313.569 451.91 315.813 450.981 318.152 450.981H357.512C359.851 450.981 362.095 451.91 363.749 453.564C365.403 455.218 366.332 457.462 366.332 459.801V459.801V761.151L309.332 761.801Z"
                fill="#53b8bb"
                style={props3}
              />
              <animated.path
                d="M569.332 760.455V322.701C569.332 317.087 573.281 312.535 578.152 312.535H617.512C622.383 312.535 626.332 317.086 626.332 322.701V761.601L569.332 760.455Z"
                fill="#ACFFAD"
                style={props3}
              />
              <animated.path
                d="M49.3311 761.05V549.709C49.3311 546.999 53.2801 544.801 58.1511 544.801H97.5111C102.382 544.801 106.331 547.001 106.331 549.709V761.601L49.3311 761.05Z"
                fill="#ACFFAD"
                style={props4}
              />
              <animated.path
                d="M820.169 763.802H1C0.734784 763.802 0.480429 763.697 0.292892 763.509C0.105356 763.322 0 763.067 0 762.802C0 762.537 0.105356 762.282 0.292892 762.095C0.480429 761.907 0.734784 761.802 1 761.802H820.168C820.433 761.802 820.688 761.907 820.875 762.095C821.063 762.282 821.168 762.537 821.168 762.802C821.168 763.067 821.063 763.322 820.875 763.509C820.688 763.697 820.433 763.802 820.168 763.802H820.169Z"
                fill="#E6E6E6"
                style={props5}
              />
              <animated.path
                d="M439.331 760.306V263.536C439.331 257.165 443.28 252 448.151 252H487.511C492.382 252 496.331 257.165 496.331 263.536V761.601L439.331 760.306Z"
                fill="#53b8bb"
                style={props6}
              />
            </g>
            <animated.path
              d="M1349 762.63V382.82C1349 380.481 1349.93 378.237 1351.58 376.583C1353.24 374.929 1355.48 374 1357.82 374H1397.18C1399.52 374 1401.76 374.929 1403.42 376.583C1405.07 378.237 1406 380.481 1406 382.82V763.62L1349 762.63Z"
              fill="#ACFFAD"
              style={props7}
            />
            <animated.path
              d="M1479 763.82V461.82C1479 459.481 1479.93 457.237 1481.58 455.583C1483.24 453.929 1485.48 453 1487.82 453H1527.18C1529.52 453 1531.76 453.929 1533.42 455.583C1535.07 457.237 1536 459.481 1536 461.82V461.82V763.17L1479 763.82Z"
              fill="#ACFFAD"
              style={props8}
            />
            <animated.path
              d="M1217 762.306V265.536C1217 259.165 1220.95 254 1225.82 254H1265.18C1270.05 254 1274 259.165 1274 265.536V763.601L1217 762.306Z"
              fill="#ACFFAD"
              style={props9}
            />
            <animated.path
              d="M1085 762.92V325.166C1085 319.552 1088.95 315 1093.82 315H1133.18C1138.05 315 1142 319.551 1142 325.166V764.066L1085 762.92Z"
              fill="#ACFFAD"
              style={props10}
            />
            <animated.path
              d="M953 763.249V551.908C953 549.198 956.949 547 961.82 547H1001.18C1006.05 547 1010 549.2 1010 551.908V763.8L953 763.249Z"
              fill="#53b8bb"
              style={props11}
            />
            <animated.path
              d="M821 766.82V461.905C821 459.543 821.929 457.278 823.583 455.608C825.237 453.938 827.481 453 829.82 453H869.18C871.519 453 873.763 453.938 875.417 455.608C877.071 457.278 878 459.543 878 461.905V461.905V766.164L821 766.82Z"
              fill="#ACFFAD"
              style={props12}
            />
            <defs>
              <clipPath id="clip0">
                <rect
                  width="821.168"
                  height="687.802"
                  fill="white"
                  transform="translate(0 76)"
                />
              </clipPath>
            </defs>
          </svg>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default SearchPage;
