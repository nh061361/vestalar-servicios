
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOCAb2x3s5UIId_a-vH8kOSfVzB-pTPi4",
  authDomain: "vestalarservicios.firebaseapp.com",
  projectId: "vestalarservicios",
  storageBucket: "vestalarservicios.appspot.com",
  messagingSenderId: "562332821744",
  appId: "1:562332821744:web:cd88cdd19ac0cf88d77a35",
  measurementId: "G-EDKSX1CXLG",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app,'bdvestalar');

export { app, db };
