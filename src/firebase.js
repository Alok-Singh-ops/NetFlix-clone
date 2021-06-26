import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCu7a8Ahu5-XRq3uqXdWf_HXgbDfxjkkMc",
  authDomain: "netflix-clone-317617.firebaseapp.com",
  projectId: "netflix-clone-317617",
  storageBucket: "netflix-clone-317617.appspot.com",
  messagingSenderId: "983926357662",
  appId: "1:983926357662:web:d1861bedc8f9e18df4858f",
};

const firseBaseApp = firebase.initializeApp(firebaseConfig);

const db = firseBaseApp.firestore();

const auth = firebase.auth();

export { auth };
export default db;
