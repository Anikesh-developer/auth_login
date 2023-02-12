import React , {useState} from 'react'
import {RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assests/logo.svg';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#WhatGPT3'>WhatGPT3?</a></p>
  <p><a href='#Possibility'>Open AI</a></p>
  <p><a href='#Case Studies'>Case Studies</a></p>
  <p><a href='#blog'>Library</a></p>
  </>
)

const Navbar = (props) => {

  const logout = (e) => {
    signOut(auth);
  }
  const [ toggleMenu , setToggleMenu ] = useState(false);

  return (
    <div className='gpt3__Navbar'>
      <div className='gpt3__Navbar-links'>
        <div className='gpt3__Navbar-links_logo'>
          <img src={logo} alt= "logo" />
        </div>
        <div className='gpt3__Navbar-links_container'>
          <Menu />
        </div>
      </div>

        <div className='gpt3__Navbar-sign'>
        <Link to="/login"> 
          {/* <p>Sign In</p> */}
          <p>{ props.name ? `${props.name}`: <button>Sign In</button>}</p>
        </Link>
        <Link to='/login'>
          <button onClick={logout}>LogOut</button>
        </Link>
        </div>
      
      <div className='gpt3__Navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27}  onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line  color='#fff'  size={27} onClick = {() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__Navbar-menu_container scale-up-center'>
            <div className='gpt3__Navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__Navbar-menu_container-links-sign'>
                <Link to='/login'>
                  <p>{ props.name ? `${props.name}` : <button>Sign In</button>}</p>
                </Link>
                <Link to="/login">
                  <button onClick={logout} >LogOut</button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
