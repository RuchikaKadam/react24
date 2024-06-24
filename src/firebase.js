import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ-lfQV9z4HVPqoYeErv1zKKjDMbqa9b0",
    authDomain: "fir-demom5.firebaseapp.com",
    projectId: "fir-demom5",
    storageBucket: "fir-demom5.appspot.com",
    messagingSenderId: "494614335207",
    appId: "1:494614335207:web:0d40d499013932600adc42"
  };


//   initialized the app using the function initialize app which is taken from firebase
const app = initializeApp(firebaseConfig);


// passing this initialized app to getAuth function which will authenticate and register stuff
// app varibale recieves info from initialize and that is passed to getAuth
export const auth = getAuth(app);
