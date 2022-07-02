

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDvZFwu0DddTlhXvu6rVr2FBNnUWF6eO2g",
    authDomain: "note-book-academy.firebaseapp.com",
    projectId: "note-book-academy",
    storageBucket: "note-book-academy.appspot.com",
    messagingSenderId: "252028301045",
    appId: "1:252028301045:web:7f42094d2a15eda25d9fbc"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
