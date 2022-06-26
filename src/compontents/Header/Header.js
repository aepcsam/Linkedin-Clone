import React from 'react';
import './Header.css';
import {useSelector} from 'react-redux';
import {Search,Home,SupervisorAccount,BusinessCenter,Chat,Notifications,Apps} from '@mui/icons-material';
import HeaderOption from './HeaderOption';
import {Avatar} from '@mui/material';
import {Button } from '@mui/material';

const Header = () => {
    const user = useSelector((state)=>state.user);

    const logout =(e)=>{
        e.preventDefault();
        console.log('logout');
        localStorage.clear();
        sessionStorage.clear();

    }


  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg' alt='linkedin_logo'/>
            
            <div className='header__input'>
                <Search />
                <input type='text' placeholder='Search Linkedin'/>
            </div>

        </div>

        <div className='header_right'>
            <div className='header__option'>
                <Button><Avatar  src={user.photoURL}/></Button>
                {/* <Avatar src={user.photoURL} className="photo"/> */}
                <HeaderOption Icon={Home} title="Home"  />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={BusinessCenter} title="Jobs"/>
                <HeaderOption Icon={Chat} title="Messaging" />
                <HeaderOption Icon={Notifications} title="Notifications" />
            </div>
            <div className='header__logout'>
                <div className='apps'>
                    <HeaderOption Icon={Apps} title ="Work" />
                </div>
                <div className='logout'>
                    <HeaderOption avatar={true}/>
                    <button onClick={logout}>Logout</button>
                </div>
            


            </div>
        </div>

        
    
    </div>
  )
};

export default Header;