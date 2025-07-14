import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBgKdMLrMb5H_Z7yv6xWCADlhMz3b1srTE",
  authDomain: "netflix-clone-52399.firebaseapp.com",
  projectId: "netflix-clone-52399",
  storageBucket: "netflix-clone-52399.firebasestorage.app",
  messagingSenderId: "134324877073",
  appId: "1:134324877073:web:949a61bcd4c79b445b7eb0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
  signOut(auth);
}

export {auth, db, login, signup, logout}