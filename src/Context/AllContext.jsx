import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import { getAuth , onAuthStateChanged} from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import useAxiosSecure from '../Axios/useAxiosSecure';


export const Context = createContext(null)
const auth = getAuth(app)
console.log(auth)

const AllContext = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const axiosSecure = useAxiosSecure()



    // if (loading) {
        
          
    //  <img className=' h-screen w-screen' src="https://i.ibb.co/1fKG6Yb/loading.gif" alt="" />
          
  
    // }



//   On auth State Changed Activities
 useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(' on auth state activity', currentUser);
        const userEmail = currentUser?.email || user?.email;
        setUser(currentUser)
        setLoading(false)
        if(currentUser){
            const loggeduserinfo = {email: userEmail}
            console.log(loggeduserinfo)
            axiosSecure.post('/jwt',loggeduserinfo,{withCredentials: true})
            .then(res=>{
                console.log(res.data)
            })
        }
        else{
            const loggeduserinfo = {email: userEmail}
            axiosSecure.post('/logout',loggeduserinfo,{withCredentials: true} )
            .then(res=>{
                console.log(res.data)
            })
        }
    });
    return () =>{
        unSubscribe();
    }
},[user?.email, axiosSecure])


    const send = {

    }

    return (
        <Context.Provider value={send}>{children}</Context.Provider>
    );
};

export default AllContext;