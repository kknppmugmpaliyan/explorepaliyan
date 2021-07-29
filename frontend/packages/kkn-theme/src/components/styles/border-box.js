import React from "react";
import { Box } from "@chakra-ui/react";
import StyleControl from "../constant/style-control";

/**
 * A Box with accented top border
 * @param {React.ComponentProps<typeof Box>} props
 */
const BorderBox = props => (
  <Box
    p="40px"
    bg="accent.50"
    borderTop="4px solid"
    borderColor={StyleControl.secondaryColor}
    {...props}
  />
);

export default BorderBox;
