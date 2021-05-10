import React from 'react';
import Logo from '../../assets/img/logo.png';
import './style.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt='The Shoppies Logo' style={{maxWidth:'20%'}} /><br />
            <span style={{paddingLeft:'3%'}}>The Movie Awards for Entrepreneurs</span>
        </div>
    )
}

export default Header;