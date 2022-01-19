// import React, { useRef, useState } from "react";
// import firebase from "firebase/getApp";
// import "firebase/firestore";
// import "firebase/auth";
// import "firebase/analytics";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
// firebase.initializeApp({
//   apiKey: "AIzaSyD_3kJpunBfwURvUB38NTcuYEByyafNXk8",
//   authDomain: "chatapp-760d8.firebaseapp.com",
//   projectId: "chatapp-760d8",
//   storageBucket: "chatapp-760d8.appspot.com",
//   messagingSenderId: "962178651891",
//   appId: "1:962178651891:web:a6d5114ed6de08ad7d4986",
//   measurementId: "G-F7NJ3B89WW",
// });
// const auth = firebase.auth();
// const firestore = firebase.firestore();

// function Chat() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <header>
//         <h1>⚛️🔥💬</h1>
//         <SignOut />
//       </header>

//       <section>{user ? <ChatRoom /> : <SignIn />}</section>
//     </div>
//   );
// }

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };

//   return (
//     <>
//       <button className="sign-in" onClick={signInWithGoogle}>
//         Sign in with Google
//       </button>
//       <p>
//         Do not violate the community guidelines or you will be banned for life!
//       </p>
//     </>
//   );
// }

// function SignOut() {
//   return (
//     auth.currentUser && (
//       <button className="sign-out" onClick={() => auth.signOut()}>
//         Sign Out
//       </button>
//     )
//   );
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdAt").limit(25);

//   const [messages] = useCollectionData(query, { idField: "id" });

//   const [formValue, setFormValue] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });

//     setFormValue("");
//     dummy.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <main>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

//         <span ref={dummy}></span>
//       </main>

//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//           placeholder="say something nice"
//         />

//         <button type="submit" disabled={!formValue}>
//           🕊️
//         </button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

//   return (
//     <>
//       <div className={`message ${messageClass}`}>
//         <img
//           src={
//             photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
//           }
//         />
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }

// export default Chat;
