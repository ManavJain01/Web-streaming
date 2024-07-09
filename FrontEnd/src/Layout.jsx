// Importing Chakra Components
import { Box } from '@chakra-ui/react'

// Importing Local Components
import Header from './Header/components/Header'
import Footer from './Footer/components/Footer'

// Importing routing
import { Outlet } from 'react-router-dom'

function Layout(){
  return(
    <Box overflowX={"hidden"}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  )
}

export default Layout;