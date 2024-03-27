import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Grid,
  Text,
  FlexProps,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Section } from "../components/Section";

export const About = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  return (
    <Section flexProps={flexProps}>
      <Grid gap={5} justifyItems="center">
        <Heading>Дорогой гость!</Heading>
        <Text textIndent="20px" textAlign="justify">
          Мы рады сообщить Вам, что 10.08.2024 состоится самое главное торжество
          в нашей жизни - день нашей свадьбы! Приглашаем Вас разделить с нами
          радость этого незабываемого дня.
        </Text>
      </Grid>

      <Grid gap={5} justifyItems="center">
        <Heading>Расписание дня:</Heading>
        <List spacing={3} maxW="650px" gap={2} display="grid">
          <ListItem display="flex">
            <ListIcon as={MdCheckCircle} color="green.500" />
            <Grid gap={3}>
              <Heading size="md">14:00 - трансфер</Heading>
              <Text>
                Краткое описание Краткое описание Краткое описание Краткое
                описание Краткое описание
              </Text>
            </Grid>
          </ListItem>

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

          <ListItem display="flex">
            <ListIcon as={MdCheckCircle} color="green.500" />
            <Grid gap={3}>
              <Heading size="md">23:00 - трансфер</Heading>
              <Text>
                Краткое описание Краткое описание Краткое описание Краткое
                описание Краткое описание
              </Text>
            </Grid>
          </ListItem>
        </List>
      </Grid>
      {/* <List spacing={3} maxW="650px" gap={5} display="grid">
        <ListItem display="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Grid gap={3}>
            <Heading size="md">Место проведения</Heading>
            <Text>
              Ресторан Forest Symphony находится на севере Санкт-Петербурга,
              Ленинградская область, 30 км Новоприозерского шоссе. У ресторана
              имеется большая парковка 🚗 А для тех, кто предусмотрительно решит
              оставить машины дома, будет организован трансфер от станции метро
              Парнас в 14.00 ⏰
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Grid gap={3}>
            <Heading size="md">Программа</Heading>
            <Text>
              Мы очень ценим вашу любовь, заботу и внимание, поэтому нам бы
              хотелось, чтобы в этот день сердца были легкими, души открытыми,
              настроение праздничным☀️ Хотелось бы отметить, что программа
              праздника рассчитана на взрослую категорию гостей, поэтому,
              возможно, что детишкам на свадьбе будет скучно и неуютно.
            </Text>
          </Grid>
        </ListItem>

        <ListItem display="flex">
          <ListIcon as={MdCheckCircle} color="green.500" />
          <Grid gap={3}>
            <Heading size="md">Подарочки</Heading>
            <Text>
              Тех, кто измучил себя вопросами из серии "что подарить?", просим
              не обременять себя выбором, а предоставить это замечательное право
              нам, уменьшив габариты своего подарка до размера почтового
              конверта💸 У нас есть еще одно маленькое пожелание. Давайте вместе
              изменим один обычай и чем-нибудь заменим традиционные букеты!
              Например, бутылочкой вина🍷 А уж с ней-то мы с вами обязательно
              разберемся 😏
            </Text>
          </Grid>
        </ListItem>
      </List> */}
    </Section>
  );
};
