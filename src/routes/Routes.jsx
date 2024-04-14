import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";
import About from "../pages/About/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ViewPropertyDetails from "../viewPropertyDetails/ViewPropertyDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement:<ErrorElement />,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/:id/',
                element: <ViewPropertyDetails></ViewPropertyDetails>,
                loader: () => fetch('luxuryHub.json')
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

        
    }
])

export default router;