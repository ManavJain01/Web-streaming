// Importing Chakra Components
import { Box, Flex, Button } from '@chakra-ui/react'

// Importing React Hooks
import { useState } from 'react'

// Importing Local Components
import Movies from './components/Movies'
import Webseries from './components/Webseries'

function Index(){
  const [displayCategory, setDisplayCategory] = useState('movies')

  return(
    <Box width={'100vw'} minHeight={'80vh'} bgColor={'beige'} paddingTop='60px'>
      <Flex flexFlow={'column'} pt={'20px'} gap={"20px"}>
        <Flex justifyContent={'space-around'} width={'100vw'}>
          <Button onClick={()=>setDisplayCategory('movies')} bg={'#BE9D6A'} _hover={{bg:"#AC9362"}}>Movies</Button>
          <Button onClick={()=>setDisplayCategory('webseries')} bg={'#BE9D6A'} _hover={{bg:"#AC9362"}}>Webseries</Button>
        </Flex>
        <Box minH={'50vh'} mx={'30px'} p={'20px'} border={'1px'} borderColor={'black'}>
          {displayCategory === 'movies' ? <Movies /> : <Webseries />}
        </Box>
      </Flex>
    </Box>
  )
}

export default Index