import React from 'react';
import logo from '../../assets/reddit-icon-128.png';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css'

function Header() {
    return ( 
        <div className='header'>
            <div className='logo-content'>
                <img src={logo} alt='reddit logo' />
                <h3>minireddit</h3>
            </div>
            <SearchBar />
        </div>
     );
}

export default Header;