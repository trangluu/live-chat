import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB-umO0hH1W5c1MUlxbBLAUc57Ki9rI53U",
  authDomain: "live-chat-70174.firebaseapp.com",
  projectId: "live-chat-70174",
  storageBucket: "live-chat-70174.appspot.com",
  messagingSenderId: "451951710225",
  appId: "1:451951710225:web:22597c7c4add592bd961b0"
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectAuth, projectFirestore, timestamp}