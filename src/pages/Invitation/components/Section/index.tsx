import { Flex, FlexProps } from "@chakra-ui/react";

export const Section = ({
  flexProps,
  children,
  withBorder,
}: {
  flexProps?: FlexProps & { id: string };
  children?: React.ReactNode;
  withBorder?: boolean;
}) => {
  return (
    <Flex
      w="100%"
      px={5}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      // color="brand.white"
      {...flexProps}
    >
      <Flex
        // maxW="650px"
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={6}
        border={
          withBorder ? "1px solid var(--chakra-colors-brand-white)" : undefined
        }
        borderRadius={withBorder ? 6 : undefined}
        py={withBorder ? 4 : undefined}
      >
        {children}
      </Flex>
    </Flex>
  );
};
