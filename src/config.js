import Firebase from 'firebase';

  let config = {
    apiKey: "AIzaSyDrZ3uIGs-gpakqbvmiSZXTDqUwN-MwQbA",
    authDomain: "check-in-5d941.firebaseapp.com",
    databaseURL: "https://check-in-5d941.firebaseio.com",
    projectId: "check-in-5d941",
    storageBucket: "check-in-5d941.appspot.com",
    messagingSenderId: "895781506475",
    appId: "1:895781506475:web:247d13dcffb4d79a7256ee",
    measurementId: "G-WQVWH8MWXG"
  }

  let app = Firebase.initializeApp(config);
  export const db = app.database();