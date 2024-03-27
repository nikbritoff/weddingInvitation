import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Grid,
  Text,
  FlexProps,
  Input,
  Button,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Section } from "../components/Section";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormControl } from "~/shared/ui/components/FormControl";

export const Form = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  const methods = useForm({
    defaultValues: {
      name: "",
      gender: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Section flexProps={{ ...flexProps, color: "black" }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Heading>Анкета гостя</Heading>
          <FormControl label="Ваше имя">
            <Input {...methods.register("name")} placeholder="Иванов Иван" />
          </FormControl>

          <FormControl label="Потребуется ли Вам трансфер?">
            <Controller
              name="transport"
              control={methods.control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="column">
                    <Radio value="Нет">Нет</Radio>
                    <Radio value="До">Только ДО торжества</Radio>
                    <Radio value="После">Только ПОСЛЕ торжества</Radio>
                    <Radio value="Оба">До и после торжества</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>

          <FormControl label="Есть ли у вас особые предпочтения по еде?">
            <Controller
              name="food"
              control={methods.control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="column">
                    <Radio value="Нет">Нет</Radio>
                    <Radio value="Не ест мясо">Не ем мясо</Radio>
                    <Radio value="Не ест рыбу">Не ем рыбу</Radio>
                    <Radio value="Вегетарианец">Вегетарианец</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>

          <FormControl label="Какой алкоголь предпочитаете?">
            <Controller
              name="radio"
              control={methods.control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="column">
                    <Radio value="Нет">Нет</Radio>
                    <Radio value="Красное вино">Красное вино</Radio>
                    <Radio value="Белое вино">Белое вино</Radio>
                    <Radio value="Шампанское">Шампанское</Radio>
                    <Radio value="Виски/коньяк">Виски/коньяк</Radio>
                    <Radio value="Водка">Водка</Radio>
                    <Radio value="Не буду пить алкоголь">
                      Не буду пить алкоголь
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>

          <FormControl label="Будет ли с вами ребенок?">
            <Controller
              name="children"
              control={methods.control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="column">
                    <Radio value="Да">Да</Radio>
                    <Radio value="Нет">Нет</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>

          <Button type="submit">Отправить</Button>
        </form>
      </FormProvider>
    </Section>
  );
};
