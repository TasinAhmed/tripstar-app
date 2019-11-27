import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6J3n5dT1yZVjweOWbmj82lSR1SqUEYtc",
  authDomain: "tripstar-33c72.firebaseapp.com",
  databaseURL: "https://tripstar-33c72.firebaseio.com",
  projectId: "tripstar-33c72",
  storageBucket: "tripstar-33c72.appspot.com",
  messagingSenderId: "640404484175",
  appId: "1:640404484175:web:1a523a8500e046bc003a3a",
  measurementId: "G-2W6V1PNT14"
});

const storage = firebase.storage();

export default app;
export { storage };
