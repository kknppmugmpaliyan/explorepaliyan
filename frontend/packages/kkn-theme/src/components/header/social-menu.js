import { Box, VisuallyHidden } from "@chakra-ui/react";
import React from "react";
import { SiteMenu } from "./navigation";
import {
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io";
import Link from "../link";
import StyleControl from "../constant/style-control";

// warning for showSocialLinks and menu.length
export const SocialMenu = ({ menu, ...props }) => (
  <SiteMenu spacing="30px" ml="24px" position={{ sm: "relative" }} {...props}>
    {menu.map(([name, link]) => {
      const SocialIcon = icons[name];
      return (
        <SocialMenuItem
          key={name}
          label={name}
          link={link}
          icon={SocialIcon}
          color={iconColors[name]}
        />
      );
    })}
  </SiteMenu>
);

const SocialMenuItem = ({ icon, label, link, ...props }) => (
  <Box
    color={StyleControl.mainColor}
    transition="all 0.3s"
    _hover={{ color: StyleControl.secondaryColor }}
    as="li"
    listStyleType="none"
    margin="0"
    {...props}
  >
    <Link link={link}>
      <Box as={icon} boxSize="24px" />
    </Link>
    <VisuallyHidden>{label}</VisuallyHidden>
  </Box>
);

const icons = {
  twitter: IoLogoTwitter,
  pinterest: IoLogoPinterest,
  facebook: IoLogoFacebook,
  instagram: IoLogoInstagram,
  whatsApp: IoLogoWhatsapp,
  youTube: IoLogoYoutube,
};

const iconColors = {
  twitter: "1DA1F2",
  pinterest: "#E60023",
  facebook: "#4267B2",
  instagram: "#c13584",
  whatsApp: "#25D366",
  youTube: "#FF0000",
};

const SocialNav = ({ menu, ...props }) => (
  <Box ml="auto" display={{ base: "none", lg: "block" }} {...props}>
    <SocialMenu menu={menu} />
  </Box>
);

export default SocialNav;
