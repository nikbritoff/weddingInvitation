import { extendTheme } from "@chakra-ui/react";

import { Button } from "./Button";
import { Input } from "./Input";
import { Tabs } from "./Tabs";
import { Text } from "./Text";

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
      green100: "#d1e7dd",
      green400: "#75b798",
      green500: "#28a745",
      red100: "#f8d7da",
      red300: "#ea868f",
      purple100: "#ebe5fc",
      purple500: "#5227cc",
      redShadow: "#DC354533",
      white: "#ffffff",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  components: {
    Button,
    Input,
    Tabs,
    Text,
  },
});
