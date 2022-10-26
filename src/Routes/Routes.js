import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Course from "../components/Courses/Course";
import Faq from "../components/Faq/Faq";
import Blog from "../components/Blog/Blog";
import SingleCoures from "../components/singleCourse/SingleCoures";
import Premium from "../components/GetPremium/Premium";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";



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
                path: 'course',
                element: <Course></Course>,          
            },
            {
                path:"/courses/:id",
                element:<SingleCoures></SingleCoures>
              },
            {
                path: 'faq',
                element: <Faq></Faq>,          
            },
            {
                path: 'faq',
                element: <Faq></Faq>,          
            },
            {
                path: 'blog',
                element: <Blog></Blog>,          
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <Signup />
            },
            {
                path: '/premium',
                element: <PrivateRoute><Premium /></PrivateRoute>
            }
        ]
    },
       
    
           
        
    
])
