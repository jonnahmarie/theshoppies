import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../../assets/img/logo.png';
import './style.css';

function Header() {
    return (
        <div className='header'>
            <Grid justify='flex-start' alignItems='center' spacing={0} style={{paddingLeft:'1%', paddingTop:'1%', paddingBottom:'1%'}}>
                <Grid item xs={12}>
                    <img src={Logo} alt='the shoppies logo' style={{width:'20%'}} /><br />
                    <span style={{paddingLeft:'3%'}}>The Movie Awards for Entrepreneurs</span>
                </Grid>
            </Grid>
        </div>
    )
};

export default Header;