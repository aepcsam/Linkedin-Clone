import React, { useState } from 'react';
import { Article, PhotoLibrary, Videocam,CalendarMonth } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useSelector}from 'react-redux'
import './PostUploader.css';
import {getDownloadURL,ref,uploadBytesResumable} from 'firebase/storage';
import {db, storage, timestamp} from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';

const PostUploader = () => {
    const user = useSelector((state)=>state.user);
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(image);
        // console.log(input);
        const storageRef=ref(storage,`images/${image.name}`);

        const uploadTask = uploadBytesResumable(storageRef,image);


        uploadTask.on('state_changed',(snapShot)=>{
            console.log(snapShot);
        },(err)=>{
            console.log(err);	
        },()=>{
            // alert("File Uploaded!...")
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl)=>{
                // console.log(downloadUrl);
                await addDoc(collection(db,'posts'),{
                    message:input,
                    timestamp:timestamp,
                    profilePic:user.photoURL,
                    username:user.displayName,
                    image:downloadUrl                   
                });
            });
            setInput('');
            setImage('');
        });
    }


  return (
    <div className='postUploader'>
        <div className='postUploader__top'>
            <Avatar src={user.photoURL} />
            <form>
                <input
                    placeholder={`What on your mine, ${user.displayName}?`} 
                    className="postUploader__input"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)} />

                <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>

                <button type='submit' onClick={handleSubmit}>Random</button>
            </form>
        </div>
        <div className='postUploader__bottom' >
            <div className='postUploader__option'>
                <Videocam style={{color:'red'}} />
                 <h3>Live Video</h3>   
            </div>
            <div className='postUploader__option'>
                <PhotoLibrary style={{color:'green'}} />
                 <h3>Photo/Video</h3>   
            </div>
            <div className='postUploader__option'>
                <CalendarMonth style={{color:'orange'}} />
                 <h3>Feeling Activity</h3>   
            </div>
            <div className='postUploader__option'>
                <Article style={{color:'orange'}} />
                 <h3>Feeling Activity</h3>   
            </div>
        </div>
    </div>
  )
};

export default PostUploader;