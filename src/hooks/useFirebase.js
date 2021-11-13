import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import initializeAuthenticaiton from "../Firebase/firebase.init";

// initialize firebase
initializeAuthenticaiton();
// initlialize toastify
toast.configure();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // for checking if the user is admin or not
  const [admin, setAdmin] = useState(false);

  //   register user
  const registerUser = (email, password) => {
    setIsLoading(true);
    // i am just returning the promise here to do some extrea things on sign up page
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  login with email and password
  const loginWithEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        notify("info", "Logout Sucessfull");
      })
      .finally(() => setIsLoading(false));
  };

  // update user name while user sign up
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then(() => {});
  };

  // save user details for after register
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    axios
      .post("https://calm-reaches-87696.herokuapp.com/users", user)
      .then((res) => console.log(res.data));
  };

  // setting an observer to hanlde user state
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          localStorage.setItem("idToken", idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    // this clean up function is for better performance a little bit
    return () => unsubscribe;
  }, []);

  // cheking if the user is admin or not
  useEffect(() => {
    axios
      .get(`https://calm-reaches-87696.herokuapp.com/users/${user.email}`)
      .then((res) => setAdmin(res.data.admin));
  }, [user.email]);

  const notify = (type, message) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return {
    user,
    setUser,
    registerUser,
    updateName,
    admin,
    isLoading,
    setIsLoading,
    loginWithEmail,
    logOut,
    saveUser,
    notify,
  };
};
export default useFirebase;
