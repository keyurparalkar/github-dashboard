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

  // const [flip, set] = React.useState(false);
  // const props = useSpring({
  //   to: { y: 200 },
  //   from: { y: 0 },
  //   reset: true,
  //   reverse: flip,
  //   delay: 20,
  //   config: config.molasses,
  //   onRest: () => set(!flip),
  // });

  const props1 = useBarAnimation(120);
  const props2 = useBarAnimation(420);
  const props3 = useBarAnimation(1220);
  const props4 = useBarAnimation(620);
  const props5 = useBarAnimation(820);
  const props6 = useBarAnimation(620);
  const props7 = useBarAnimation(520);
  const props8= useBarAnimation(320);
  const props9 = useBarAnimation(120);
  const props10  = useBarAnimation(920);
  const props11 = useBarAnimation(220);
  const props12 = useBarAnimation(120);

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
                fill="#3F3D56"
                style={props1}
              />
              <animated.path
                d="M690 760.63V380.82C690 378.481 690.929 376.237 692.583 374.583C694.237 372.929 696.481 372 698.82 372H738.18C740.519 372 742.763 372.929 744.417 374.583C746.071 376.237 747 378.481 747 380.82V380.82V761.62L690 760.63Z"
                fill="#3F3D56"
                style={props2}
              />
              <animated.path
                d="M309.332 761.801V459.801C309.332 457.462 310.261 455.218 311.915 453.564C313.569 451.91 315.813 450.981 318.152 450.981H357.512C359.851 450.981 362.095 451.91 363.749 453.564C365.403 455.218 366.332 457.462 366.332 459.801V459.801V761.151L309.332 761.801Z"
                fill="#3F3D56"
                style={props3}
              />
              {/* <path
                d="M78.3309 403C77.7516 403 77.1847 402.832 76.6987 402.516C76.2127 402.201 75.8284 401.752 75.5923 401.223C75.3561 400.694 75.2782 400.107 75.368 399.535C75.4578 398.963 75.7114 398.429 76.0982 397.997L207.704 251.206L337.222 323.936L467.511 99.4382L600.239 208.683C600.543 208.934 600.795 209.241 600.981 209.589C601.166 209.937 601.282 210.318 601.32 210.71C601.358 211.103 601.319 211.499 601.204 211.876C601.089 212.253 600.901 212.603 600.65 212.908C600.4 213.212 600.092 213.464 599.744 213.649C599.396 213.835 599.015 213.949 598.622 213.987C598.23 214.025 597.834 213.986 597.457 213.87C597.08 213.755 596.73 213.567 596.425 213.316L469.153 108.561L339.442 332.064L208.96 258.793L80.5655 402.002C80.2844 402.317 79.94 402.568 79.5549 402.74C79.1698 402.912 78.7527 403 78.3309 403V403Z"
                fill="#3F3D56"
              /> */}
              {/* <path
                d="M77.832 428C93.296 428 105.832 415.464 105.832 400C105.832 384.536 93.296 372 77.832 372C62.3681 372 49.832 384.536 49.832 400C49.832 415.464 62.3681 428 77.832 428Z"
                fill="#6C63FF"
              /> */}
              {/* <path
                d="M207.832 283C223.296 283 235.832 270.464 235.832 255C235.832 239.536 223.296 227 207.832 227C192.368 227 179.832 239.536 179.832 255C179.832 270.464 192.368 283 207.832 283Z"
                fill="#CCCCCC"
              />
              <path
                d="M337.832 356C353.296 356 365.832 343.464 365.832 328C365.832 312.536 353.296 300 337.832 300C322.368 300 309.832 312.536 309.832 328C309.832 343.464 322.368 356 337.832 356Z"
                fill="#E6E6E6"
              /> */}
              {/* <path
                d="M467.832 132C483.296 132 495.832 119.464 495.832 104C495.832 88.536 483.296 76 467.832 76C452.368 76 439.832 88.536 439.832 104C439.832 119.464 452.368 132 467.832 132Z"
                fill="#6C63FF"
              /> */}
              <animated.path
                d="M569.332 760.455V322.701C569.332 317.087 573.281 312.535 578.152 312.535H617.512C622.383 312.535 626.332 317.086 626.332 322.701V761.601L569.332 760.455Z"
                fill="#3F3D56"
                style={props3}
              />
              <animated.path
                d="M49.3311 761.05V549.709C49.3311 546.999 53.2801 544.801 58.1511 544.801H97.5111C102.382 544.801 106.331 547.001 106.331 549.709V761.601L49.3311 761.05Z"
                fill="#3F3D56"
                style={props4}
              />
              <animated.path
                d="M820.169 763.802H1C0.734784 763.802 0.480429 763.697 0.292892 763.509C0.105356 763.322 0 763.067 0 762.802C0 762.537 0.105356 762.282 0.292892 762.095C0.480429 761.907 0.734784 761.802 1 761.802H820.168C820.433 761.802 820.688 761.907 820.875 762.095C821.063 762.282 821.168 762.537 821.168 762.802C821.168 763.067 821.063 763.322 820.875 763.509C820.688 763.697 820.433 763.802 820.168 763.802H820.169Z"
                fill="#E6E6E6"
                style={props5}
              />
              <animated.path
                d="M439.331 760.306V263.536C439.331 257.165 443.28 252 448.151 252H487.511C492.382 252 496.331 257.165 496.331 263.536V761.601L439.331 760.306Z"
                fill="#6C63FF"
                style={props6}
              />
            </g>
            {/* <path
              d="M1349 229C1364.46 229 1377 216.464 1377 201C1377 185.536 1364.46 173 1349 173C1333.54 173 1321 185.536 1321 201C1321 216.464 1333.54 229 1349 229Z"
              fill="#6C63FF"
            /> */}
            {/* <path
              d="M906 229C921.464 229 934 216.464 934 201C934 185.536 921.464 173 906 173C890.536 173 878 185.536 878 201C878 216.464 890.536 229 906 229Z"
              fill="#CCCCCC"
            />
            <path
              d="M773.233 374C772.608 374 771.997 373.808 771.473 373.449C770.95 373.09 770.535 372.577 770.281 371.974C770.026 371.371 769.942 370.703 770.039 370.051C770.136 369.399 770.409 368.79 770.826 368.298L912.689 200.986L1052.3 283.883L1192.75 28L1335.82 152.518C1336.15 152.803 1336.42 153.154 1336.62 153.55C1336.82 153.947 1336.94 154.381 1336.98 154.828C1337.03 155.275 1336.98 155.727 1336.86 156.156C1336.74 156.586 1336.53 156.986 1336.26 157.333C1335.99 157.68 1335.66 157.967 1335.29 158.178C1334.91 158.389 1334.5 158.52 1334.08 158.563C1333.65 158.607 1333.23 158.561 1332.82 158.43C1332.41 158.299 1332.04 158.084 1331.71 157.798L1194.52 38.3985L1054.7 293.147L914.044 209.633L775.642 372.863C775.339 373.221 774.967 373.508 774.552 373.704C774.137 373.9 773.688 374.001 773.233 374Z"
              fill="#3F3D56"
            /> */}
            {/* <path
              d="M1189 56C1204.46 56 1217 43.464 1217 28C1217 12.536 1204.46 0 1189 0C1173.54 0 1161 12.536 1161 28C1161 43.464 1173.54 56 1189 56Z"
              fill="#6C63FF"
            /> */}
            <animated.path
              d="M1349 762.63V382.82C1349 380.481 1349.93 378.237 1351.58 376.583C1353.24 374.929 1355.48 374 1357.82 374H1397.18C1399.52 374 1401.76 374.929 1403.42 376.583C1405.07 378.237 1406 380.481 1406 382.82V763.62L1349 762.63Z"
              fill="#3F3D56"
              style={props7}
            />
            <animated.path
              d="M1479 763.82V461.82C1479 459.481 1479.93 457.237 1481.58 455.583C1483.24 453.929 1485.48 453 1487.82 453H1527.18C1529.52 453 1531.76 453.929 1533.42 455.583C1535.07 457.237 1536 459.481 1536 461.82V461.82V763.17L1479 763.82Z"
              fill="#3F3D56"
              style={props8}
            />
            <animated.path
              d="M1217 762.306V265.536C1217 259.165 1220.95 254 1225.82 254H1265.18C1270.05 254 1274 259.165 1274 265.536V763.601L1217 762.306Z"
              fill="#6C63FF"
              style={props9}
            />
            <animated.path
              d="M1085 762.92V325.166C1085 319.552 1088.95 315 1093.82 315H1133.18C1138.05 315 1142 319.551 1142 325.166V764.066L1085 762.92Z"
              fill="#3F3D56"
              style={props10}
            />
            <animated.path
              d="M953 763.249V551.908C953 549.198 956.949 547 961.82 547H1001.18C1006.05 547 1010 549.2 1010 551.908V763.8L953 763.249Z"
              fill="#3F3D56"
              style={props11}
            />
            <animated.path
              d="M821 766.82V461.905C821 459.543 821.929 457.278 823.583 455.608C825.237 453.938 827.481 453 829.82 453H869.18C871.519 453 873.763 453.938 875.417 455.608C877.071 457.278 878 459.543 878 461.905V461.905V766.164L821 766.82Z"
              fill="#3F3D56"
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
