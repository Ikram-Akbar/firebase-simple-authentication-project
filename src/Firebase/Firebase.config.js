import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.init";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
};

export default initializeAuthentication;