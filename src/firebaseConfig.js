import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT,
//   storageBucket: import.meta.env.VITE_STORAGE,
//   messagingSenderId: import.meta.env.VITE_MESSAGIN,
//   appId: import.meta.env.VITE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC0ie3IaE2vgtuUAt4goQ5WNua9CNFDJf8",
  authDomain: "vidrialum-2024.firebaseapp.com",
  projectId: "vidrialum-2024",
  storageBucket: "vidrialum-2024.appspot.com",
  messagingSenderId: "1066075209445",
  appId: "1:1066075209445:web:b1a83735ff9a362962de0c",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
