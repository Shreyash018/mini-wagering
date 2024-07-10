import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEw6KeIK5sUWH0va_lkeRDlqEFG3VpQ5o",
    authDomain: "my-wagering-game.firebaseapp.com",
    projectId: "my-wagering-game",
    storageBucket: "my-wagering-game.appspot.com",
    messagingSenderId: "1026563054123",
    appId: "1:1026563054123:web:d71c48cdaffbc0e9ab286e",
    measurementId: "G-DGZF6YMLKX"

};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
