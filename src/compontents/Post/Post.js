import React from 'react';
import {
    AccountCircle,
    ChatBubbleOutline,
    ExpandMoreOutlined,
    NearMe,
    ThumbUp,
} from '@mui/icons-material';
import './Post.css';
import { Avatar } from '@mui/material';

const Post = ({profilePic,image,username,timestamp,message}) => {

  return(
    <div className='post'>
        <div className='post__top'>
            <Avatar src={profilePic} className='post__avatar' />
            <div className='post__topinfo'>
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toDate()).toString().slice(0,25)}</p>
            </div>
        </div>
        <div className='post__bottom'>
            <p>{message}</p>
        </div>
        <div className='post__image'>
            <img src={image} alt='post' />
        </div>
        <div className='post__options'>
            <div className='post__option'>
                <ThumbUp />
                <p>Like</p>
            </div>
            <div className='post__option'>
                <ChatBubbleOutline />
                <p>Comment</p>
            </div>
            <div className='post__option'>
                <NearMe />
                <p>Share</p>
            </div>
            <div className='post__option'>
                <AccountCircle />
                <ExpandMoreOutlined />
            </div>


        </div>
    </div>
    
    
  ) 
//   (
//     <div className='post'>
//         <div className='post__top'>
//             <Avatar src={profilePic} className='post__avator'/>
//             <div className='post__info'>
//                 <h3>{username}</h3>
//                 <p>{new Date(timestamp?.toDate().toString())}</p>
//             </div>
//         </div>
//         <div className='post__bottom'>
//             
//         </div>
//         
//         <div className='post__options'>
//             <div className='post__option'>
//                 <ThumbUp />
//                 <p>Like</p>
//             </div>
//             <div className='post__option'>
//                 <ChatBubbleOutline />
//                 <p>Comment</p>
//             </div>
//             <div className='post__option'>
//                 <NearMe />
//                 <p>Share</p>
//             </div>
//             <div className='post__option'>
//                 <AccountCircle />
//                 <ExpandMoreOutlined />
//             </div>
//         </div>
//     </div>
//   )
};

export default Post;