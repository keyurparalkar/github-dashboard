import { Button, GridItem, Stack } from "@chakra-ui/react";
import * as React from "react";
import GithubIcon from "../../icons/GithubIcon";
import LinkedIcon from "../../icons/LinkedInIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import { Link } from "react-router-dom";

const Header = () => (
  <>
    <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
      <Button colorScheme="transparent" color="black" size="md">
        <Link to="/compare-repos">Compare Repos</Link>
      </Button>
    </GridItem>
    <GridItem colStart={3} colEnd={4} rowStart={1} rowEnd={2}>
      <Stack spacing={8} justify="flex-end" direction="row" pt={2} pr={4}>
        <GithubIcon />
        <LinkedIcon />
        <TwitterIcon />
      </Stack>
    </GridItem>
  </>
);

export default Header;
