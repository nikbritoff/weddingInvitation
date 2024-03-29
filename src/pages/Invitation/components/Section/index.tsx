import { Flex, FlexProps } from "@chakra-ui/react";

export const Section = ({
  flexProps,
  children,
}: {
  flexProps?: FlexProps & { id: string };
  children?: React.ReactNode;
}) => {
  return (
    <Flex
      // minH="100vh"
      w="100%"
      p={5}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      color="brand.white"
      {...flexProps}
    >
      <Flex
        maxW="650px"
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={5}
      >
        {children}
      </Flex>
    </Flex>
  );
};
