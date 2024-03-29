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
  Checkbox,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Section } from "../components/Section";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormControl } from "~/shared/ui/components/FormControl";

const ALCO_OPTIONS = [
  "Красное вино (сухое)",
  "Красное вино (полусладкое)",
  "Белое вино (сухое)",
  "Белое вино (полусладкое)",
  "Вино игристое",
  "Мартини",
  "Виски",
  "Водка",
  "Коньяк",
  "Ром",
  "Джин",
];

const TRANSFER_OPTIONS = [
  "Нет",
  "Да, туда и обратно",
  "Да, только туда",
  "Да, только обратно",
];

const FOOD_OPTIONS = ["Ем всё", "Не ем мясо", "Не ем рыбу", "Вегетарианец"];

export const Form = ({
  ...flexProps
}: {
  flexProps?: FlexProps & { id: string };
}) => {
  const methods = useForm({
    defaultValues: {
      name: "",
      visit: "Да",
      transfer: "Нет",
      alco: [],
      food: [],
      additional: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Section flexProps={{ ...flexProps }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Heading>Анкета гостя</Heading>
          <FormControl label="Ваше имя:">
            <Input {...methods.register("name")} placeholder="Введите имя" />
          </FormControl>

          <FormControl label="Сможете ли Вы присутствовать?">
            <Controller
              name="visit"
              control={methods.control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="row" gap={6}>
                    <Radio colorScheme="white" value="Да">
                      Да
                    </Radio>
                    <Radio colorScheme="white" value="Нет">
                      Нет
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>

          <FormControl label="Потребуется ли Вам трансфер?">
            <Controller
              name="transfer"
              control={methods.control}
              render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value}>
                  <Stack direction="column">
                    {TRANSFER_OPTIONS.map((option) => (
                      <Radio colorScheme="white" value={option}>
                        {option}
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              )}
            />
          </FormControl>

          <FormControl label="Ваши предпочтения по алкоголю?">
            <Stack direction="column">
              {ALCO_OPTIONS.map((type) => (
                <Checkbox
                  {...methods.register("alco")}
                  colorScheme="white"
                  value={type}
                >
                  {type}
                </Checkbox>
              ))}
            </Stack>
          </FormControl>

          <FormControl label="Ваши предпочтения в еде?">
            <Stack direction="column">
              {FOOD_OPTIONS.map((type) => (
                <Checkbox
                  {...methods.register("food")}
                  colorScheme="white"
                  value={type}
                >
                  {type}
                </Checkbox>
              ))}
            </Stack>
          </FormControl>

          <FormControl label="Что нам ещё следует знать?">
            <Input
              {...methods.register("additional")}
              placeholder="Дополнительная информация"
            />
          </FormControl>

          <Button w="100%" type="submit">
            Отправить
          </Button>
        </form>
      </FormProvider>
    </Section>
  );
};
