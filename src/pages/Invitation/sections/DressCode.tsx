import {
  Box,
  CloseButton,
  Flex,
  FlexProps,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Section } from "../components/Section";
import man01 from "~/assets/man01.jpg";
import man02 from "~/assets/man02.jpg";
import man03 from "~/assets/man03.jpg";
import woman01 from "~/assets/woman01.jpg";
import woman02 from "~/assets/woman02.jpg";
import woman03 from "~/assets/woman03.jpg";
import { useState } from "react";

const COLORS = [
  "#6a6e59",
  "#939681",
  "#e8d5ca",
  "#c1ab9c",
  "#a47d60",
  "#713b22",
];
const IMAGES = [man01, man02, man03, woman01, woman02, woman03];

export const DressCode = ({ ...flexProps }: { flexProps?: FlexProps }) => {
  const [currentPhoto, setCurrentPhoto] = useState<string | null>(null);
  const [currentColor, setCurrentColor] = useState<string | null>(null);

  const onClose = () => {
    setCurrentPhoto(null);
    setCurrentColor(null);
  };

  return (
    <Section flexProps={flexProps}>
      <Heading>Дресс код</Heading>
      <Flex direction="column" gap={3}>
        <Text>
          Дорогие гости! Для нашей свадьбы мы выбрали экостиль, где ценится
          природа и ее красота. Мы будем рады, если Вы поддержите нас, выбрав
          одежду одежду в натуральных оттенках: зеленый, коричневый, бежевый.
        </Text>
        <Text>
          Пожалуйста, помните, что Ваш образ поможет создать уютную и
          гармоничную атмосферу нашего праздника. Спасибо за Ваше понимание и
          поддержку!
        </Text>
        <Grid gap={2} gridTemplateColumns="repeat(3, 1fr)">
          {IMAGES.map((image, index) => (
            <Image
              key={index}
              src={image}
              w="120px"
              h="120px"
              objectFit="cover"
              borderRadius={6}
              onClick={() => setCurrentPhoto(image)}
            />
          ))}
        </Grid>
        <Flex
          bg="brand.gray200"
          p={2}
          justifyContent="center"
          borderRadius={6}
          gap={3}
        >
          {COLORS.map((color) => (
            <Box
              w="40px"
              h="40px"
              borderRadius="50%"
              bg={color}
              onClick={() => setCurrentColor(color)}
            />
          ))}
        </Flex>
      </Flex>
      <Modal
        isOpen={Boolean(currentPhoto || currentColor)}
        onClose={onClose}
        isCentered
        closeOnEsc
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={currentPhoto ? 0 : undefined} position="relative">
            <CloseButton
              onClick={onClose}
              position="absolute"
              top={2}
              right={2}
            />
            {currentPhoto && (
              <Flex>
                <Image src={currentPhoto} borderRadius={6} />
              </Flex>
            )}

            {currentColor && (
              <Flex justifyContent="center" alignItems="center">
                <Box w="80vw" h="80vw" borderRadius="50%" bg={currentColor} />
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Section>
  );
};
