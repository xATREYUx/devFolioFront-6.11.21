import Router from "./Router";

import firebaseConfig from "./fb_config/fb_config";
import firebase from "firebase";
import "firebase/auth";

import { AuthContextProvider } from "./context/AuthContext";
import axios from "axios";

axios.defaults.withCredentials = true;

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
};

export default App;
