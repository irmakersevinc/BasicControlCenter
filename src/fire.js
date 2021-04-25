import firebase from 'firebase';

// web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "login-fe95f.firebaseapp.com",
    projectId: "login-fe95f",
    storageBucket: "login-fe95f.appspot.com",
    messagingSenderId: "184367496140",
    appId: "1:184367496140:web:8439fc0a2d712f21c13b69"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;