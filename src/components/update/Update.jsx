import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";



const Update = () => {
    const {id}=useParams()
    const [item,setItem]=useState({})
    useEffect(()=>{
        fetch(`https://server-site-drab-gamma.vercel.app/${id}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setItem(data)
        })
    },[id])

    const handleUpdate=(e)=>{
        e.preventDefault();
    const data = {
        image: e.target.image.value,
        item_name: e.target.item_name.value,
        subcategory_Name: e.target.subcategory_Name.value,
        short_description: e.target.short_description.value,
        price: e.target.price.value,
        rating: e.target.rating.value,
        customization: e.target.customization.value,
        processing_time: e.target.processing_time.value,
        stockStatus: e.target.stockStatus.value,
      };
      fetch(`https://server-site-drab-gamma.vercel.app//${id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(res=>{
        if(res.modifiedCount>0){
            setItem(res)
            toast.success("Updated Infomation")

        }
      })
     
    }
    return (
         <div className="flex justify-center my-14">
      <div className="w-full mx-5 md:mx-20 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Update Craft Item</h1>
        <form onSubmit={handleUpdate} className="space-y-6 ">
          <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="image" className="block dark:text-gray-600">Image URL</label>
            <input type="text" name="image" id="image" defaultValue={item.image} placeholder="Image URL" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="item_name" className="block dark:text-gray-600">Item Name</label>
            <input type="text" name="item_name" id="item_name" defaultValue={item.item_name} placeholder="Item Name" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
          <label htmlFor="subcategory_Name" className="block dark:text-gray-600">Subcategory Name</label>
            <select name="subcategory_Name" id="subcategory_Name" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required >
            <option value="" disabled selected hidden>{item.subcategory_Name}</option>
              <option value="Card Making">Card Making</option>
              <option value="Scrap Booking">Scrap Booking</option>
              <option value="Paper Quilling Origami">Paper Quilling & Origami</option>
              <option value="Glass Painting">Glass Painting</option>
              <option value="Lampworking">Lampworking</option>
              <option value="Glass Dying Staining">Glass Dying & Staining</option>
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="short_description" className="block dark:text-gray-600">Short Description</label>
            <input type="text" name="short_description" id="short_description" defaultValue={item.short_description} placeholder="Short Description" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block dark:text-gray-600">Price</label>
            <input type="number" name="price" id="price" placeholder="Price" defaultValue={item.price} className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="rating" className="block dark:text-gray-600">Rating</label>
            <input type="number" name="rating" id="rating" placeholder="Rating" defaultValue={item.rating} className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="customization" className="block dark:text-gray-600">Customization</label>
            <select name="customization" id="customization" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required>
            <option value="" disabled selected hidden>{item.customization}</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="processing_time" className="block dark:text-gray-600">Processing Time</label>
            <input type="text" name="processing_time" id="processing_time" defaultValue={item.processing_time} placeholder="Processing Time" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="stockStatus" className="block dark:text-gray-600">Stock Status</label>
            <select name="stockStatus" id="stockStatus" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required>
            <option value="" disabled selected hidden>{item.stockStatus}</option>
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Update</button>
          <ToastContainer />
        </form>
      </div>
    </div>
    );
};

export default Update;