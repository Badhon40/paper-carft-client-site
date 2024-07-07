// import { useLoaderData } from "react-router-dom"

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const MyArtAndCraft = () => {
    // const items=useLoaderData()
    const {user}=useContext(AuthContext)
    const [items,setItems]=useState([])
    const [control,setControl]=useState(false)
    useEffect(()=>{
        fetch(`http://localhost:5000/myItem/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setItems(data)
        })
    },[user,control])
    const handleDelete=(id)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch( `http://localhost:5000/delete/${id}`,{
                    method:"DELETE",
                
                })
                .then(res=>res.json())
                .then(data=>{
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
              });
              setControl(!control)

       

            }
          });

    }
})
}
   
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5 mt-10 ">
            
              {
                items?.map(item=><div key={item._id}> <div className="max-w-sm rounded-xl overflow-hidden shadow-md my-4">
                    <img className="w-full h-52" src={item.image} alt={item.subcategory_Name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Item Name: {item.item_name}</div>
                        <div className="font-semibold text-xl mb-2">Subcatagory: {item.subcategory_Name}</div>
                        <p className="text-gray-700 text-base"><strong>Rating:</strong> {item.rating} stars</p>
                    </div>
                    <div className="px-6 pt-4 pb-2 flex justify-end gap-2">
                       <Link to={`/viewDetails/${item._id}`}>
                            <div className="tooltip" data-tip="View Details">

                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full">
                                <FaEye></FaEye>
                            </button>
                            </div>
                       </Link>
                       <Link to={`/updateDetails/${item._id}`}>
                       <div className="tooltip" data-tip="Edit">
                       <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-3 rounded-full">
                            <FaEdit />
                        </button>
                        </div>
                       </Link>
                       <div className="tooltip" data-tip="Delete">
                        <button onClick={()=>handleDelete(item._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded-full">
                            <FaTrash />
                        </button>
                        </div>
                    </div>
                </div></div>
                
                )
              }

        
        </div>
    );
};

export default MyArtAndCraft;