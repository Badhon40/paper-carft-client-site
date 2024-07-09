import { useState } from "react";



const Categoty = () => {
    const [cards,setCards]=useState([])
    fetch("https://server-site-qeqmcgztd-badhon-ranis-projects.vercel.app/category")
    .then(res=>res.json())
    .then(data=>setCards(data))
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 mx-10 py-10">
           
            {
                cards.map(card=><div key={card._id}>
                    <div className="card h-96 bg-base-100 shadow-xl">
                    <figure className="h-56">
                        <img
                        src={card.image}
                        alt="Shoes" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {card.subcategory_Name}
                        </h2>
                        <p>{card.short_description}</p>
                       
                    </div>
                    </div>
                   
                </div>)
            }
            
        </div>
    );
};

export default Categoty;