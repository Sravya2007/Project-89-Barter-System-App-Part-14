import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBgmyaNzNe-foz3_bWMZZ3bpYaZp6xKJlw",
    authDomain: "barter-system-7e22f.firebaseapp.com",
    projectId: "barter-system-7e22f",
    storageBucket: "barter-system-7e22f.appspot.com",
    messagingSenderId: "756875686514",
    appId: "1:756875686514:web:71c84bc579e756a189c8eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();