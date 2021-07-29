import { Box, Stack } from "@chakra-ui/react";
import { styled } from "frontity";
import React from "react";
import FrontityLink from "../link";
import StyleControl from "../constant/style-control";

const Link = styled(FrontityLink)`
  position: relative;
  color: ${StyleControl.navPassive};
  text-decoration: none;
  padding-right: 10px;
  padding-left: 10px;

 &:hover {
    background: #E5E5E5;
    border-radius: 19px;
    transition: bottom ease 0.25s, background-color ease 0.25s;
  }
  &:focus {
    background: ${StyleControl.mainColor};
    border-radius: 19px;
    color: ${StyleControl.headerColor};
    transition: bottom ease 0.25s, background-color ease 0.25s;
  }
`;

export const SiteMenu = (props) => (
  <Stack
    ml="50px"
    spacing="50px"
    as="ul"
    listStyleType="none"
    align="center"
    direction="row"
    color="white"
    {...props}
  />
);

const SiteMenuItem = ({ link, ...props }) => (
  <Box
    as="li"
    color="white"
    fontSize={{ base: "sm", lg: "md" }}
    fontWeight="500"
    fontStyle="normal"
    fontFamily="Poppins"
    textTransform="capitalize"
    position="relative"
    cursor="pointer"
    {...props}
  >
    <Link link={link}>{props.children}</Link>
  </Box>
);

const Navigation = ({ menu, ...props }) => (
  <Box as="nav" width="100%" display={{ base: "none", lg: "block" }} {...props}>
    <SiteMenu>
      {menu.map(([name, link]) => (
        <SiteMenuItem key={name} link={link}>
          {name}
        </SiteMenuItem>
      ))}
    </SiteMenu>
  </Box>
);

export default Navigation;
