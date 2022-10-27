
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainPage from './layOut/MainPage';
import Home from './pages/home/Home';
import Course from './pages/leftside/Course/Course';
import CourseDetails from './pages/leftside/Course/CourseDetails';
import Login from './Authuntication/Login/Login';
import Register from './Authuntication/Register/Register';

import Terms from './tersmsAndCondition/Terms';
import Blog from './Blogs/Blog';
import PrivateRoute from './privateRoute/PrivateRoute';
import Courses from './pages/Course/Course';
import Faq from './pages/Faq/Faq';
import CheckOut from './pages/CheckOut/CheckOut';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/course",
          element: <Courses />,
          loader: () => fetch("http://localhost:5000/courses"),
        },
        {
          path: "/course/:id",
          element: <Course></Course>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/category/${params.id}`),
        },
        {
          path: "/coursedetails/:id",
          element:<CourseDetails></CourseDetails>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/courses/${params.id}`),
        },
        
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/terms",
          element: <Terms></Terms>,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/blog",
          element: 
            <PrivateRoute>
              <Blog></Blog>
            </PrivateRoute>
          ,
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckOut /></PrivateRoute>,
        
            
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);


  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
