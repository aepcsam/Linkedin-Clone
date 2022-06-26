import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../compontents/Login/Login';
import Header from '../compontents/Header/Header';
import Sidebar from '../compontents/Sidebar/Sidebar';
import Feed from '../compontents/Feed/Feed';
import Widget from '../compontents/Widget/Widget';



const Home = () => {
    const user = useSelector((state)=>state.user)
  return (
    <div className='app'>
        {
            !user ? (<Login />):(
              <div className='app'>
                <Header />
                <div className='app__body'>
                  <Sidebar />
                  <Feed />
                  <Widget />
                </div>
              </div>
                

            )
        }
    </div>
  )
};

export default Home;