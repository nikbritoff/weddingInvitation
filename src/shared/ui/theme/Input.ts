export const Input = {
  baseStyle: {},
  variants: {
    outline: {
      field: {
        bg: "brand.white",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "brand.gray300",
        _hover: {
          borderColor: "brand.blue300",
          boxShadow: "none",
        },
        _focus: {
          boxShadow: "0px 0px 0px 3px var(--chakra-colors-brand-blueShadow)",
        },
        _focusVisible: {
          boxShadow: "0px 0px 0px 3px var(--chakra-colors-brand-blue500)",
        },
        _invalid: {
          boxShadow: "0px 0px 0px 3px var(--chakra-colors-brand-redShadow)",
        },
      },
    },
  },
};
