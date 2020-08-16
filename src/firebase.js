import firebase from "firebase"
const  firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyBU6aOJloDC-yv-fVBOApI2O-2te9HlEsg",
        authDomain: "clone-bc8fb.firebaseapp.com",
        databaseURL: "https://clone-bc8fb.firebaseio.com",
        projectId: "clone-bc8fb",
        storageBucket: "clone-bc8fb.appspot.com",
        messagingSenderId: "367358344141",
        appId: "1:367358344141:web:9b62e70c3e563240302284",
        measurementId: "G-3GF4RDYHPR"
     
});
const db = firebase.firestore();
const auth = firebase.auth();
export {db,auth}