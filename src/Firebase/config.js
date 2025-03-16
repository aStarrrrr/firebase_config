import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1ja5BHCeIaNuLYZIIduBia6WsvH7Y3mY",
    authDomain: "fir-38382.firebaseapp.com",
    projectId: "fir-38382",
    storageBucket: "fir-38382.appspot.com",
    messagingSenderId: "937047893540",
    appId: "1:937047893540:web:e4a6f84f29ee1ca870dab1",
    measurementId: "G-HY38XH5DS6"
};

// Initialize Firebase & Firestore
const Firebase = initializeApp(firebaseConfig);
const db = getFirestore(Firebase);

export { Firebase, db };
