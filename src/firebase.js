import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCYxmrSvd4cxWKAZ9ZmSRAhWaYFoyafIHM",
  authDomain: "themad-b31c4.firebaseapp.com",
  databaseURL: "https://themad-b31c4.firebaseio.com",
  projectId: "themad-b31c4",
  storageBucket: "themad-b31c4.appspot.com",
  messagingSenderId: "822348548496",
  appId: "1:822348548496:web:25f5b92ddc80e861"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;