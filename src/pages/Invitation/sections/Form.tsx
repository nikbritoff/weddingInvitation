import {
  Heading,
  FlexProps,
  Input,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Checkbox,
  Flex,
  Textarea,
} from "@chakra-ui/react";
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
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Section flexProps={{ ...flexProps, width: "100%", maxW: "100%" }}>
          <Heading>Анкета гостя</Heading>

          <Flex flexDirection="column" w="100%" gap={3}>
            <FormControl label="Ваше имя:" isPadding={false}>
              <Input {...methods.register("name")} />
            </FormControl>

            <FormControl
              label="Сможете ли Вы присутствовать?"
              isPadding={false}
            >
              <Controller
                name="visit"
                control={methods.control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value}>
                    <Stack direction="row" gap={3}>
                      <Radio value="Да">Да</Radio>
                      <Radio value="Нет">Нет</Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
            </FormControl>

            <FormControl label="Потребуется ли Вам трансфер?" isPadding={false}>
              <Controller
                name="transfer"
                control={methods.control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value}>
                    <Stack direction="column" gap={0}>
                      {TRANSFER_OPTIONS.map((option) => (
                        <Radio value={option}>{option}</Radio>
                      ))}
                    </Stack>
                  </RadioGroup>
                )}
              />
            </FormControl>

            <FormControl
              label="Ваши предпочтения по алкоголю?"
              isPadding={false}
            >
              <Stack direction="column" gap={0}>
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

            <FormControl label="Ваши предпочтения в еде?" isPadding={false}>
              <Stack direction="column" gap={0}>
                {FOOD_OPTIONS.map((type) => (
                  <Checkbox {...methods.register("food")} value={type}>
                    {type}
                  </Checkbox>
                ))}
              </Stack>
            </FormControl>

            <FormControl label="Что нам ещё следует знать?" isPadding={false}>
              <Textarea {...methods.register("additional")} variant="primary" />
            </FormControl>

            <Button w="100%" type="submit" mt={3}>
              Отправить
            </Button>
          </Flex>
        </Section>
      </form>
    </FormProvider>
  );
};
