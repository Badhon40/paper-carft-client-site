import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import ArtAndCraft from '../pages/home/artAndCraft/ArtAndCraft';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';



const Routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/allArts',
                element:<ArtAndCraft></ArtAndCraft>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])


export default Routes