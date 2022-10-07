import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export const Navbar = () => {

const navigate = useNavigate();
const handleLogout = () => {
  navigate('/login', {
    replace: true
  })
}

  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link 
              className='navbar-brand'
              to='/'
              >
              MovieApp
            </Link>
            <Link 
              className='navbar-brand'
              to='/home'
              >
              Home
            </Link>
            <Link 
              className='navbar-brand'
              to='/top10'
              >
              Top10
            </Link>
            <Link 
              className='navbar-brand'
              to='/trending'
              >
              Trending
            </Link>
            
            <ul className='navbar-collapse justify-content-end'>
              <Link className='nav-link' to='/login' onClick = {handleLogout}>Logout</Link>
            </ul>
        </div>
        </nav>  
    </>
  )
}
