import React from 'react';
import PostUploader from '../PostUploader/PostUploader';
import './Feed.css';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';
import Post from '../Post/Post';



const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {  
   const databaseQuery = query(collection(db,'posts'));
    onSnapshot(databaseQuery,(snapShot)=>{
      setPosts(
        snapShot.docs.map((doc)=>{
          return {
            id:doc.id,
            data:doc.data()
  
          };
        })
      ) 
    });
  
  }, []);

// console.log(posts);
  return (
    <div className='feed'>
      <PostUploader />
      
      {
        posts.map((post)=>(
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            username={post.data.username} 
            timestamp={post.data.timestamp}
            message={post.data.message} 
            image={post.data.image}

          />  
        
        ))
      }
      
      
    </div>
  )
};

export default Feed;