import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3gIudHISk_7qor3A9OGfkE-PgGOqvKQQ",
    authDomain: "don-rauls-hardware-store.firebaseapp.com",
    projectId: "don-rauls-hardware-store",
    storageBucket: "don-rauls-hardware-store.appspot.com",
    messagingSenderId: "365129911418",
    appId: "1:365129911418:web:fd3ecc81eaead9ea36ffc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()