import { Box, Button, Container, Typography } from '@mui/material';
import MainMenu from './components/MainMenu';

const HomePage = () => {
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box>
        <MainMenu />
      </Box>
    </Container>
  );
};

export default HomePage;
