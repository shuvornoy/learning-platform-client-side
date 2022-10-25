// import { initializeApp } from "firebase/app";

// // firebase configuration
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
// });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMf6pIZ2_twJBroVtUwxCo6APPj61SG3o",
  authDomain: "react-quize-15230.firebaseapp.com",
  projectId: "react-quize-15230",
  storageBucket: "react-quize-15230.appspot.com",
  messagingSenderId: "1052589771262",
  appId: "1:1052589771262:web:1ea26cadfe01d42ca6d8af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
