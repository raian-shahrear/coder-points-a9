import React from 'react';
import './NavBar';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className='bg-[hsl(240,4%,14%)]'>
      <div className="navbar h-20 w-11/12 mx-auto flex justify-between text-white">
        <a href='/home'>
          <p className='text-3xl text-amber-500'><FontAwesomeIcon icon={faLaptopCode} /></p>
          <p className="btn btn-ghost normal-case text-2xl">Coder Points</p>
        </a>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className='hover:text-amber-500 text-lg font-semibold'><NavLink className={({isActive}) => isActive ? 'text-amber-500' : undefined} to='/home'>Home</NavLink></li>
            <li className='hover:text-amber-500 text-lg font-semibold'><NavLink className={({isActive}) => isActive ? 'text-amber-500' : undefined} to='/statistics'>Statistics</NavLink></li>
            <li className='hover:text-amber-500 text-lg font-semibold'><NavLink className={({isActive}) => isActive ? 'text-amber-500' : undefined} to='/blog'>Blog</NavLink></li>
            <li className='hover:text-amber-500 text-lg font-semibold'><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>

        <div className="lg:hidden">
          <div className="dropdown relative">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow w-52 absolute top-10 right-4 bg-[hsl(240,4%,14%)]">
              <li className='hover:text-amber-500 text-lg font-semibold'><NavLink className={({isActive}) => isActive ? 'text-amber-500' : undefined} to='/home'>Home</NavLink></li>
              <li className='hover:text-amber-500 text-lg font-semibold'><NavLink className={({isActive}) => isActive ? 'text-amber-500' : undefined} to='/statistics'>Statistics</NavLink></li>
              <li className='hover:text-amber-500 text-lg font-semibold'><NavLink className={({isActive}) => isActive ? 'text-amber-500' : undefined} to='/blog'>Blog</NavLink></li>
              <li className='hover:text-amber-500 text-lg font-semibold'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;