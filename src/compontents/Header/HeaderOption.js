import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';

const HeaderOption = ({Icon,avatar,title}) => {
  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {avatar && <Avatar className="headerOption__icon"> ⬇</Avatar>}
        <h4 className='header__title'>{title}</h4>
    </div>
  )
};

export default HeaderOption;