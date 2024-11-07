// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyAkuOVCJC0PW3YPmBSmPiM1I8PNlVaDxEw",
    authDomain: "webapp-8c6ad.firebaseapp.com",
    projectId: "webapp-8c6ad",
    storageBucket: "webapp-8c6ad.firebasestorage.app",
    messagingSenderId: "1076044970574",
    appId: "1:1076044970574:web:c13f81c3fbbf3eaf37611f"
    
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
