import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import StyleControl from "../constant/style-control";

function MenuDrawer({ children, ...props }) {
  return (
    <Drawer preserveScrollBarGap size="sm" placement="left" {...props}>
      <DrawerOverlay />
      <DrawerContent bg={StyleControl.mainColor} px={8} max="auto">
        <DrawerCloseButton color="white" />
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default MenuDrawer;
