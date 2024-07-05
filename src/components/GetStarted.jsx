import { Box, Flex, Text } from '@chakra-ui/react';
import { arrowUp } from "../assets";

const GetStarted = () => (
  <Box
    className="w-[140px] h-[140px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] cursor-pointer"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Flex
      className="flex-col bg-primary rounded-full"
      w="100%"
      h="100%"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      p="20px"
      transition="box-shadow 0.3s"
      _hover={{
        boxShadow: "0 8px 16px rgba(38, 132, 255, 0.4)",
      }}
    >
      <Flex className="flex-row" justifyContent="flex-start" alignItems="center">
        <Text className="font-poppins font-medium text-lg leading-[23.4px] text-gradient">
          Get
        </Text>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain ml-1" />
      </Flex>
      
      <Text className="font-poppins font-medium text-lg leading-[23.4px] text-gradient">
        Started
      </Text>
    </Flex>
  </Box>
);

export default GetStarted;
