import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";



const ArtAndCraft = () => {
  const [allCards,setAllCards]=useState([])
   fetch("http://localhost:5000/allItem") 
   .then(res=>res.json())
   .then(data=>{
    setAllCards(data)
   })

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 mt-10">
            {
                allCards.map(cards=><div key={cards._id}>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                            src={cards.image}
                            alt="Album" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{cards.item_name}</h2>
                            <p>{cards.subcategory_Name}</p>
                            <div className="card-actions justify-end">
                            <Link to={`/viewDetails/${cards._id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full">
                                        <FaEye></FaEye>
                                    </button>
                           </Link>
                            </div>
                        </div>
                        </div>
                </div>)
            }
        </div>
    );
};

export default ArtAndCraft;