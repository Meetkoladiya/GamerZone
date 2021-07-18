import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRQULEQVMZHFjk3ThAGlo-ujWd65ddHYI",
  authDomain: "gamer-zone-e4ff1.firebaseapp.com",
  projectId: "gamer-zone-e4ff1",
  storageBucket: "gamer-zone-e4ff1.appspot.com",
  messagingSenderId: "357331092501",
  appId: "1:357331092501:web:b9671c61a605ce3e9aba1c",
  measurementId: "G-9EF4K9NVFZ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };	