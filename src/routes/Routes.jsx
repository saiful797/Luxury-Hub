import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";
import About from "../pages/About/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ViewPropertyDetails from "../pages/viewPropertyDetails/ViewPropertyDetails";
import PrivateRoute from "../pages/Shared/privateRoute/PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Roots></Roots>,
        errorElement:<ErrorElement />,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/:id/',
                element: <PrivateRoute>
                    <ViewPropertyDetails></ViewPropertyDetails>
                </PrivateRoute>,
                loader: () => fetch('luxuryHub.json')
            },
            {
                path:'/about',
                element: <PrivateRoute>
                    <About></About>
                </PrivateRoute>
                
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>
            }
        ]

        
    }
])

export default router;