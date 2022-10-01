import React from "react";
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import birthday from "../assets/Birthday cake.png";
import arrow from "../assets/arrow.svg";
import location from "../assets/location.svg";
import calendar from "../assets/calendar.svg";
const EventComp = () => {
  return (
    <Box height="100vh" bg="#FBFAFF">
      <Flex
        flexDir={{
          base: "column",
          md: "column",
          lg: "row-reverse",
        }}
        justifyContent="space-evenly"
        alignItems="center"
        pt="2rem"
        // p={["0.1rem 0.5rem", "0.3rem 0.9rem", "1rem 1rem", "1rem 1rem"]}
      >
        <Box w={{ base: "45%", md: "45%", lg: "28%" }}>
          <Image src={birthday} alt="landing picture" w="100%" />
        </Box>

        <Box p={{ base: "1rem", md: "1rem", lg: "0rem" }}>
          <Text
            color="theme.100"
            fontWeight={700}
            fontSize={{ base: "2rem", md: "2rem", lg: "3.5rem" }}
            lineHeight={{ base: "35px", md: "35px", lg: "64px" }}
          >
            Birthday Bash
          </Text>
          <Text
            color="theme.800"
            // mt="1rem"
            fontSize={{ base: "0.8rem", md: "1rem", lg: "1.3rem" }}
            fontWeight={400}
          >
            Hosted by Elysia
          </Text>
          <Box mt="2rem">
            <Flex>
              <Image src={calendar} width="14%" alt="" />
              <Flex justifyContent="space-between" ml="1rem">
                <Box>
                  <Text color="theme.100" fontSize="0.8rem" fontWeight={600}>
                    18 August 6:00pm
                  </Text>
                  <Text color="theme.800" fontSize="0.8rem" fontWeight={600}>
                    to 19 August 1:00PM UTC
                  </Text>
                </Box>
                <Image src={arrow} width="7%" alt="" ml="2rem" />
              </Flex>
            </Flex>
            <Flex mt="2rem">
              <Image src={location} width="14%" alt="" />
              <Flex justifyContent="space-between" ml="1rem">
                <Box>
                  <Text color="theme.100" fontSize="0.8rem" fontWeight={600}>
                    18 August 6:00pm
                  </Text>
                  <Text color="theme.800" fontSize="0.8rem" fontWeight={600}>
                    to 19 August 1:00PM UTC
                  </Text>
                </Box>
                <Image src={arrow} width="7%" alt="" ml="2rem" />
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default EventComp;
