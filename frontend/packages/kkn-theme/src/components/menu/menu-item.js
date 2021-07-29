import { Box } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import StyleControl from "../constant/style-control";

const MenuItem = ({ index, children, mb, link, ...rest }) => (
  <Box as="li" listStyleType="none" mb={mb} {...rest}>
    <Link
      display="block"
      color="white"
      role="group"
      pos="relative"
      minH="40px"
      borderBottom="1px solid"
      borderColor="#ffffff14"
      _hover={{
        bg: "rgba(236, 164, 25, 0.14)",
        borderColor: StyleControl.secondaryColor,
        color: StyleControl.secondaryColor,
      }}
      _focus={{
        bg: "rgba(236, 164, 25, 0.14)",
        borderColor: StyleControl.secondaryColor,
        color: StyleControl.secondaryColor,
      }}
      transition="all 0.3s"
      padding="12px"
      link={link}
    >
      <Box
        letterSpacing="-0.004em"
        lineHeight="1.39"
        fontWeight="medium"
        fontSize="24px"
        cursor="pointer"
      >
        {children}
      </Box>
    </Link>
  </Box>
);

export default MenuItem;
