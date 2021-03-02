// Importerer firebase bibliotek
import firebase from "firebase/app"
import "firebase/firestore"

// Firebase config nøkkel
const firebaseConfig = {
  apiKey: "AIzaSyDKjYI9mOFM5pcwu6r-iqd_4TbtBT-emXs",
  authDomain: "it-database-e9c9b.firebaseapp.com",
  projectId: "it-database-e9c9b",
  storageBucket: "it-database-e9c9b.appspot.com",
  messagingSenderId: "431882544172",
  appId: "1:431882544172:web:029cc6b7c50406bd195d89"
};

firebase.initializeApp(firebaseConfig)

// Ekporterer roten til databasen
export const db = firebase.firestore();
export const Timestamp = firebase.firestore.Timestamp;