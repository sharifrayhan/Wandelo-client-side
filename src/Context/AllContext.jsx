import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth , onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import useAxiosSecure from '../Axios/useAxiosSecure';


export const Context = createContext(null)
const auth = getAuth(app)
console.log(auth)

const AllContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // const axiosSecure = useAxiosSecure()



    // if (loading) {
        
          
    //  <img className=' h-screen w-screen' src="https://i.ibb.co/1fKG6Yb/loading.gif" alt="" />
          
  
    // }

// User Creation
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

// User login

const signIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}


//   On auth State Changed Activities
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(' on auth state activity', currentUser);
        const userEmail = currentUser?.email || user?.email;
        const userName = currentUser?.displayName;
        setUser(currentUser)
        setLoading(false)
        if(currentUser){
            const notifyLogIn = () => toast.success(`Welcome back ${userName}`);
            notifyLogIn()
            const loggeduserinfo = {email: userEmail}
            console.log(loggeduserinfo)
            axios.post('http://localhost:3000/jwt',loggeduserinfo,{withCredentials: true})
            .then(res=>{
                console.log(res.data)
            })
        }
        else{
            const loggeduserinfo = {email: userEmail}
            axios.post('http://localhost:3000/logout',loggeduserinfo,{withCredentials: true} )
            .then(res=>{
                console.log(res.data)
                if(res.data.success === true){
                    const notifyLogOut = () => toast('Logged out user');
                    notifyLogOut()
                }
            })
        }
    });
    return () =>{
        unSubscribe();
    }
},[user?.email])


  // create log out method
    
  const logOut = () => {
    return signOut(auth);
}



    const send = {
        createUser,
        updateProfile,
        loading,
        signIn,
        user,
        logOut,
    }

    return (
        <Context.Provider value={send}>{children}<ToastContainer />
        </Context.Provider>
    );
};

export default AllContext;