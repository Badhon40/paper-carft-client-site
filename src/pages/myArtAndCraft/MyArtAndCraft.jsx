// import { useLoaderData } from "react-router-dom"

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";
import MyAddCarts from "../../components/myAddCarts/MyAddCarts";


const MyArtAndCraft = () => {
    // const items=useLoaderData()
    const {user}=useContext(AuthContext)
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myItem/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[user])
   
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-10">
            
              {
                items?.map(item=><MyAddCarts key={item._id} item={item}></MyAddCarts>
                
                )
              }

        
        </div>
    );
};

export default MyArtAndCraft;