import { useContext } from 'react';
import { AuthContext } from '../../firebaseProvider/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading)
        {
            return (<div className="text-center mt-44">
            <span className="loading loading-dots text-4xl loading-lg"></span>
           </div>)
        }
        if(user){
            return <>{children}</>
        }
        else {
            
            return <Navigate to='/login' state={location?.pathname}></Navigate>
        }
};

export default Private;