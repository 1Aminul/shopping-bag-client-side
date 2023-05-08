// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm9pezpKpKviLIQNeBEi3OFIBPAN5baKE",
  authDomain: "food-fanda.firebaseapp.com",
  projectId: "food-fanda",
  storageBucket: "food-fanda.appspot.com",
  messagingSenderId: "283288937082",
  appId: "1:283288937082:web:bf437c9b81dc87ce0e91c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;