import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDQ9OJiDnGOOR-fOf2GWEUxVytqNaXQnbQ",
  authDomain: "k-a-online-shop.firebaseapp.com",
  projectId: "k-a-online-shop",
  storageBucket: "k-a-online-shop.appspot.com",
  messagingSenderId: "1010525489515",
  appId: "1:1010525489515:web:6dfd37a4cf936ec354e42e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)