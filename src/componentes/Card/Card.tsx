import {
    Box,
    Button,
     Center,  
     FormControl,  
     FormErrorMessage,  
     FormHelperText,  
     FormLabel,  
     Input
   } from '@chakra-ui/react'
import { Login } from '../../services/login';



export const Caixa = () => {
    return (
        <Box className='Box1' minHeight='100vh'  bg='#9413dc' padding='25px' display='flex' justifyContent='center'>
          <Box width='800px' bg='white' borderRadius='25px' margin='5px' padding='10px 15px 0px 15px' maxH='26vh'>
            <Center padding='0px 0px 10px 0px' fontWeight='bold'><h1>Faça o Login</h1></Center>
            <Input  placeholder='email' />
            <Input  placeholder='password' type='password' margin='10px 0px'/>
            <Button onClick={Login} colorScheme='teal' size='md' width='100%' padding='10px 0px'>
            Entrar
            </Button>
          </Box>
      </Box>
    )
}
