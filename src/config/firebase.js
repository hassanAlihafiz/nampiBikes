import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCnZX-cfh5ivaDMEy1bq0MOGj1TBZ-J2JI",
  authDomain: "nampibikes-da088.firebaseapp.com",
  projectId: "nampibikes-da088",
  storageBucket: "nampibikes-da088.appspot.com",
  messagingSenderId: "993371994216",
  appId: "1:993371994216:web:d06d68f7ecae431699a3dd",
  measurementId: "G-P9TDHKNKMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
