import { Box, Typography, Button, createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const CustomSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  backgroundColor: '#11101d',
  borderRadius: '20px',
  boxShadow: '0px 20px 100px -10px rgba(66, 71, 91, 0.1)',
  color: '#fff',
  textAlign: 'center',
});

const Heading2 = styled(Typography)({
  fontSize: '2.5rem', 
  fontWeight: 'bold', 
  marginBottom: '1rem', 
});

const Paragraph = styled(Typography)({
  maxWidth: '470px', 
  marginTop: '1rem',
});

const GradientButton = styled(Button)({
  background: 'linear-gradient(45deg, #7928CA 30%, #0B72FF 90%)', 
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  marginTop: '1rem', 
  transition: 'box-shadow 0.3s ease', 
  '&:hover': {
    boxShadow: '0 8px 16px rgba(38, 132, 255, 0.4)', 
  },
});

const CTA = () => (
  <ThemeProvider theme={theme}>
    <CustomSection>
      <Box mb={5}>
        <Heading2 variant="h2" gutterBottom>
          Let’s try a quiz now!
        </Heading2>
        <Paragraph variant="body1">
          Unlock a world of knowledge — anytime and anywhere.
        </Paragraph>
      </Box>

      <GradientButton variant="contained">
        Start Quiz
      </GradientButton>
    </CustomSection>
  </ThemeProvider>
);

export default CTA;
