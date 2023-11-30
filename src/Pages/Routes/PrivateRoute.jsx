import { Navigate, useLocation } from 'react-router-dom';

import {  useContext } from 'react';
import { Context } from '../../Context/AllContext';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(Context)
    const location = useLocation()


    if (loading){

        return <center className=' mt-60'><span className="loading loading-ball loading-lg"></span></center>
    
    }

    if(user){

        return children

    }
    
    else{

        return <Navigate state={location.pathname} to={"/Login"}></Navigate>
    }

 
};



export default PrivateRoute;