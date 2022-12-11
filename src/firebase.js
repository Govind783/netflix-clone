import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyDZE2l8J2zjUE1qdoSPEPk7_SJvPPQgiFk",
    authDomain: "netflix-auth-274a7.firebaseapp.com",
    projectId: "netflix-auth-274a7",
    storageBucket: "netflix-auth-274a7.appspot.com",
    messagingSenderId: "606402266208",
    appId: "1:606402266208:web:73bebda54c668ffa512f05",
    measurementId: "G-216QGLFDTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

 export let preLogin = false;

export const signinWithGoogle = (e) => {


    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
        //console.log(result.user.emailVerified)
        const name = result.user.displayName;
        const mail = result.user.email;
        const pic = result.user.photoURL;

        preLogin = true;
        //console.log("value is", preLogin)

        localStorage.setItem("name", name);
        localStorage.setItem("e-mail", mail);
        localStorage.setItem("picture", pic);

    })

        .catch((error) => {
        })

}


export default app;