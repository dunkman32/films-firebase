import firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "films-77573.firebaseapp.com",
    projectId: "films-77573",
    storageBucket: "films-77573.appspot.com",
    messagingSenderId: "691827665866",
    appId: "1:691827665866:web:fe04b91804f8ca6e637d33",
    measurementId: "G-RS9CM5BC29"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
