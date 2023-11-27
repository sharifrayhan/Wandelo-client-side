import { createContext } from 'react';
import app from '../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth , onAuthStateChanged, updateProfile} from "firebase/auth"
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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


    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleRegister = (data, navigate) => {
        const name = data.name
        const email = data.email
        const password = data.password
        const url = data.photo
        const desiredRole = data.desiredRole
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            updateProfile(result.user,{
              displayName: name,
              photoURL: url,
            })
            if (desiredRole === 'guide') {
                toast.info('Your registration as a guide is pending admin approval.');
              }
            toast.info('Please Login to Continue');
            navigate('/Login')

            // logOut()
        })
        .catch(error=>{
            console.error(error)

        })
      }


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
        handleRegister,
        loading
    }

    return (
        <Context.Provider value={send}>{children}</Context.Provider>
    );
};

export default AllContext;