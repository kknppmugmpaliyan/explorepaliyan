import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "../link";
import MobileMenu from "../menu";
import { omitConnectProps } from "../helpers";
import { connect } from "frontity";
import StyleControl from "../constant/style-control";
import LogoWebsite from "../../assets/logo-website.png";

const SiteHeader = (props) => (
  <Box
    as="header"
    transition="transform ease .25s"
    width="100%"
    pos="fixed"
    top="0"
    left="0"
    bg={StyleControl.headerColor}
    zIndex="90"
    {...props}
  />
);

const SiteHeaderInner = (props) => (
  <Flex
    align="center"
    width={{ base: "auto", sm: "92%" }}
    mx="auto"
    height={{ sm: "70px" }}
    maxW="1550px"
    {...props}
  />
);
// const BoxLogo = styled(Box)`
//     width: 210px;
//     height: 210px;
//
//     background: #FFFFFF;
//     margin-top: 75px;
// `
const BoxShadow = {
  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
  marginTop: "75px",
  background: "#FFFFFF",
};
const LogoStyle = {
  margin: "auto",
  width: "150px",
  paddingTop: "30px",
};

const SiteLogo = connect(({ state, actions, ...props }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  return (
    <Box display="block" flexShrink="0" {...omitConnectProps(props)}>
      <Link link="/">
        <Box
          display={{ base: "none", lg: "flex" }}
          width="210px"
          height="210px"
          style={BoxShadow}
        >
          <img style={LogoStyle} src={LogoWebsite} alt={state.theme.logo} />
        </Box>
        <Box
          fontSize="2xl"
          color={StyleControl.mainColor}
          fontFamily="heading"
          textTransform="uppercase"
          fontWeight="bold"
          display={{ base: "flex", lg: "none" }}
        >
          <Box width="30px" height="30px" mr={2}>
            <img src={LogoWebsite} alt={state.theme.logo} />
          </Box>
          {state.theme.logo}
        </Box>
      </Link>
    </Box>
  );
});

const Header = ({ children, ...props }) => (
  <SiteHeader {...props}>
    <SiteHeaderInner>
      <MobileMenu />
      <SiteLogo />
      {children}
    </SiteHeaderInner>
  </SiteHeader>
);

export default Header;
