import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthenticaiton = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthenticaiton;
