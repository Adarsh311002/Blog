import { Button, Navbar, NavbarCollapse, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiOutlineSearch } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";

const Header = () => {

   const path = useLocation().pathname;
    
  return (
    <Navbar className='border-b-2'>
      
      <Link to="/" className='flex gap-36 self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
       <span className='px-2 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-lg text-white'>Blog</span>
       </Link>
       <form>
        <TextInput
        type='text'
        placeholder='Search...'   
        rightIcon={HiOutlineSearch}
        className='hidden lg:inline'
        /> 
        </form>
        <Button className=' w-12 h-10 lg:hidden' color="gray" pill>
            <HiOutlineSearch />
        </Button> 
        <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color="gray" pill>
        <FaMoon />    
        </Button>  
        <Link to="/signin">
        <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
        </Link>
       <Navbar.Toggle />
        </div> 
        <NavbarCollapse>
            <Navbar.Link active={path === '/'} as={"div"}>
                <Link to="/" >
                Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={"div"}>
                <Link to="/about" className='px-3'>
                About
                </Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={"div"}>
                <Link to="/projects">
                Projects
                </Link>
                </Navbar.Link>
           
        </NavbarCollapse>  
      
      
    </Navbar>
  )
}

export default Header
