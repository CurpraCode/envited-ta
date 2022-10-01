import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import uploadbg from "../assets/uploadbg.png";
// import { Link } from "react-router-dom";

const CreateComp = () => {
  const [formData, setFormdata] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleForm = (data) => {
    setFormdata(data);
    reset();
  };
  console.log(formData);
  window.localStorage.setItem("formdata", JSON.stringify(formData));
  return (
    <Box
      height="100vh"
      bg="linear-gradient(0deg, #F6F2FF, #F6F2FF), #FBFAFF"
      pt="5rem"
      p={["0.1rem 0.5rem", "0.3rem 0.9rem", "1rem 1rem", "1rem 1rem"]}
    >
      <Text
        color="theme.100"
        textAlign="center"
        fontWeight={600}
        fontSize="2.5rem"
        mb="2rem"
      >
        Create your event
      </Text>
      <Box as="form" onSubmit={handleSubmit(handleForm)}>
        <Flex
          flexDir={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Box>
            <FormControl isRequired mt="0.7rem">
              <FormLabel>Event Name</FormLabel>
              <Input
                placeholder="Event Name"
                type="text"
                {...register("eventName", { required: true })}
              />
            </FormControl>
            <FormControl isRequired mt="0.7rem">
              <FormLabel>Host Name</FormLabel>
              <Input
                type="text"
                {...register("hostName", { required: true })}
              />
            </FormControl>
            <FormControl isRequired mt="0.7rem">
              <FormLabel>Start Date</FormLabel>
              <Input
                type="date"
                {...register("startDate", { required: true })}
              />
            </FormControl>
            <FormControl isRequired mt="0.7rem">
              <FormLabel>End Date</FormLabel>
              <Input
                width="100%"
                type="date"
                {...register("endDate", { required: true })}
              />
            </FormControl>
            <FormControl isRequired mt="0.7rem">
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="Location"
                type="text"
                {...register("location", { required: true })}
              />
            </FormControl>
          </Box>
          <Box w={{ base: "45%", md: "35%", lg: "28%" }}>
            <Image src={uploadbg} alt="upload viewer" />
          </Box>
        </Flex>
        <Box textAlign="center" mt="2rem">
          <Button
            bg="linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)"
            color="#ffffff"
            _hover={{
              bg: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            }}
            _focus={{
              bg: "linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)",
            }}
            width={{ base: "40%", md: "40%", lg: "30%" }}
            type="submit"
          >
            🎉 Create my event
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateComp;
