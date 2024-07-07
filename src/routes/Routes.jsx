import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/home/Home';
import ArtAndCraft from '../pages/home/artAndCraft/ArtAndCraft';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Error from './../pages/error/Error';
import AddArtAndCraft from '../pages/addArtAndCraft/AddArtAndCraft';
import MyArtAndCraft from '../pages/myArtAndCraft/MyArtAndCraft';
import Private from '../components/private/Private';
import ViewDetalis from '../components/viewDetails/ViewDetalis';
import Update from '../components/update/Update';



const Routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
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
            },
            {
                path:'/addArtAndCraft',
                element:<Private><AddArtAndCraft></AddArtAndCraft></Private>
            },
            {
                path:'/myArtAndCarft',
                element:<Private><MyArtAndCraft></MyArtAndCraft></Private>,
    
            },
            {
                path:'/viewDetails/:id',
                element:<ViewDetalis></ViewDetalis>
            },
            {
                path:'/updateDetails/:id',
                element:<Update></Update>
            }
        ]
    }
])


export default Routes