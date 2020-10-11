import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBgVgZmO1r-Q9j0BfIQcQvg2les3tL3oV0",
  authDomain: "book-santa-40ddd.firebaseapp.com",
  databaseURL: "https://book-santa-40ddd.firebaseio.com",
  projectId: "book-santa-40ddd",
  storageBucket: "book-santa-40ddd.appspot.com",
  messagingSenderId: "115987943447",
  appId: "1:115987943447:web:f02e2d36359670c83e8c52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
