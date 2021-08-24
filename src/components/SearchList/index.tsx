import { Heading, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import * as React from "react";
import { useHistory } from "react-router";

const SearchList = (props: any) => {
  const history = useHistory();

  return (
    <>
      {props.data.map((item: any, idx: number) => (
        <LinkBox
          maxW="lg + 5px"
          borderWidth="1px"
          rounded="md"
          p="1"
          pl="2"
          key={`key-${idx}`}
          onClick={() => {
            history.push(`/repo/${item?.full_name}`)
          }}
        >
          <Heading size="sm" my="2">
            <LinkOverlay href="#">{item?.full_name}</LinkOverlay>
          </Heading>
        </LinkBox>
      ))}
    </>
  );
};

export default SearchList;
