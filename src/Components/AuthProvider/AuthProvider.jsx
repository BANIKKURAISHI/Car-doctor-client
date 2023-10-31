import { createContext, useEffect, useState, } from "react";
import { PropTypes } from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import auth from "../Page/Firebase.cofig";

//import auth from './../Page/Firebase.cofig';



  export  const AuthContext=createContext(null)
  const AuthProvider = ({children}) => {
  
  
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const singInUser =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }
    

    useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          console.log(currentUser)
          setLoading(false)
          })

          return()=>{
           return  unSubscribe()
          }
    },[])

    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }

    const authInfo={createUser,loading,user,singInUser ,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node
}
export default AuthProvider;