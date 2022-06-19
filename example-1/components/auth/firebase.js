// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9o9jEbtgfr-m7D7AMHu1JmxvPIbhXfjk",
  authDomain: "sms-test-112a1.firebaseapp.com",
  projectId: "sms-test-112a1",
  storageBucket: "sms-test-112a1.appspot.com",
  messagingSenderId: "808810225911",
  appId: "1:808810225911:web:9d1e792e04bbbabec173f2",
  measurementId: "G-THTK3BPVYC"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);