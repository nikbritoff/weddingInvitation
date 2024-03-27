import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const customVariant = definePartsStyle({
  tab: {
    border: "1px solid var(--chakra-colors-brand-gray500)",
    color: "var(--chakra-colors-brand-gray600)",
    fontWeight: 400,
    height: "min-content",
    borderRightColor: "var(--chakra-colors-brand-white)",
    _first: {
      borderRadius: "4px 0 0 4px",
    },
    _last: {
      borderRadius: "0 4px 4px 0",
      borderRightColor: "var(--chakra-colors-brand-gray500)",
    },
    _selected: {
      zIndex: 1,
      borderColor: "var(--chakra-colors-brand-blue500)",
      color: "var(--chakra-colors-brand-white)",
      bgColor: "var(--chakra-colors-brand-blue500)",
      borderRightWidth: "2px",
      mr: "-1px",
      _last: {
        mr: "0",
        borderRightWidth: "1px",
      },
    },
  },
  tablist: {
    alignItems: "center",
  },
});

const variants = {
  colorful: customVariant,
};

const defaultProps = {
  variant: "colorful" as string,
};

export const Tabs = defineMultiStyleConfig({
  variants,
  defaultProps,
});
