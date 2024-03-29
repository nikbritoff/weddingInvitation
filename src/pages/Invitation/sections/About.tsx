import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Grid,
  Text,
  FlexProps,
  Flex,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Section } from "../components/Section";

const TimingSections = [
  {
    time: "14:00 - трансфер",
    description:
      "Краткое описание Краткое описание Краткое описание Краткое описание Краткое описание",
  },
];

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
        <Text as="span" fontWeight={700} color="brand.green100">
          10.08.2024
        </Text>{" "}
        состоится самое главное торжество в нашей жизни - день нашей свадьбы!
        Приглашаем Вас разделить с нами радость этого незабываемого дня.
      </Text>
    </Section>
  );
};
