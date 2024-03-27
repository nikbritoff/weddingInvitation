import { Flex, Heading } from "@chakra-ui/react";

import WeddingPhoto from "~/assets/wedding.jpg";
import { SECTIONS_CONFIG } from "~/shared/layout/const.layout";

export const Component = () => {
  return (
    <Flex flexDir="column" w="100%">
      <Flex
        bgImg={WeddingPhoto}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        h="100vh"
        w="100%"
        p={5}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={5}
        color="brand.white"
        id="main"
      >
        <Heading size="xl" textAlign="center">Приглашение на свадьбу</Heading>
        <Heading size="xl" textAlign="center">Никита и Олеся</Heading>
        <Heading size="xl" textAlign="center">10 августа 2024</Heading>
      </Flex>

      {SECTIONS_CONFIG.map(({ Section, id }, index) => (
        <Section
          id={id}
          bg={index % 2 === 0 ? "#6a6e59" : "#c1ab9c"}
          key={id}
        />
      ))}
    </Flex>
  );
};

Component.displayName = "InvitationRoute";
