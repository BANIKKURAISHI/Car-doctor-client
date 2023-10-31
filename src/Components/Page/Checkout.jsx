import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const load = useLoaderData();
  const {title,price,_id,img } = load;
  const {user}=useContext(AuthContext)
  const handleBookServices=(e)=>{
    e.preventDefault()
    const form=e.target 
    const name=form.name.value
    const date=form.date.value
    const price=form.price.value
    const email=user?.email
    const order  ={
        CustomerName:name,
        email:email,
        img:img,
        ServiceName:title,
        ServiceId:_id,
        date:date,
        price:price,
      
        }
    console.log(order)

   fetch('http://localhost:5000/customer',{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(order)
   })
   .then(res=>res.json())
   .then(data=>{
    if(data.insertedId){
       Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your Order placed Successful!',
            footer: 'Thank you'
          })
    }

   })

  }
  return (
    <div className="">
        <h1 className="text-center text-3xl my-5">Book Services : {title}</h1>
        <form onSubmit={handleBookServices} className="card-body ">
       <div className="max-w-7xl mx-auto  grid w-[800px] gap-5 grid-cols-1 md:grid-cols-2">
       <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
        <label htmlFor="text">Date</label>
          <input
            type="date"
            name="date"
           
            className="input input-bordered"
            required
          />
        </div>
       
        <div className="form-control">
         <label htmlFor="Advanced">Advanced</label>
          <input
            type="text"
            name="price"
            defaultValue={price}
           
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
         <label htmlFor="Email">Email</label>
         <input
           type="email"
           name="email"
           defaultValue={user?.email}
           placeholder="Enter your email"
           className="input input-bordered"
           required
         />
       </div>
       {/* <div className="form-control">
       <textarea name="" id="" cols="30" rows="10"></textarea>
       </div> */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
       </div>
      </form>
    </div>
  );
};

export default Checkout;
