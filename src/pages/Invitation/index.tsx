import { Flex, Heading, Image } from "@chakra-ui/react";

import WeddingPhoto from "~/assets/wedding.jpg";
import { SECTIONS_CONFIG } from "~/shared/layout/const.layout";

export const Component = () => {
  return (
    <Flex bg="brand.green100" justifyContent="center" w="100%">
      <Flex
        maxWidth="450px"
        flexDir="column"
        gap={20}
        pb={20}
        pt={20}
        bg="brand.green100"
        color="brand.white"
      >
        <Flex
          flexDirection="column"
          gap={3}
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="xl" textAlign="center" color="brand.white">
            Приглашение на свадьбу
          </Heading>
          <Heading size="xl" textAlign="center" color="brand.white">
            Никита и Олеся
          </Heading>
          <Heading size="xl" textAlign="center" color="brand.white">
            10 августа 2024
          </Heading>
        </Flex>

        <Flex px={5} w="100%">
          <Image
            src={WeddingPhoto}
            height="300px"
            objectFit="cover"
            filter="grayscale(1)"
            w={"100%"}
            borderRadius={6}
          />
        </Flex>

        {/* <Flex
        bgImg={WeddingPhoto}
        filter="grayscale(1)"
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
        <Heading size="xl" textAlign="center" color="brand.white">
          Приглашение на свадьбу
        </Heading>
        <Heading size="xl" textAlign="center" color="brand.white">
          Никита и Олеся
        </Heading>
        <Heading size="xl" textAlign="center" color="brand.white">
          10 августа 2024
        </Heading>
      </Flex> */}

        {SECTIONS_CONFIG.map(({ Section, id }) => (
          <Section id={id} key={id} />
        ))}
      </Flex>
    </Flex>
  );
};

Component.displayName = "InvitationRoute";
