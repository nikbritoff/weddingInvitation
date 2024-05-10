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
    <Flex flexDirection="column" px={5} gap={6} {...flexProps}>
      <Heading size="lg" textAlign="center">
        Контакты
      </Heading>
      <Flex flexDirection="column" gap={3}>
      <Text>
        Если у Вас возникают вопросы о мероприятии, времени, трансфере и месте проведения, Вы всегда можете обратиться за помощью к нашему организатору.
      </Text>
      <Section flexProps={{ px: 0}} withBorder>
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
      </Section>
      </Flex>
    </Flex>
  );
};
