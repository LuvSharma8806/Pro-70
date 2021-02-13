import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDOFNors1N_ramAjBZBnPVB7I5BJkVIA90",
    authDomain: "story-hub-44f22.firebaseapp.com",
    projectId: "story-hub-44f22",
    storageBucket: "story-hub-44f22.appspot.com",
    messagingSenderId: "446398731017",
    appId: "1:446398731017:web:19a6d16cedd8b2581c39d8",
    measurementId: "G-BBJQY98TTF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
