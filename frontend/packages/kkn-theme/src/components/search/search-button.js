import { Box } from "@chakra-ui/react";
import React from "react";
import { IoIosSearch } from "react-icons/io";
import StyleControl from "../constant/style-control";

const SearchButton = props => (
  <Box
    role="group"
    aria-label="Search this site"
    as="button"
    display="flex"
    alignItems="center"
    justifyContent="center"
    transition="background-color ease 0.25s"
    _hover={{ bg: "white" }}
    _groupHover={{ bg: "white" }}
    flexShrink="0"
    boxSize="46px"
    bg={StyleControl.mainColor}
    ml={{ base: "auto", lg: "3rem" }}
    {...props}
  >
    <Box boxSize={6} color={StyleControl.headerColor}  _hover={{color: "black"}} _groupHover={{ color: "black" }} as={IoIosSearch} />
  </Box>
);

export default SearchButton;
