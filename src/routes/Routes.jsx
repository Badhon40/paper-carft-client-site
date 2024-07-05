const { createBrowserRouter } = require("react-router-dom");
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';



const Routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])


export default Routes