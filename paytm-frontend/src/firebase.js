import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDnLu90BblFjXhvvsD3lmpIp0npvRQmPdM",
    authDomain: "paytm-status-fff25.firebaseapp.com",
    projectId: "paytm-status-fff25",
    storageBucket: "paytm-status-fff25.appspot.com",
    messagingSenderId: "1002188865126",
    appId: "1:1002188865126:web:21d30c90cc4fda3fc137a7",
    measurementId: "G-CSHK7D3DEE"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore()
  export {db}