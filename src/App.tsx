import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { HomePage } from '@/pages/HomePage';
import AppBottomNavigation from '@/components/appBottomNavigation/AppBottomNavigation';
import { themeOptions } from './constances/theme';
import { AddBikePage } from './pages/AddBikePage';
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
function App() {
  const defaultTheme = createTheme(themeOptions);
  const handleBackBut = () => {
    history.back();
  };
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden',
          }}
        >
          <AppBar position="fixed">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleBackBut}
              >
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Container
            maxWidth="sm"
            sx={{padding:0}}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AddBikePage" element={<AddBikePage />} />
            </Routes>
          </Container>

          <AppBottomNavigation></AppBottomNavigation>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
