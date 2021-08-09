import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

import { FaBars } from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Logo from '../images/logo-dr-marcio-pio.svg';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ? <AiOutlineCloseCircle/> : <FaBars/> }
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/sobre' className='nav-links' onClick={closeMobileMenu}>
            Dr. Marcio Pio
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/procedimentos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cirurgias e Procedimentos <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/clinica'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Clínica
            </Link>
          </li>
          
          
          <li className='nav-item'>
            <Link
              to='/contato'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contato
            </Link>
          </li>
         
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
