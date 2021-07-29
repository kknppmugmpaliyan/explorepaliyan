import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { PatternBox, PatternBoxInner } from "../styles/pattern-box";

const PostHeader = ({ taxonomy, title, ...props }) => (
  <PatternBox pb="80px" mb="-80px" {...props}>
    <PatternBoxInner>
      <Text textTransform="capitalize" color="#fff" fontWeight="bold">
        {taxonomy}
      </Text>
      <Heading
        mt="8px"
        textTransform="capitalize"
        fontSize={{ base: "5xl", md: "6xl" }}
        color="white"
      >
        {title}
      </Heading>
    </PatternBoxInner>
  </PatternBox>
);

export default PostHeader;
