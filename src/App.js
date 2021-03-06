import "./styles.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

function App() {
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="App">
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
