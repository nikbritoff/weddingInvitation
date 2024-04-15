import { Heading, Text, FlexProps, Avatar, Link, Flex } from "@chakra-ui/react";
import { Section } from "../components/Section";
import org01Photo from "~/assets/org01.png";
import { FaTelegram } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

export const Contacts = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  return (
    <Section flexProps={flexProps} withBorder>
      <Avatar src={org01Photo} size="2xl" />
      <Flex flexDirection="column" w="100%" gap={3} alignItems="center">
        <Heading fontWeight={700} size="md">
          Кристина Петрова
        </Heading>
        <Flex flexDirection="column" w="100%" gap={2} alignItems="center">
          <Link href="tel:+79210993717">
            <Flex alignItems="center" gap={3}>
              <FaSquarePhone />
              <Text>+7 (921) 099-37-17</Text>
            </Flex>
          </Link>
          <Link href="https://t.me/kris_petrova">
            <Flex alignItems="center" gap={3}>
              <FaTelegram />
              <Text>@kris_petrova</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
      {/* <Heading size="lg" textAlign="center">
        Дорогой гость!
      </Heading>
      <Text lineHeight={1.2}>
        Мы рады сообщить Вам, что{" "}
        <Text as="span" fontWeight={700} color="brand.beige100">
          10.08.2024
        </Text>{" "}
        состоится самое главное торжество в нашей жизни - день нашей свадьбы!<br />
        Приглашаем Вас разделить с нами радость этого незабываемого дня.
      </Text> */}
    </Section>
  );
};
