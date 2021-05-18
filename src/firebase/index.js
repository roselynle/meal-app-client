
import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCAn7jEwjszC28jlHTLr5Dy7n4FOLCQhOA",
    authDomain: "foodapp-30707.firebaseapp.com",
    projectId: "foodapp-30707",
    storageBucket: "foodapp-30707.appspot.com",
    messagingSenderId: "954439487910",
    appId: "1:954439487910:web:457ebcb7dcb581d6c6bf67",
    measurementId: "G-NXGRBC4SHB"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage , firebase as default}
