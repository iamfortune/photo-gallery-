import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoTJ_i07AzX6DunzcDsG3tTeBqqawpUvg",
  authDomain: "kay-gram-c2759.firebaseapp.com",
  databaseURL: "https://kay-gram-c2759.firebaseio.com",
  projectId: "kay-gram-c2759",
  storageBucket: "kay-gram-c2759.appspot.com",
  messagingSenderId: "513387670957",
  appId: "1:513387670957:web:2c0c4f41eb223c476e0524",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
