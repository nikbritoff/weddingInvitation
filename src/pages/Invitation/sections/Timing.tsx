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
      <Heading textAlign="center">Расписание дня:</Heading>
      <List spacing={2} maxW="650px" display="grid">
        <ListItem display="flex">
          <Grid gap={1}>
            <Heading size="md">14:00 - трансфер</Heading>
            <Text>
              Траспорт отправиться из 2 точек. Подробности можно узнать у
              организаторов
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <Grid>
            <Heading size="md">15:00 - сбор гостей</Heading>
            <Text>Время для встреч и знакомства</Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <Grid>
            <Heading size="md">16:00 - церемония</Heading>
            <Text>
              Краткое описание Краткое описание Краткое описание Краткое
              описание Краткое описание
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <Grid>
            <Heading size="md">18:00 - банкет</Heading>
            <Text>
              Краткое описание Краткое описание Краткое описание Краткое
              описание Краткое описание
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <Grid>
            <Heading size="md">23:00 - трансфер</Heading>
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
