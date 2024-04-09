import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement:<ErrorElement />,
        children:[
            {
                path: '/',
                element: <Home></Home>,
            }
        ]

        
    }
])

export default router;