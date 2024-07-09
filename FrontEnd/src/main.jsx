// Importing React Packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Importing React Redux
import { Provider } from "react-redux";
import store from './redux/store';

// Importing Chakra Components
import { ChakraProvider } from '@chakra-ui/react'

// Importing Local Configuration Components
import Layout from './Layout.jsx'
import { theme } from './theme/theme.jsx'

// Importing Local Components
import Login from './pages/Login/Login.jsx'
import App from './App.jsx'
import Movies_TV from './pages/Movies&TV/components/index.jsx'
import Upload from './pages/Upload/components/Index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'Home',
    element: <Layout />,
    children : [
      {
        path: "",
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
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
