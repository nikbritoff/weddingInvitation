import { extendTheme } from "@chakra-ui/react";

import { Button } from "./Button";
import { Input } from "./Input";
import { Tabs } from "./Tabs";
import { Text } from "./Text";

import "@fontsource/open-sans";
import "@fontsource/raleway";
import { Heading } from "./Heading";

export const theme = extendTheme({
  colors: {
    brand: {
      blue100: "#cfe2ff",
      blue200: "#9ec5fe",
      blue300: "#6ea8fe",
      blue400: "#3d8bfd",
      blue500: "#0d6efd",
      blue600: "#0a58ca",
      blue700: "#084298",
      blue800: "#052c65",
      blue900: "#031633",
      blueShadow: "#0D6EFD26",
      gray100: "#f8f9fa",
      gray200: "#e9ecef",
      gray300: "#dee2e6",
      gray400: "#ced4da",
      gray500: "#adb5bd",
      gray600: "#6c757d",
      gray700: "#495057",
      gray800: "#343a40",
      gray900: "#212529",
      green100: "#6a6e59",
      green400: "#939681",
      green500: "#28a745",
      red100: "#f8d7da",
      red300: "#ea868f",
      purple100: "#ebe5fc",
      purple500: "#5227cc",
      redShadow: "#DC354533",
      white: "#ffffff",
      beige100: "#e8d5ca",
      beige200: "#c1ab9c",
      beige500: "#a47d60",
      beige700: "#713b22",
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  components: {
    Button,
    // Input,
    // Textarea: {
    //   variants: {
    //     primary: {
    //       borderWidth: "1px",
    //       borderStyle: "solid",
    //       boxShadow: "none",
    //       borderColor: "brand.green100",
    //       _hover: {
    //         borderColor: "var(--chakra-colors-brand-green100)",
    //         boxShadow: "var(--chakra-colors-brand-green100)",
    //       },
    //       _focus: {
    //         borderColor: "var(--chakra-colors-brand-green100)",
    //         boxShadow: "var(--chakra-colors-brand-green100)",
    //       },
    //       _focusVisible: {
    //         borderColor: "var(--chakra-colors-brand-green100)",
    //         boxShadow: "0px 0px 0px 2x var(--chakra-colors-brand-green100)",
    //       },
    //       _invalid: {
    //         boxShadow: "0px 0px 0px 3px var(--chakra-colors-brand-redShadow)",
    //       },
    //     },
    //     _focusVisible: {
    //       borderColor: "var(--chakra-colors-brand-green100)",
    //       boxShadow: "0px 0px 0px 3px var(--chakra-colors-brand-green100)",
    //     },
    //   },
    // },
    Heading,
    Tabs,
    Text,
    // Radio: {
    //   baseStyle: {
    //     control: {
    //       borderColor: "var(--chakra-colors-brand-green100)",
    //       _checked: {
    //         borderColor: "var(--chakra-colors-brand-green100)",
    //         bg: "var(--chakra-colors-brand-green100)",
    //       },
    //     },
    //   },
    // },
    // Checkbox: {
    //   baseStyle: {
    //     control: {
    //       borderColor: "var(--chakra-colors-brand-green100)",
    //       _checked: {
    //         borderColor: "var(--chakra-colors-brand-green100)",
    //         bg: "var(--chakra-colors-brand-green100)",
    //       },
    //     },
    //   },
    // },
  },
});
