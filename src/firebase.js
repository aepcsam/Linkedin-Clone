import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore,serverTimestamp} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDQ-HOwlwUz3Gu_9h0GqmA1-M2GbfjcTmE",
    authDomain: "linkedin-clone-f7c96.firebaseapp.com",
    projectId: "linkedin-clone-f7c96",
    storageBucket: "linkedin-clone-f7c96.appspot.com",
    messagingSenderId: "1010812283432",
    appId: "1:1010812283432:web:5cb5d81b054527cb27a31d"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore();
  const storage =getStorage() ;
  const timestamp = serverTimestamp();

  export {app,auth,provider,db,storage,timestamp};