import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyAddCarts = ({item}) => {
    const {
        _id,
        image,
        item_name,
        subcategory_Name,
        rating
    } = item;

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md my-4">
            <img className="w-full" src={image} alt={subcategory_Name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Item Name: {item_name}</div>
                <div className="font-semibold text-xl mb-2">Subcatagory: {subcategory_Name}</div>
                <p className="text-gray-700 text-base"><strong>Rating:</strong> {rating} stars</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end gap-2">
               <Link to={`/viewDetails/${_id}`}>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded-full">
                    <FaEye></FaEye>
                </button>
               </Link>
               <Link to={`/updateDetails/${_id}`}>
               <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold p-3 rounded-full">
                    <FaEdit />
                </button>
               </Link>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded-full">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default MyAddCarts;
