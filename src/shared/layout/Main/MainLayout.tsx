import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { NavMenu } from "../NavMenu/NavMenu";

export const MainLayout = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      flexDirection="column"
      bgColor="brand.gray100"
      alignItems="center"
    >
      <NavMenu />
      <Outlet />
    </Flex>
  );
};
