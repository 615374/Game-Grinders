import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBhzskCbl3yNbzQyD06Kdzu1-Sq8gWivOI",
    authDomain: "gamegrinders-3ac3d.firebaseapp.com",
    projectId: "gamegrinders-3ac3d",
    storageBucket: "gamegrinders-3ac3d.appspot.com",
    messagingSenderId: "941709441653",
    appId: "1:941709441653:web:64ccb3ee52987ae240563c"
  };


  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app); 