import Router from "./Router";

import firebaseConfig from "./fb_config/fb_config";
import firebase from "firebase";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
};

export default App;
