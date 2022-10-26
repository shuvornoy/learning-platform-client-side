import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home />,
                        
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            },
        ]
    },
       
    
           
        
    
])
