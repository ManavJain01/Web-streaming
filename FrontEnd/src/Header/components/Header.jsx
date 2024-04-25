import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import {Box} from '@chakra-ui/react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function Header(){
  return(
    <Box>
      <Breadcrumb spacing='8px' separator={<MdOutlineKeyboardArrowRight color='gray.500' />}>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Free Movies & TV</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
          <BreadcrumbSeparator />
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  )
}

export default Header