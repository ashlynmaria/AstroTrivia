
import { Button } from '@chakra-ui/react';

const CustomButton = ({ styles }) => (
  <Button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-lg text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg outline-none ${styles}`}
    _hover={{
      boxShadow: '0 8px 16px rgba(38, 132, 255, 0.4)', 
    }}
  >
    Start a Quiz
  </Button>
);

export default CustomButton;