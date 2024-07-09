import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetalis = () => {
const {id}=useParams()
console.log(id)
const [item,setItem]=useState({})
    useEffect(()=>{
        fetch(`https://server-site-qeqmcgztd-badhon-ranis-projects.vercel.app/${id}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setItem(data)
        })
    },[id])

   return(
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src={item.image} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{item.item_name}</a>
				<p className="text-md font-semibold dark:text-gray-600">
                    {
                        item.subcategory_Name
                    }
				</p>
			</div>
			<div className="dark:text-gray-800">
				<p>Short Description : {item.short_description}</p>
                <p>Price : $ {item.price}</p>
                <p>Rating : {item.rating}</p>
                <p>Customization : {item.customization}</p>
                <p>Processing Time : {item.processing_time}</p>
			</div>
		</div>
	</div>
</div>
   );
};

export default ViewDetalis;