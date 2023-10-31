import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/login/login.svg";
import Nav from "../SharedPage/Nav";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
const SignUp = () => {
   const {createUser}=useContext(AuthContext)
    const signUpHandleButton=e=>{
        e.preventDefault()
        const form=e.target 
        const name=form.name.value 
        const email=form.email.value 
        const password=form.password.value 
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            toast("Registration successful!",result)
        })
        .catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message; 
                toast(errorMessage,errorCode)
            })
    }
    return (
        <div>
            <div>
      <Nav></Nav>
      <div className="flex flex-col lg:flex-row my-10">
        <div className="w-1/2 mt-20">
          <img src={logo} alt="" />
        </div>
        <div className="hero  w-1/2">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-cyan-500">Sing up!</h1>
            </div>
            <div className="card  w-96  ">
              <form className="card-body" onSubmit={signUpHandleButton}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                <ToastContainer />




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
                 
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Registration</button>
                </div>
              </form>
              <p className="text-xl text-orange-500 mx-10">Have an account <Link to="/in" className="text-blue-500">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default SignUp;