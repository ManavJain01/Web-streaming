// Importing React Icons
import { IoIosArrowDropdown } from "react-icons/io";

// Import React Packages
import { Link, useNavigate } from 'react-router-dom'

// Import React Redux Packages
import {useDispatch, useSelector} from "react-redux";
import { setUser } from '../../redux/userSlice';
import { setToggle } from '../../redux/movieSlice';

// Importing Other Packages
import axios from "axios";
import toast from "react-hot-toast"

// Import Local Files
import { API_END_POINT } from '../../utils/constant';

// Importing Chakra-Ui
import { Box, Flex } from '@chakra-ui/react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

function Header(){
  // React-Router-Dom
  const navigate = useNavigate();

  // React Redux
  const dispatch = useDispatch();
  const user = useSelector((store)=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle);

  // Functions
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success){
          toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  const toggleHandler = () => {
      dispatch(setToggle());
  }

  return(
    <div className='absolute left-0 right-0 text-white z-10 bg-gradient-to-b from-black flex gap-5 justify-between px-5'>
      <Box fontSize={'5xl'} color={'red'} fontWeight={'700'} whiteSpace='nowrap'>
        {import.meta.env.VITE_REACT_APP_Website_Name}
      </Box>

      <div className="flex">
        {
          user && (
            <div className='flex gap-5 items-center w-full'>
              <Breadcrumb spacing='8px' separator={" "}>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to={''}>Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to={'Movies&TV'}>Free Movies & TV</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink>Categories</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to={'Upload'}>Upload</BreadcrumbLink>
                </BreadcrumbItem>

                {/* <BreadcrumbItem>
                  <BreadcrumbLink>Login/Signup</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </BreadcrumbItem> */}
              </Breadcrumb>
            
              <div className='flex items-center gap-5'>
                <div className="flex">
                  <IoIosArrowDropdown size="30px" color='white' />
                  <h1 className='text-lg font-medium text-white whitespace-nowrap'>{user.fullName}</h1>
                </div>
                <section className="flex gap-5">
                  <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2 rounded-md'>Logout</button>
                  <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 rounded-md'>{toggle ? "Home" : "Search Movie"}</button>
                </section>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header