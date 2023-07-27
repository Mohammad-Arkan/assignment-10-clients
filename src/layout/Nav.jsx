import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-chef.jpg'
import profile from '../assets/images/profile.png'
import {
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
    <div className='bg-slate-950 px-4 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-12 '>
    <div className='relative flex items-center justify-between py-2'>
      <Link to='/' className='inline-flex items-center'>
        <img className='w-20 h-20 rounded' src={logo} alt="" />       
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
        <li className='flex justify-center items-center gap-4'>
        {
          user ? 
          <p onClick={handleLogOut} className='active1'>Logout</p>    
             
          :
          (
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'active1' : 'default')}
          >
           Log In
          </NavLink>
        )
        } 
       
       {
        user && 
       
         <img className='h-6 w-6 rounded-full hover:cursor-pointer' src={profile} alt="" /> 
       }
        </li>
      
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
          <div className='absolute top-0 left-0 w-full z-10 text-center'>
            <div className='p-5 bg-white border rounded shadow-sm'>
              {/* Logo & Button section */}
              <div className='flex items-center justify-between mb-4'>
                <div>
                <Link to='/' className='inline-flex items-center'>
                <img className='w-20 h-20 rounded' src={logo} alt="" />       
                <span className='ml-2 text-xl font-bold tracking-wide text-white'>
                  Cox&apos;s Restaurant
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
              <nav >
                <ul className='mobile-nav-items'>
                  <li>
                    <Link to='/' className='mobile-nav'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/blogs'
                      className='mobile-nav'
                    >
                      blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='mobile-nav'
                    >
                      About Us
                    </Link>
                  </li>
                  <li className='flex justify-center items-center gap-4'>
        {
          user ? 
          <p onClick={handleLogOut} className='mobile-nav'>Logout</p>    
             
          :
          (
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'mobile-nav' : 'mobile-nav')}
          >
           Log In
          </NavLink>
        )
        } 
       
       {/* {
        user && ''
       
         <img className='h-6 w-6 rounded-full hover:cursor-pointer' src={profile} alt="" /> 
       } */}
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