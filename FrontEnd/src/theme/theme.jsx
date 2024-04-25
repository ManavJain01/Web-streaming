import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
  colors:{
    yellow:'#FF8948',
    //...
  },
  components:{
    //...
    Button:{
      baseStyle:{
        fontWeight:'bold',
      },
      variants:{
        main:{
          bg:'black',
          color:'white',
          borderRadius:'20px',
          _hover:{
            bg:'red'
          }
        }
      }
    }
  }
})