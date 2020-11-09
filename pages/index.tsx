import {
  ChakraProvider,
  Stack,
  Heading,
  Flex,
  Text,
  Link,
  Box,
} from "@chakra-ui/core";
import { createIcon, ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { FaGithub, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import Head from "next/head";
import React, { useLayoutEffect, useRef, useState } from "react";

export const Divider = createIcon({
  displayName: "Divider",
  viewBox: "0 0 169 18",
  path: (
    <>
      <path
        fill="currentColor"
        d="M0,18C0,18,34.4-11.1,54.8,9s43.1-19.7,66.1-6S169,18,169,18L0,18z"
      />
    </>
  ),
});

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);
  const [innerHeight, setInnerHeigth] = useState(0);
  const scrollRef = useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.scrollTop);
    };
    scrollRef.current?.addEventListener("scroll", onScroll);
    setInnerHeigth(window.innerHeight);

    return () => scrollRef.current?.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  return (
    <>
      <Head>
        <link href="/font.css" rel="stylesheet" type="text/css" />
      </Head>
      <ChakraProvider resetCSS={true}>
        {scrollTop === 0 ? null : (
          <>
            <Box
              position="fixed"
              boxSize="25px"
              top="85vh"
              right="10px"
              zIndex="19"
              background={`rgba(0, 0, 0, ${
                Math.max(0, Math.min(1, scrollTop / (innerHeight / 2))) * 0.2
              })`}
              borderRadius="4px"
            />
            <Box
              position="fixed"
              boxSize="25px"
              top="85vh"
              right="10px"
              zIndex="20"
              style={{ mixBlendMode: "difference" }}
              display="grid"
              placeItems="center"
              cursor={scrollTop / (innerHeight / 2) < 2 ? "pointer" : "unset"}
            >
              <Link href="#top">
                <ArrowUpIcon
                  boxSize="25px"
                  color={`rgba(255, 255, 255, ${Math.max(
                    0,
                    Math.min(1, scrollTop / (innerHeight / 2))
                  )})`}
                  borderRadius="4px"
                />
              </Link>
            </Box>
          </>
        )}
        {scrollTop / (innerHeight / 2) >= 2 ? null : (
          <>
            <Box
              position="fixed"
              boxSize="25px"
              top="90vh"
              right="10px"
              zIndex="19"
              background={`rgba(0, 0, 0, ${
                Math.max(0, Math.min(1, 1 - scrollTop / (innerHeight / 2))) *
                0.2
              })`}
              borderRadius="4px"
            />
            <Box
              position="fixed"
              boxSize="25px"
              top="90vh"
              right="10px"
              zIndex="20"
              style={{ mixBlendMode: "difference" }}
              display="grid"
              placeItems="center"
            >
              <Link href="#wip">
                <ArrowDownIcon
                  boxSize="25px"
                  color={`rgba(255, 255, 255, ${Math.max(
                    0,
                    Math.min(1, 1 - scrollTop / (innerHeight / 2))
                  )})`}
                  borderRadius="4px"
                />
              </Link>
            </Box>
          </>
        )}
        <div
          style={{
            scrollSnapType: "y mandatory",
            height: "100vh",
            overflowY: "scroll",
            scrollBehavior: "smooth",
          }}
          ref={scrollRef}
        >
          <Stack
            id="top"
            height="100vh"
            background="linear-gradient(90deg, rgba(224, 48, 47, 1) 0%, rgba(50, 129, 221, 1) 100%)"
            minWidth="10%"
            alignItems="center"
            justifyContent="center"
            style={{ scrollSnapAlign: "start" }}
          >
            <Stack
              textAlign="center"
              alignItems="center"
              justifyContent="center"
            >
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
          <Stack
            id="wip"
            height="100vh"
            background="gray.200"
            minWidth="100%"
            alignItems="center"
            justifyContent="center"
            style={{ scrollSnapAlign: "start" }}
            position="relative"
          >
            <Box
              position="absolute"
              background="linear-gradient(90deg, rgba(224, 48, 47, 1) 0%, rgba(50, 129, 221, 1) 100%)"
              width="100%"
              height="10vh"
              top="0px"
            >
              <Divider
                position="relative"
                width="100%"
                preserveAspectRatio="none"
                height="10vh"
                color="gray.200"
                top="1px"
              />
            </Box>
            <Heading
              alignSelf="center"
              as="h1"
              size="2xl"
              width="fit-content"
              paddingX="0.5rem"
              background="linear-gradient(90deg, rgba(224, 48, 47, 1) 0%, rgba(50, 129, 221, 1) 100%)"
              borderRadius="5px"
              color="gray.200"
              textShadow="1px 3px 6px rgba(0, 0, 0, .1)"
              fontFamily="'Sansation Regular'"
            >
              Work in Progress
            </Heading>
          </Stack>
        </div>
      </ChakraProvider>
    </>
  );
}
