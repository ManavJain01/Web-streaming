import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function Header(){
  return(
    <Flex justifyContent={'center'} alignItems={'center'} bg={'black'} textColor={'white'} width={'100vw'} height={'20vh'}>
      <Flex justifyContent="space-between" width={'100vw'} mx={'20px'}>
        <Box fontSize={'2xl'} color={'red'}>
          Watch Movies
        </Box>
        <Breadcrumb spacing='8px' separator={<MdOutlineKeyboardArrowRight color='gray.500' />}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={'Home'}>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={'Movies&TV'}>Free Movies & TV</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Categories</BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Flex>
  )
}

export default Header