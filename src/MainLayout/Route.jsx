import { createBrowserRouter } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Log from "../Components/Page/Log";
import SignUp from "../Components/Page/SignUp";
import Checkout from "../Components/Page/Checkout";
import Booking from "../Components/Page/Booking";
import PrivetRoute from "../Components/AuthProvider/PrivetRoute";



const myCreateRoute=createBrowserRouter([{
  path:"/",
  errorElement:<Error></Error>,
  element:<Home></Home>
},
{
  path:"/in",
  element:<Log></Log>
},
{
  path:"/up",
  element:<SignUp></SignUp>
},
{
  path:"/checkout/:id",
  element:<PrivetRoute><Checkout></Checkout></PrivetRoute>,
  loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
},

{
  path:'/customer',
  element:<PrivetRoute><Booking></Booking></PrivetRoute>
},




])

export default myCreateRoute