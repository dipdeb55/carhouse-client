// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId = 1
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDKI-XC0Arnmj7o6lI_j9G4TgdRUrS2P_Y",
//     authDomain: "assignment-11-2488d.firebaseapp.com",
//     projectId: "assignment-11-2488d",
//     storageBucket: "assignment-11-2488d.appspot.com",
//     messagingSenderId: "611926129774",
//     appId: "1:611926129774:web:bbe9c3cb4a26be35dbfa7f"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;