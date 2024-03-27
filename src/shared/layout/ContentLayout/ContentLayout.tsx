import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import { CSSProperties } from "react";

export const ContentLayout = ({
  children,
  actionButton,
  height,
}: {
  children?: React.ReactNode;
  actionButton?: React.ReactNode;
  height?: CSSProperties["height"];
}) => (
  <Grid
    gridTemplateColumns="55% 22%"
    gap="20px"
    h={height}
    justifyContent="space-between"
    overflow="hidden"
  >
    <GridItem h={height} overflow="hidden">
      <Box h={height}>{children}</Box>
    </GridItem>

    <GridItem>
      <Flex justifyContent="flex-end">{actionButton}</Flex>
    </GridItem>
  </Grid>
);
