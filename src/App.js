import Router from "./routing/Router";

import firebaseConfig from "./fb_config/fb_config";
import firebase from "firebase";
import "firebase/auth";
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";

import axios from "axios";

require('dotenv').config()


axios.defaults.withCredentials = true;
 
firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV == "development") {
  firebase.auth().useEmulator("http://localhost:9099/")
}

const App = () => {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router />
      </PostContextProvider>
    </AuthContextProvider>
  );
};

export default App;
