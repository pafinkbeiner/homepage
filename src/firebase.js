import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-qXyeoHff__LvqT43MAgy8t--Do-il8E",
  authDomain: "paul-finkbeiner.firebaseapp.com",
  projectId: "paul-finkbeiner",
  storageBucket: "paul-finkbeiner.appspot.com",
  messagingSenderId: "839784228564",
  appId: "1:839784228564:web:777fea78b38105d5007d41",
};

// Configure
let fb = firebase.initializeApp(firebaseConfig);
let db = fb.firestore();

// AUTH //
fb.auth();

// [START auth_state_listener]
fb.auth().onAuthStateChanged((user) => {
  if (user) {
    var uid = user.uid;
    localStorage.setItem("uid", uid);
    console.log("RES:", fb.auth());
  } else {
    localStorage.removeItem("uid", uid);
  }
});
// [END auth_state_listener]

export { db, fb };
