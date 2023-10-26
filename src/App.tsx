import {
  Box,
  Button,
   Center,
   ChakraProvider,
   Input
 } from '@chakra-ui/react'
import { Layout } from './componentes/Layout/Layout';


function App() {
  return (
    <ChakraProvider>
    <Layout/>
    </ChakraProvider>
  )
}

export default App;
