import { Box, Image, Grid, GridItem } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import StyleControl from "./constant/style-control";
import Language from "./constant/language";
import LogoUGM from "../assets/logo-ugm.png";
import LogoKKN from "../assets/logo-kkn.png";
import LogoUnit from "../assets/logo-unit.png";
import LogoKabupaten from "../assets/logo-kabupaten.png";

const FooterCategory = styled.b`
  font-size: 18px;
  color: ${StyleControl.secondaryColor};
`;

const FooterSection = (props) => (
  <Box
    as="footer"
    pos="relative"
    bg={StyleControl.mainColor}
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = (props) => (
  <Grid
    templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(5, 1fr)" }}
    maxWidth="1150px"
    mx="auto"
    width="90%"
    {...props}
  />
);

const FooterSectionItem = (props) => (
  <GridItem padding="24px" color="white" textAlign="justify" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection fontSize={14} alignSelf="flex-end">
    <FooterSectionGroup>
      <FooterSectionItem
        colSpan={{ base: 1, md: 3 }}
        fontFamily="Poppins"
        lineHeight="8"
      >
        <FooterCategory>Tentang Kami</FooterCategory>
        <br></br>
        {Language.indonesian.aboutUs}
      </FooterSectionItem>
      <FooterSectionItem fontFamily="Poppins" lineHeight="8">
        <FooterCategory>Kategori</FooterCategory>
        {state.theme.categories.map(([name, link]) => (
          <Fragment key={name}>
            <br />
            <Link
              _hover={{ textDecoration: "underline" }}
              link={link}
              textTransform="capitalize"
            >
              {name}
            </Link>
          </Fragment>
        ))}
      </FooterSectionItem>
      <FooterSectionItem fontFamily="Poppins" lineHeight="8">
        <FooterCategory>Kontak</FooterCategory>
        {state.theme.socialLinks.map(([name, link]) => (
          <Fragment key={name}>
            <br></br>
            <Link
              _hover={{ textDecoration: "underline" }}
              link={link}
              textTransform="capitalize"
            >
              {name}
            </Link>
          </Fragment>
        ))}
      </FooterSectionItem>
    </FooterSectionGroup>
    <FooterSectionGroup
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(6, 1fr)" }}
      maxWidth="600px"
    >
      <FooterSectionItem colSpan={{ base: 1, md: 2 }}>
        <Image height="50px" src={LogoUGM}></Image>
      </FooterSectionItem>
      <FooterSectionItem colSpan={{ base: 1, md: 2 }}>
        <Image height="50px" src={LogoUnit}></Image>
      </FooterSectionItem>
      <FooterSectionItem colSpan={{ base: 1, md: 1 }}>
        <Image height="50px" src={LogoKabupaten}></Image>
      </FooterSectionItem>
      <FooterSectionItem colSpan={{ base: 1, md: 1 }}>
        <Image height="50px" src={LogoKKN}></Image>
      </FooterSectionItem>
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);
