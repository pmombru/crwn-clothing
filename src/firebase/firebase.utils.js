import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDy3_YIRJfVTpA8IyGzbumGxkM4tFxSt1I",
    authDomain: "crwn-db-4a2d3.firebaseapp.com",
    projectId: "crwn-db-4a2d3",
    storageBucket: "crwn-db-4a2d3.appspot.com",
    messagingSenderId: "370220713726",
    appId: "1:370220713726:web:bc787391ad39c62bd507af"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;