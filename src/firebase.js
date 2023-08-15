import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBBLamJgdMvxI3xqU3pV1wVYVc1sEp-Cws",
  authDomain: "netflix-clone-bc6db.firebaseapp.com",
  projectId: "netflix-clone-bc6db",
  storageBucket: "netflix-clone-bc6db.appspot.com",
  messagingSenderId: "710145681011",
  appId: "1:710145681011:web:e614c410a40abe57096c06",
  measurementId: "G-T1LKN6S86X"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export {firebaseApp};
export default db;
