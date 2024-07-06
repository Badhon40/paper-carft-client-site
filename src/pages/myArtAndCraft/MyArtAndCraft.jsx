// import { useLoaderData } from "react-router-dom";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";


const MyArtAndCraft = () => {
    // const items=useLoaderData()
    const {user}=useContext(AuthContext)
    // console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:5000/myItems/${user?.email}`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    },[user])
    return (
        <div>
            {/* {
                items.length
            } */}

            hi
        </div>
    );
};

export default MyArtAndCraft;