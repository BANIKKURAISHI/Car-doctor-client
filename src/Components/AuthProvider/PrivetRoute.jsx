import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate,useLocation  } from "react-router-dom";
import { PropTypes } from 'prop-types';


const PrivetRoute = ({children}) => {
  const location=useLocation()
  //console.log(location.pathname)
  const {user,loading}=useContext(AuthContext)
  if(loading){
    return <progress className="progress w-56"></progress>}
   
  if(user?.email){
    return children
  }
  return <Navigate state={location.pathname} to="/in" replace></Navigate>
//state={{from:location.pathname}} or state={location.pathname}

}

PrivetRoute.propTypes={
    children :PropTypes.node
}
export default PrivetRoute;
