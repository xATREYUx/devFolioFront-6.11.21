import Router from "./Router";

import firebaseConfig from "./fb_config/fb_config";
import firebase from "firebase";
import "firebase/auth";
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";

import axios from "axios";

axios.defaults.withCredentials = true;
firebase.initializeApp(firebaseConfig);

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
