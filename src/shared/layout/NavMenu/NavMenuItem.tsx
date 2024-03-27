import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { PagePaths } from "~/router/router.constants";
import { ReactElement } from "react";
import { navMenuItemSelectedStyles } from "./styles";

type Props = {
  label: string;
  path: (typeof PagePaths)[keyof typeof PagePaths];
  children: ReactElement;
};

export const NavMenuItem: React.FC<Props> = ({
  label,
  path,
  children,
}: Props) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <Flex
          p="15px"
          gap="20px"
          borderRadius="6px"
          {...(isActive ? { ...navMenuItemSelectedStyles } : {})}
        >
          <Flex w="25px" h="25px">
            {children}
          </Flex>
          {label}
        </Flex>
      )}
    </NavLink>
  );
};
