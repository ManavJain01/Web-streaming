// Importing Chakra Components
import { Box } from '@chakra-ui/react'

// Importing Material Components
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Importing Local Components
import Header from './Header/components/Header'
import Footer from './Footer/components/Footer'
import MovieDialog from "./pages/Home Page/components/MovieDialog";

// Importing routing
import { Outlet } from 'react-router-dom'

// Importing Other Packages
import { Toaster } from 'react-hot-toast'; 


function Layout(){
  const theme = createTheme({
    typography: {
      body1: {
        fontSize: '1rem',
      },
    },
  });

  return(
    <div>
      <Box overflowX={"hidden"}>
        <Header />
        <Outlet />
        <Footer />
      </Box>

      <Toaster/>
      <ThemeProvider theme={theme}><MovieDialog/></ThemeProvider>
    </div>
  )
}

export default Layout;