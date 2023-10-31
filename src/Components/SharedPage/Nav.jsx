import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
  const {user,logOut}=useContext(AuthContext)
  const logOutButton=()=>{
    
    logOut()
    .then(
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Now You are in logOut!',
        footer: 'Thank you'
      })
      .catch(error=>{
        const errorCode = error.code;
        const errorMessage = error.message; 
        toast(errorMessage,errorCode)
    })

      
    )
  }
  const navItem=<>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  {user?.email ?<>
  <li><Link to="/customer">My Booking</Link></li>
  <li><button onClick={logOutButton}>Logout</button></li>
  </> :
  <li><Link to='/in'>Login</Link></li>}
  <li><Link to='/up'>SingUp</Link></li>

  </>

 


  
  return (
    <div className="navbar bg-base-100 p-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navItem}
      </ul>
    </div>
    <Link className="btn btn-ghost normal-case text-xl">
      <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItem}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-warning">APPOINTMENT</button>
  </div>
  <ToastContainer />
</div>
 
  );
};

export default Nav;
