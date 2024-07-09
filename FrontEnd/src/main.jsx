import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing Chakra Components
import { ChakraProvider } from '@chakra-ui/react'

// Importing Local Configuration Components
import Layout from './Layout.jsx'
import { theme } from './theme/theme.jsx'

// Importing Local Components
import App from './App.jsx'
import Movies_TV from './Movies&TV/components/index.jsx'
import Upload from './Upload/components/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: "",
        element : <App />
      },
      {
        path: "Home",
        element : <App />
      },
      {
        path: "Movies&TV",
        element : <Movies_TV />
      },
      {
        path: "Upload",
        element : <Upload />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
