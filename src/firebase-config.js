
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBLKVjNqptOa7R-tnA2jMpi10g8aR26peA",
  authDomain: "connect-android-e3b24.firebaseapp.com",
  projectId: "connect-android-e3b24",
  storageBucket: "connect-android-e3b24.appspot.com",
  messagingSenderId: "456347557205",
  appId: "1:456347557205:web:07f9549a1309ed9009e3dc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


