//copied from demo 8

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDttK3W9EaSI8QLKAez_f-4g9AXPHC-WhI",
  authDomain: "nomo-e3a8e.firebaseapp.com",
  projectId: "nomo-e3a8e",
  storageBucket: "nomo-e3a8e.appspot.com",
  messagingSenderId: "271588415710",
  appId: "1:271588415710:web:740ba21c7fb59e8d078a4f",
  measurementId: "G-YBMGT82WMF"
};
  
//initialize database in firebaseAPI script
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// const storage = firebase.storage();
