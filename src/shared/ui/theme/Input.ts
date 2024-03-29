export const Input = {
  baseStyle: {},
  variants: {
    outline: {
      field: {
        _placeholder: {
          color: "brand.white",
        },
        borderWidth: "1px",
        borderStyle: "solid",
        boxShadow: "none",
        borderColor: "brand.green100",
        _hover: {
          borderColor: "var(--chakra-colors-brand-green100)",
          boxShadow: "var(--chakra-colors-brand-green100)",
        },
        _focus: {
          borderColor: "var(--chakra-colors-brand-green100)",
          boxShadow: "var(--chakra-colors-brand-green100)",
        },
        _invalid: {
          boxShadow: "0px 0px 0px 3px var(--chakra-colors-brand-redShadow)",
        },
      },
    },
  },
};
