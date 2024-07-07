import Categoty from "../../components/category/Categoty";
import Headers from "../../components/header/Headers";


const Home = () => {
    return (
        <div>

           <Headers></Headers>
           <h1 className="text-center text-4xl font-bold mt-10">All Subcategories</h1>

           <Categoty></Categoty>

            
        </div>
    );
};

export default Home;