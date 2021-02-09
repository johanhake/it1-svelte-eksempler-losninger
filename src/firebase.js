// Importerer firebase bibliotek
import firebase from "firebase/app"
import "firebase/firestore"

// Firebase config nøkkel
const firebaseConfig = {
  // Lim inn kode for ditt firebase prosjekt her!
};

firebase.initializeApp(firebaseConfig)

// Ekporterer roten til databasen
export const db = firebase.firestore()



