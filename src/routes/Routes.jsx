import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import CreateAssingment from "../components/CreateAssingment";
import Assingment from "../components/Assingment";
import Error from "../components/Error";
import MyAssingment from "../components/MyAssingment";
import Update from "../components/Update";
import CardDetails from "../components/CardDetails";
import PrivateRoute from "./PrivateRoutes";
import TakeAssi from "../components/TakeAssi";
import MySubmit from "../components/MySubmit";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>, 
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_USER}/Feature`)
        },
        {
          path: '/assingment',
          element: <Assingment></Assingment>,
          loader: ()=> fetch(`${import.meta.env.VITE_API_USER}/assingments`)
        },
        {
          path: '/assingment/:id',
          element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        },
        
        
        {
          path: '/create',
          element:<PrivateRoute><CreateAssingment></CreateAssingment></PrivateRoute> ,
        },
        {
          path: '/my-assingment',
          element: <PrivateRoute><MyAssingment></MyAssingment></PrivateRoute> ,
        },
        {
          path: '/update/:id', // Add a forward slash before 'update'
          element: <Update></Update>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_USER}/assingments/${params.id}`),
        },
        
        {
          path: '/take',
          element: <TakeAssi></TakeAssi>,
        },
        {
          path: '/submit',
          element: <MySubmit></MySubmit>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
      ]
    },
  ]);

  export default router;