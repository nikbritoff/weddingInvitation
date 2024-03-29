import {
  Heading,
  Grid,
  Text,
  FlexProps,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import { YMaps, Map } from "@pbe/react-yandex-maps";

export const Place = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  console.log({ flexProps });
  return (
    <Section flexProps={flexProps}>
      <Heading>Место проведения</Heading>
      <Grid gridTemplateRows="auto 300px" w="100%" h="100%" gap={5}>
        <Flex flexDir="column" gap={3}>
          <Text fontWeight={700}>Эко-парк "Вереск"</Text>
          <Divider />
          <Text>
            Линтульская аллея, 39, посёлок Ильичёво, Первомайское сельское
            поселение, Выборгский район, Ленинградская область
          </Text>
        </Flex>
        <Flex w="100%" h="100%" borderRadius={6} overflow="hidden" zIndex={1}>
          <YMaps>
            <Map
              width="100%"
              height="100%"
              defaultState={{ center: [60.250414, 29.784326], zoom: 12 }}
            />
          </YMaps>
        </Flex>
      </Grid>
    </Section>
  );
};
