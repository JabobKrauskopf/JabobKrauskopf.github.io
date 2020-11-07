import {
  ChakraProvider,
  Stack,
  Heading,
  Flex,
  Text,
  Link,
} from "@chakra-ui/core";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link href="/font.css" rel="stylesheet" type="text/css" />
      </Head>
      <ChakraProvider resetCSS={true}>
        <Stack
          minHeight="100vh"
          background="linear-gradient(95deg, rgba(224, 48, 47, 1) 0%, rgba(50, 129, 221, 1) 100%)"
          minWidth="100vw"
          alignItems="center"
          justifyContent="center"
        >
          <Stack textAlign="center" alignItems="center" justifyContent="center">
            <Heading
              alignSelf="center"
              as="h1"
              size="2xl"
              width="fit-content"
              paddingX="0.5rem"
              color="white"
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="'Sansation Regular'"
            >
              Jakob Kraus
            </Heading>
            <Text
              color="white"
              maxW="6xl"
              fontSize="1.2em"
              paddingY="1rem"
              fontFamily="'Sansation Regular'"
            >
              Full Stack Engineer, Data Scientist, Meme Supervisor and Head of
              Computer Resources @{" "}
              <Link href="https://www.limebit.de" isExternal>
                Limebit GmbH
              </Link>
            </Text>
            <Flex justifyContent="center" color="white">
              <Stack paddingX="1rem">
                <Link href="https://github.com/JabobKrauskopf" isExternal>
                  <FaGithub size="32px" />
                </Link>
              </Stack>
              <Link
                href="https://www.linkedin.com/in/jakob-kraus-3a7b64189/"
                isExternal
                paddingX="1rem"
              >
                <FaLinkedin size="32px" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCm0n0k-ePERD0KsBBBw8TpA"
                isExternal
                paddingX="1rem"
              >
                <FaYoutube size="32px" />
              </Link>
              <Link
                href="https://twitter.com/JabobKrauskopf"
                isExternal
                paddingX="1rem"
              >
                <FaTwitter size="32px" />
              </Link>
            </Flex>
          </Stack>
        </Stack>
      </ChakraProvider>
    </div>
  );
}
