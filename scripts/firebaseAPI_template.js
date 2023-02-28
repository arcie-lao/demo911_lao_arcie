//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDp4JNm0vq_sAVIbTjUgtHY01nucouPMnE",
    authDomain: "comp1800-202230-399e2.firebaseapp.com",
    projectId: "comp1800-202230-399e2",
    storageBucket: "comp1800-202230-399e2.appspot.com",
    messagingSenderId: "189574617265",
    appId: "1:189574617265:web:7713f552f65606a41a6a90"  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
