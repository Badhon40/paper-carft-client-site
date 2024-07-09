import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../firebaseProvider/FirebaseProvider";


const AddArtAndCraft = () => {
    const {user}=useContext(AuthContext)
    const handleAddItem = (e) => {
   
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
        email: user.email,
        name: user.displayName
      };

      fetch('https://server-site-qeqmcgztd-badhon-ranis-projects.vercel.app/addItem',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data?.insertedId){
            toast.success('Item added successfully!');
        }
      })
  
    // You would typically make an API call here to add the item
    // console.log(data);
    
  };

  return (
    <div className="flex justify-center my-14">
      <div className="w-full mx-5 md:mx-20 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Add Craft Item</h1>
        <form onSubmit={handleAddItem} className="space-y-6 ">
          <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="image" className="block dark:text-gray-600">Image URL</label>
            <input type="text" name="image" id="image" placeholder="Image URL" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="item_name" className="block dark:text-gray-600">Item Name</label>
            <input type="text" name="item_name" id="item_name" placeholder="Item Name" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
          <label htmlFor="subcategory_Name" className="block dark:text-gray-600">Subcategory Name</label>
            <select type='text' name="subcategory_Name" id="subcategory_Name"className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required >
            <option value="" disabled selected hidden>Select Subcategory</option>
              <option value="Card Making">Card Making</option>
              <option value="Scrap booking">Scrapbooking</option>
              <option value="Paper Quilling Origami">Paper Quilling & Origami</option>
              <option value="Glass Painting">Glass Painting</option>
              <option value="Lampworking">Lampworking</option>
              <option value="Glass Dying Staining">Glass Dying & Staining</option>
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="short_description" className="block dark:text-gray-600">Short Description</label>
            <input type="text" name="short_description" id="short_description" placeholder="Short Description" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block dark:text-gray-600">Price</label>
            <input type="number" name="price" id="price" placeholder="Price" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="rating" className="block dark:text-gray-600">Rating</label>
            <input type="number" name="rating" id="rating" placeholder="Rating" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="customization" className="block dark:text-gray-600">Customization</label>
            <select name="customization" id="customization" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required>
            <option value="" disabled selected hidden>Select Customization</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="processing_time" className="block dark:text-gray-600">Processing Time</label>
            <input type="text" name="processing_time" id="processing_time" placeholder="Processing Time" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required/>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="stockStatus" className="block dark:text-gray-600">Stock Status</label>
            <select name="stockStatus" id="stockStatus" className="w-full px-4 py-3 rounded-md border dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" required>
            <option value="" disabled selected hidden>Select Stock Status</option>
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
          </div>
        </div>
          <button type="submit" className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Add</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};


export default AddArtAndCraft;