import { Heading, Text, FlexProps } from "@chakra-ui/react";
import { Section } from "../components/Section";

export const About = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  return (
    <Section flexProps={flexProps}>
      <Heading size="lg" textAlign="center">
        Дорогой гость!
      </Heading>
      <Text lineHeight={1.2}>
        Мы рады сообщить Вам, что{" "}
        <Text as="span" fontWeight={700} color="brand.beige100">
          10.08.2024
        </Text>{" "}
        состоится самое главное торжество в нашей жизни - день нашей свадьбы!
        Приглашаем Вас разделить с нами радость этого незабываемого дня.
      </Text>
    </Section>
  );
};
