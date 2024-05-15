
import { useContext, useEffect, useState } from 'react'
import logo from '../assets/logo.jpg'
import { AuthContext } from '../Provider/AuthProvider'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [activeLink, setActiveLink] = useState('')
  const [theme, setTheme] = useState('light')
    useEffect(() => {

        localStorage.setItem('theme', theme)
        const localThemme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localThemme)

    }, [theme])

    const handleTogg = e => {
        console.log(e.target.value)
        if (e.target.checked) {
            setTheme('coffee')
        }
        else {
            setTheme('light')
        }
      }

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
      <div className='ml-10'>
      <label className="swap  swap-rotate">

{/* this hidden checkbox controls the state */}
<input
    onChange={handleTogg}
    type="checkbox"
    className="theme-controller"
    value="synthwave" />

{/* sun icon */}
<svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

{/* moon icon */}
<svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

</label>
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
        <NavLink
          onClick={() => handleLinkClick('about')} 
          className={({ isActive }) => isActive ? '  text-lg font-extrabold  text-green-400' : ' text-white'}  
          to='/pending'
        >
        Requests
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
              <li><Link to='/assingment' className='justify-between text-gray-900'>Assingment</Link></li>
              <li><Link to='/create' className='text-gray-900'>Create Assingment</Link></li>
              <li><Link to='/my-assingment' className='text-gray-900'>My Assingment</Link></li>
              <li><Link to='/submit' className='text-gray-900'>Submitted Assingment</Link></li>
              <li><Link to='/pending' className='text-gray-900'>Requests</Link></li>
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