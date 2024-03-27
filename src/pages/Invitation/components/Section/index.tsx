import { Flex, FlexProps } from "@chakra-ui/react";

export const Section = ({
  flexProps,
  children,
}: {
  flexProps?: FlexProps & { id: string };
  children?: React.ReactNode;
}) => {
  console.log(flexProps);
  return (
    <Flex
      h="100vh"
      w="100%"
      id="green"
      p={5}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={12}
      color="brand.white"
      {...flexProps}
    >
      {children}
    </Flex>
  );
};
