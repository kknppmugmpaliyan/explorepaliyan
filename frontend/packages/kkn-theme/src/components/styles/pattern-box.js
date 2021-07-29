import { Box } from "@chakra-ui/react";
import React from "react";
import Section from "./section";
import tileGreen from "../../assets/pattern-tile-green.svg";
import tileLight from "../../assets/pattern-tile-light-fade.svg";
import StyleControl from "../constant/style-control";

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBox = ({ showPattern = true, ...props }) => (
  <Box
    as="section"
    bg={StyleControl.mainColor}
    borderTop="10px solid"
    borderColor={StyleControl.secondaryColor}
    {...(showPattern && {
      bgImage: `url(${tileGreen})`,
      bgSize: "1018px",
      bgPos: "top center"
    })}
    {...props}
  />
);

/**
 * @param {React.ComponentProps<typeof Box>} props
 */
export const PatternBoxInner = props => (
  <Section
    py="80px"
    position="relative"
    zIndex="1"
    overflow="hidden"
    textAlign="center"
    size="sm"
    px={6}
    {...props}
  />
);

export const LightPatternBox = React.forwardRef(
  ({ showPattern = true, ...props }, ref) => (
    <Box
      ref={ref}
      bg={StyleControl.pageColor}
      pt="40px"
      pos="relative"
      zIndex={0}
      _before={{
        content: `""`,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        display: "block",
        opacity: 0.4,
        ...(showPattern && {
          bgSize: "1018px",
          bgPos: "top center",
          bgImage: `url(${tileLight})`
        })
      }}
      {...props}
    />
  )
);
