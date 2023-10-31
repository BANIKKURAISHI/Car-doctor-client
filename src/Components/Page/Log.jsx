import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from "../../assets/images/login/login.svg";
import Nav from "../SharedPage/Nav";
import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Log = () => {
  const location=useLocation()
  //console.log(location)
  const navigate =useNavigate()
    const {singInUser}=useContext(AuthContext)
    const loginHandleButton=(e)=>{
       
        e.preventDefault()
        const form=e.target
        const email=form.email.value 
        const password=form.password.value 
        // const formInfo={email,password}
        // console.log(formInfo)

        singInUser(email,password)
        .then(result=>{
            toast("Login successful!",result)
            const loginUser=result.user
            console.log(loginUser)
            const user ={email}
            
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then(res=>{
              console.log(res.data)
              if(res.data.success){
              navigate(location?.state ?location?.state :"/")
              }
            })
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message; 
            toast(errorMessage,errorCode)
        })

    }
  return (
    <div>
      <Nav></Nav>
      <div className="flex flex-col lg:flex-row my-10">
        <div className="w-1/2 mt-20 ">
          <img src={logo} alt="" />
        </div>
        <div className="hero  w-1/2">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-cyan-500">Login now!</h1>
            </div>
            <div className="card  w-96  ">
              <form className="card-body" onSubmit={loginHandleButton}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p className="text-xl text-orange-500 mx-10">New to Car Doctors <Link to="/up" className="text-blue-500">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Log;
