// Importerer firebase bibliotek
import firebase from "firebase/app"
import "firebase/firestore"

// Firebase config nøkkel
const firebaseConfig = {
  // Legg inn din egen firebase config
};

firebase.initializeApp(firebaseConfig)

// Ekporterer roten til databasen
export const db = firebase.firestore();
export const Timestamp = firebase.firestore.Timestamp;