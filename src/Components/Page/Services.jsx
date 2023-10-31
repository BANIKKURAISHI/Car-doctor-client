import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [loads,setLoads]=useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/services')
     .then(res=>res.json())
     .then(data=>{setLoads(data)})
    },[])
    return (
    <div>
        <div className="text-center my-10">
          <h2 className="text-xl text-red-400 font-bold">Services</h2>  
          <h1 className="text-4xl">Our Services area</h1>
          <p className="text-xl ml-80 w-1/2">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
        </div>
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                loads.map(load=><Service key={load._id} load={load}></Service>)
            }
        </div>
    </div>   
    );
};

export default Services;