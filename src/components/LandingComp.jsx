import React from "react";
import { Box, Image, Flex, Text, Button } from "@chakra-ui/react";
import homecard from "../assets/homecard.svg";
import { Link } from "react-router-dom";
// import Reac

const LandingComp = () => {
  return (
    <Box height="100vh" bg="linear-gradient(0deg, #F6F2FF, #F6F2FF), #FBFAFF">
      <Flex
        flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        pt="2rem"
        p={["0.1rem 0.5rem", "0.3rem 0.9rem", "1rem 1rem", "1rem 1rem"]}
      >
        <Box w={{ base: "45%", md: "35%", lg: "28%" }}>
          <Image src={homecard} alt="landing picture" w="100%" />
        </Box>

        <Box p={{ base: "1rem", md: "1rem", lg: "0rem" }}>
          <Text
            textAlign={{ base: "center", md: "center", lg: "right" }}
            fontWeight={700}
            fontSize={{ base: "2rem", md: "2rem", lg: "3.5rem" }}
            lineHeight={{ base: "35px", md: "35px", lg: "64px" }}
          >
            <Text color="theme.100">Imagine if</Text>
            <Text
              as="span"
              bg="linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)"
              backgroundClip="text"
              textFillColor="transparent"
            >
              Snapchat
            </Text>
            <Text color="theme.100">had events.</Text>
          </Text>
          <Text
            textAlign={{ base: "center", md: "center", lg: "right" }}
            color="theme.800"
            mt="1rem"
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}
            fontWeight={400}
          >
            Easily host and share events with your friends <br /> across any
            social media.
          </Text>
          <Box
            display={{ base: "none", md: "none", lg: "block" }}
            textAlign="right"
            mt="2rem"
          >
            <Link to="/create">
              <Button
                bg="linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)"
                color="#ffffff"
                _hover={{
                  bg: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
                }}
                _focus={{
                  bg: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
                }}
              >
                🎉 Create my event
              </Button>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Box
        display={{ base: "block", md: "block", lg: "none" }}
        textAlign="center"
      >
        <Link to="/create">
          <Button
            bg="linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)"
            color="#ffffff"
            _hover={{
              bg: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            }}
            _focus={{
              bg: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            }}
          >
            🎉 Create my event
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LandingComp;
