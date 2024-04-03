import {
  FlexProps,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Section } from "../components/Section";

export const Timing = ({ ...flexProps }: { flexProps?: FlexProps }) => {
  return (
    <Section flexProps={flexProps}>
      <Heading textAlign="center">Расписание дня:</Heading>
      <List spacing={2} maxW="650px" display="grid">
        <ListItem display="flex">
          <Grid gap={1}>
            <Heading size="md">14:00 - трансфер</Heading>
            <Text>
              Для вашего удобства будет организован трансфер до места
              празднования
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
              Ключевой момент наших жизней, который мы хотим разделить вместе с
              вами
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <Grid>
            <Heading size="md">18:00 - банкет</Heading>
            <Text>Праздничный ужин и развлекательная программа</Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <Grid>
            <Heading size="md">23:00 - трансфер</Heading>
            <Text>Будет организован транспорт до города</Text>
          </Grid>
        </ListItem>
      </List>
    </Section>
  );
};
