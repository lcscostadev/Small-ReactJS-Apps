import React from 'react';
import './App.css';

// Fire SDK
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Firebase setup
firebase.initializeApp({
  apiKey: "AIzaSyD1J-UJ-fNEew86GWrKG6A2pB56mVip_Ag",
  authDomain: "super-chat-ccc8c.firebaseapp.com",
  projectId: "super-chat-ccc8c",
  storageBucket: "super-chat-ccc8c.appspot.com",
  messagingSenderId: "507409598386",
  appId: "1:507409598386:web:183c3430dd7271e44946ab"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  // Listen to data with a hook
  const [messages] = useCollectionData(query, { idField: 'id' });
}

export default App;
