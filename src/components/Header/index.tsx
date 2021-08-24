import { GridItem, Stack } from "@chakra-ui/react";
import * as React from "react";
import GithubIcon from "../../icons/GithubIcon";
import LinkedIcon from "../../icons/LinkedInIcon";
import TwitterIcon from "../../icons/TwitterIcon";

const Header = () => (
    <GridItem colSpan={3}>
        <Stack
          spacing={8}
          align="center"
          justify="flex-end"
          direction="row"
          pt={2}
          pr={4}
        >
          <GithubIcon />

          <LinkedIcon />
          <TwitterIcon />
        </Stack>
      </GridItem>
);

export default Header;