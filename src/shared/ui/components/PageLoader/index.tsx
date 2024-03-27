import {
  CircularProgress,
  CircularProgressLabel,
  Flex,
  type CircularProgressProps,
} from "@chakra-ui/react";

export const PageLoader = ({
  valueText,
  ...passThroughProps
}: CircularProgressProps) => {
  return (
    <Flex overflow="hidden" height="100%" justifyContent="center">
      <CircularProgress
        isIndeterminate
        width="50%"
        size="100%"
        {...passThroughProps}
      >
        {valueText ? (
          <CircularProgressLabel fontSize={20}>
            {valueText}
          </CircularProgressLabel>
        ) : null}
      </CircularProgress>
    </Flex>
  );
};
