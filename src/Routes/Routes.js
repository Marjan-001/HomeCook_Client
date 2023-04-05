import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../LayOut/Mainpage";
import AddReview from "../pages/AddReview/AddReview";
import Detail from "../pages/Detail/Detail";
import About from "../pages/Home/About/About";
import Contact from "../pages/Home/Contact/Contact";


import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/SignUp/Signup";
import Allservices from "../pages/Home/Services/Allservices/Allservices"
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([

    {

        path: "/",
        element: <Mainpage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/services',
                element: <PrivateRoute><Allservices /></PrivateRoute>

            },
            {
                path: '/services/:id',
                element: <Detail />
            },

            {
                path: 'addreview',
                element: <PrivateRoute><AddReview /></PrivateRoute>
            }
            ,



        ]


    }










])