import React from 'react';
import './Sidebar.css';
import {Avatar} from '@mui/material';
import {useSelector} from 'react-redux';

const Sidebar = () => {
    const user = useSelector((state)=>state.user);


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    ) 

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://career-lunch-storage.s3.eu-central-1.amazonaws.com/v2/blog/articles/linkedin-title-picture.jpg' alt='profile'/>
            <Avatar src={user.photoURL} className='sidebar__avatar'>{user.email[0].toUpperCase()}</Avatar>
            <h4>{user.displayName}</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed your profile</p>
                <p className="sidebar__statNumber">126</p>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">67</p>
            </div>
        </div>  

        <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('programming')}
                {recentItem('jobs')}
                {recentItem('fintech')}
                {recentItem('spaceX')}
                {recentItem('MongoDB')}
                <h4>Followed Hastags</h4>
                {recentItem('nodejs')}
                {recentItem('reactjs')}
                {recentItem('developer')}
                {recentItem('business')}
                {recentItem('tech')}
            </div>


    </div>
  )
};

export default Sidebar;