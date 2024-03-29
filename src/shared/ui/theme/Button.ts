export const Button = {
  baseStyle: {
    padding: "10px 16px",
    fontWeight: "600",
    lineHeight: "20px",
    fontSize: "16px",
    bg: "transparent",
  },
  sizes: {},
  variants: {
    primary: {
      color: "brand.white",
      // bg: "brand.blue500",
      bg: "#c1ab9c",
      _hover: {
        bg: "brand.blue800",
      },
      _disabled: {
        bg: "brand.gray300",
      },
    },
    primaryGhost: {
      color: "brand.blue800",
      bg: "brand.gray200",
      _hover: {
        bg: "brand.blue100",
      },
      _disabled: {
        color: "brand.gray600",
      },
    },
    primaryOutline: {
      color: "brand.blue800",
      bg: "brand.white",
      border: "1px solid var(--chakra-colors-brand-blue500)",
      _hover: {
        color: "brand.white",
        bg: "brand.blue500",
      },
      _disabled: {
        color: "brand.gray500",
        borderColor: "brand.gray500",
      },
    },
    secondaryOutline: {
      color: "brand.blue800",
      bg: "brand.white",
      border: "none",
      _hover: {
        color: "brand.blue500",
      },
      _disabled: {
        color: "brand.gray500",
      },
    },
    outlineGhost: {
      color: "brand.blue800",
      bg: "inherit",
      fontWeight: 400,
      border: "1px solid var(--chakra-colors-brand-blue800)",
      width: "min-content",
      _hover: {
        bg: "brand.white",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "sm",
  },
};
