import {
  Heading,
  Grid,
  Text,
  FlexProps,
  Flex,
  Divider,
  Link,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Place = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  return (
    <Section flexProps={flexProps}>
      <Heading>Место проведения</Heading>
      <Grid gridTemplateRows="auto 300px" w="100%" h="100%" gap={2}>
        <Flex flexDir="column" gap={2}>
          <Heading fontWeight={700} size="md">Эко-парк "Вереск"</Heading>
          <Divider />
          <Text>
            Линтульская аллея, 39, посёлок Ильичёво, Первомайское сельское
            поселение, Выборгский район, Ленинградская область
          </Text>
          <Divider />
          <Stack direction="row">
            <Button
              as={Link}
              href="https://yandex.ru/maps/-/CDROAIJ0"
              target="blank"
            >
              Яндекс-карты
            </Button>
            <Button as={Link} href="https://go.2gis.com/1yyry6">
              2gis
            </Button>
          </Stack>
        </Flex>
        <Flex w="100%" h="100%" borderRadius={6} overflow="hidden">
          <YMaps>
            <Map
              width="100%"
              height="100%"
              defaultState={{ center: [60.250414, 29.784326], zoom: 12 }}
            >
              <Placemark geometry={[60.250414, 29.784326]} options={{}} />
            </Map>
          </YMaps>
        </Flex>
      </Grid>
    </Section>
  );
};
