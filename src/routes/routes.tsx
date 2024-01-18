import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<PrivateRoute><Home/></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    },
    
    {
        path:'*',
        element:<NotFound/>
    }
])

export default routes;