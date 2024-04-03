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
  useToast,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormControl } from "~/shared/ui/components/FormControl";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
  const toast = useToast();
  const [isSending, setIsSending] = useState(false);

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
    if (isSending) {
      return;
    }
    setIsSending(true);

    emailjs
      .send("service_iiyc8ob", "template_h5ky2v5", data, {
        publicKey: "WR6E8DXdd6T-nncz9",
      })
      .then((resp) => {
        toast({
          status: "success",
          title: "Сообщение отправлено",
          duration: 5000,
          isClosable: true,
        });
        methods.reset();
        setIsSending(false);
      })
      .catch((resp) => {
        setIsSending(false);
        toast({
          status: "error",
          title: "Ошибка отправки. Попробуйте позже",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} id="formId">
        <Section flexProps={{ ...flexProps, width: "100%", maxW: "100%" }}>
          <Heading>Анкета гостя</Heading>

          <Flex flexDirection="column" w="100%" gap={3}>
            <FormControl label="Ваше имя:" isPadding={false} isRequired>
              <Input
                {...methods.register("name")}
                colorScheme="white"
                _hover={{
                  borderColor: "brand.beige200",
                  boxShadow:
                    "0px 0px 0px 1px var(--chakra-colors-brand-beige100)",
                }}
              />
            </FormControl>

            <FormControl
              label="Сможете ли Вы присутствовать?"
              isPadding={false}
              isRequired
            >
              <Controller
                name="visit"
                control={methods.control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value}>
                    <Stack direction="row" gap={3}>
                      <Radio value="Да" colorScheme="white">
                        Да
                      </Radio>
                      <Radio value="Нет" colorScheme="white">
                        Нет
                      </Radio>
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
                        <Radio value={option} colorScheme="white">
                          {option}
                        </Radio>
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
                  <Checkbox
                    {...methods.register("food")}
                    value={type}
                    colorScheme="white"
                  >
                    {type}
                  </Checkbox>
                ))}
              </Stack>
            </FormControl>

            <FormControl label="Что нам ещё следует знать?" isPadding={false}>
              <Textarea
                {...methods.register("additional")}
                _hover={{
                  borderColor: "brand.beige200",
                  boxShadow:
                    "0px 0px 0px 1px var(--chakra-colors-brand-beige100)",
                }}
                colorScheme="white"
              />
            </FormControl>

            <Button w="100%" type="submit" mt={3} isLoading={isSending}>
              Отправить
            </Button>
          </Flex>
        </Section>
      </form>
    </FormProvider>
  );
};
