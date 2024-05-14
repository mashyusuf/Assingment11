import { useContext, useState } from 'react'
import logo from '../assets/logo.jpg'
import { AuthContext } from '../Provider/AuthProvider'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (link) => {
    setActiveLink(link)
  } 

  // className={({ isActive }) => isActive ? 'btn btn-ghost border-green-400 text-green-400' : 'btn w-32 btn-ghost text-white'}

  return (
    <div className='navbar bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg px-4 w-screen transition duration-500 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500'>
      <div className='flex items-center justify-center '>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-7' src={logo} alt='' />
          <span className='font-bold text-3xl text-white'>BJET</span>
        </Link>
      </div>
      <div className='flex items-center justify-center flex-1 gap-10'>
        <NavLink
          onClick={() => handleLinkClick('home')} 
          className={({ isActive }) => isActive ? ' font-extrabold text-xl text-teal-400' : ' text-white font-bold text-md'} 
          to='/'
        >
          Home
        </NavLink>
        <NavLink 
          onClick={() => handleLinkClick('home')} 
          className={({ isActive }) => isActive ? ' font-extrabold text-xl  text-sky-400' : ' text-white font-bold text-md'} 
          to='/assingment'
        >
         Assingment
        </NavLink>
        <NavLink
          onClick={() => handleLinkClick('home')} 
          className={({ isActive }) => isActive ? '  text-lg font-extrabold  text-green-400' : ' text-white'} 
          to='/create'
        >
          Create Assingment
        </NavLink>
        <NavLink
          onClick={() => handleLinkClick('about')} 
          className={({ isActive }) => isActive ? '  text-lg font-extrabold  text-sky-400' : ' text-white'}
          to='/submit'
        >
         MySubmitted Assingment
        </NavLink>
        <NavLink
          onClick={() => handleLinkClick('about')} 
          className={({ isActive }) => isActive ? '  text-lg font-extrabold  text-green-400' : ' text-white'}  
          to='/my-assingment'
        >
         My Assingment
        </NavLink>
        {/* Add more links as needed */}
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          {!user && (
            <li>
              <Link to='/login' className="text-white">Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img referrerPolicy='no-referrer' alt='User Profile Photo' src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52'>
              <li><Link to='/add-job' className='justify-between text-gray-900'>Assingment</Link></li>
              <li><Link to='/my-posted-jobs' className='text-gray-900'>Create Assingment</Link></li>
              <li><Link to='/my-bids' className='text-gray-900'>My Assingment</Link></li>
              <li><Link to='/bid-requests' className='text-gray-900'>Pending</Link></li>
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar


