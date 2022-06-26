import React from 'react';
import './Login.css';
import {Button} from '@mui/material';
import {auth,provider} from '../../firebase';
import {signInWithPopup} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {addUser} from '../../Store/actions/user';

const Login = () => {
    const dispatch = useDispatch();

    const signInApp=()=>{
        signInWithPopup(auth,provider)
            .then((result)=>{
                console.log(result.user);
                dispatch(addUser(result.user));
            }).catch((error)=>{
                alert(error)
            })
    };

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg' alt='logo'/>
        </div>
        
        <Button onClick={signInApp}>Login</Button>
    </div>
  )
};

export default Login;