import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyD6J3n5dT1yZVjweOWbmj82lSR1SqUEYtc",
  authDomain: "tripstar-33c72.firebaseapp.com",
  databaseURL: "https://tripstar-33c72.firebaseio.com",
  projectId: "tripstar-33c72",
  storageBucket: "tripstar-33c72.appspot.com",
  messagingSenderId: "640404484175",
  appId: "1:640404484175:web:1a523a8500e046bc003a3a",
  measurementId: "G-2W6V1PNT14"
};
// Initialize Firebase

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }

  async register(email, password) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
    return user;
  }

  async login(email, password) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        console.log(error);
      });
    return user;
  }

  async logout() {
    await firebase
      .auth()
      .signOut()
      .catch(error => {
        console.log(error);
      });
  }

  async getUserState() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
