import { Heading, LinkBox, LinkOverlay } from "@chakra-ui/layout";
import * as React from "react";
import { useHistory } from "react-router";

const SearchList = (props: any) => {
  const history = useHistory();

  return (
    <>
      {props.data.map((item: any, idx: number) => (
        <LinkBox
          maxW="md"
          borderWidth="1px"
          rounded="md"
          p="5"
          key={`key-${idx}`}
          onClick={() => {
            props.selectItem(idx);
            history.push(`/repo/${item?.full_name}`)
          }}
        >
          <Heading size="md" my="2">
            <LinkOverlay href="#">{item?.full_name}</LinkOverlay>
          </Heading>
        </LinkBox>
      ))}
    </>
  );
};

export default SearchList;
