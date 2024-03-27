import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

import { type BaseFormControlProps } from "./formControl.types.ts";

export const FormControl = ({
  label,
  helperText,
  errorMessage,
  children,
  width = "100%",
  isPadding = true,
  ...passThroughProps
}: BaseFormControlProps & { width?: string; isPadding?: boolean }) => (
  <ChakraFormControl
    marginY={isPadding ? "20px" : undefined}
    {...passThroughProps}
    width={width}
    isInvalid={Boolean(errorMessage)}
  >
    {label ? <FormLabel>{label}</FormLabel> : null}

    {children}

    {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    {errorMessage ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
  </ChakraFormControl>
);
