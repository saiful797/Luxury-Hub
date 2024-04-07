// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZsg_XPpvEsrpE-6XmbKFwjl5tWJ-_UM",
  authDomain: "b9a9-real-estate-saiful797.firebaseapp.com",
  projectId: "b9a9-real-estate-saiful797",
  storageBucket: "b9a9-real-estate-saiful797.appspot.com",
  messagingSenderId: "509232807731",
  appId: "1:509232807731:web:53e6ea1e37a854eb3d8846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;