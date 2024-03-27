import {
  FlexProps,
  Grid,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import { MdCheckCircle } from "react-icons/md";

export const Timing = ({ ...flexProps }: { flexProps?: FlexProps }) => {
  return (
    <Section flexProps={flexProps}>
      <Heading>10 августа 2024</Heading>
      <List spacing={3} maxW="650px" gap={5} display="grid">
        <ListItem display="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Grid gap={3}>
            <Heading size="md">15:00 - сбор гостей</Heading>
            <Text>
              Краткое описание Краткое описание Краткое описание Краткое
              описание Краткое описание
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Grid gap={3}>
            <Heading size="md">16:00 - церемония</Heading>
            <Text>
              Краткое описание Краткое описание Краткое описание Краткое
              описание Краткое описание
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Grid gap={3}>
            <Heading size="md">18:00 - банкет</Heading>
            <Text>
              Краткое описание Краткое описание Краткое описание Краткое
              описание Краткое описание
            </Text>
          </Grid>
        </ListItem>
      </List>
    </Section>
  );
};
