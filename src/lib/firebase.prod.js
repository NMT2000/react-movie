import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// seed the database

// config
const config = {
  apiKey: "AIzaSyARMVXI33TjRtQrKfrHnK6_qefUoLlZ-fk",
  authDomain: "netflix-57032.firebaseapp.com",
  databaseURL: "https://netflix-57032.firebaseapp.com",
  projectId: "netflix-57032",
  storageBucket: "netflix-57032.appspot.com",
  messagingSenderId: "1057172206572",
  appId: "1:1057172206572:web:335ad1a10d70b908ea46c9",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
