import { Heading, Text, FlexProps, Flex } from "@chakra-ui/react";
import { Section } from "../components/Section";

const BLOCK_CONFIG = [
  {
    question: "Брать ли с собой детей?",
    answer:
      "Стоит учесть, что программа мероприятия расчитана на взрослую аудиторию  - детям будет непросто выдержать такой сложный и насыщенный день. Отдельной программы для детей не предусмотрено.",
  },
  {
    question: "Дарить ли цветы?",
    answer:
      "Цветы - прекрасный и популярный подарок, но будет лучше, если вы подарите вместо цветов корм для животных, который мы передадим в приют. Спасибо.",
  },
  {
    question: "Есть ли у нас пожелания относительно подарков?",
    answer:
      "Мы ценим комфорт гостей и легкость в жизни, поэтому вместо тяжёлых подарков мы с радостью примем подарки в конвертах.",
  },
];

export const Info = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  return (
    <Section flexProps={flexProps}>
      <Heading size="lg" textAlign="center">
        Важная информация
      </Heading>

      {BLOCK_CONFIG.map(({ question, answer }) => (
        <Flex key={question} flexDirection="column" gap={1}>
          <Text fontWeight={700}>{question}</Text>
          <Text>{answer}</Text>
        </Flex>
      ))}
    </Section>
  );
};
