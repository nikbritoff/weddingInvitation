import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HashLink as Link } from "react-router-hash-link";
import { SECTIONS_CONFIG } from "../const.layout";

export const NavMenu: React.FC = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<RxHamburgerMenu />}
        variant="outline"
        position="fixed"
        right={5}
        top={5}
        size="lg"
        bgColor="brand.white"
      />
      <MenuList>
        {SECTIONS_CONFIG.map((section) => (
          <Link to={`/#${section.id}`} key={section.label}>
            <MenuItem>{section.label}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};
