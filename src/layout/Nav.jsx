import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-chef.jpg'
import profile from '../assets/images/profile.png'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../components/Auth/AuthProvider';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut =()=>{
    logOut()
    .then()
    .catch((error)=> {
        console.error(error)
    })
}

  return (
    <div className='bg-slate-950 px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 '>
    <div className='relative flex items-center justify-between py-2'>
      {/* Logo Section */}
      <Link to='/' className='inline-flex items-center'>
        <img className='w-20 h-20 rounded' src={logo} alt="" />
        {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}
        <span className='ml-2 text-xl font-bold tracking-wide text-white'>
          Cox&apos;s Restaurant
        </span>
      </Link>

      {/* Nav Items Section */}
      <ul className='items-center hidden space-x-8 lg:flex'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/blogs'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            About us
          </NavLink>
        </li>
        {
          user ? 
          <div><p onClick={handleLogOut} className='active1'>Logout</p>    
         </div>
          // (<p onClick={handleLogOut} className='active'>Logout</p>  <img src="" alt="" />)
          :
          (<li>
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'active1' : 'default')}
          >
           Log In
          </NavLink>
        </li>)
        } 
       
       {
        user && 
       
         <img className='h-6 w-6 rounded-full hover:cursor-pointer' src={profile} alt="" /> 
       }
      </ul>
      {/* Mobile Navbar Section */}
      <div className='lg:hidden lg:mt-0'>
        {/* Dropdown Open Button */}
        <button
          aria-label='Open Menu'
          title='Open Menu'
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className='w-5 text-gray-600' />
        </button>
        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full z-10'>
            <div className='p-5 bg-white border rounded shadow-sm'>
              {/* Logo & Button section */}
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <Link to='/' className='inline-flex items-center'>
                    <BoltIcon className='h-6 w-6 text-blue-500' />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                      nextPage
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label='Close Menu'
                    title='Close Menu'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className='w-5 text-gray-600' />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav>
                <ul className='space-y-4'>
                  <li>
                    <Link to='/' className='default'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/books'
                      className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  );
};

export default Nav;