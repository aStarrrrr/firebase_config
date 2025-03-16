import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1ja5BHCeIaNuLYZIIduBia6WsvH7Y3mY",
    authDomain: "fir-38382.firebaseapp.com",
    projectId: "fir-38382",
    storageBucket: "fir-38382.firebasestorage.app",
    messagingSenderId: "937047893540",
    appId: "1:937047893540:web:e4a6f84f29ee1ca870dab1",
    measurementId: "G-HY38XH5DS6"
  };

export const firebase = firebase.initializeApp(firebaseConfig)