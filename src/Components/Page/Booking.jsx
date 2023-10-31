import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";
const Booking = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);
  
  const url = `http://localhost:5000/customer?email=${user?.email}`;
  useEffect(() => {
    axios.get(url,{withCredentials:true})
      .then(res=>{
        setBooking(res.data)
      })
    
    //  fetch(url)
    //    .then((res) => res.json())
    //    .then((data) => {
    //      setBooking(data);
    //      console.log(data);
    //   });
  }, [url]);
  const addCardDelete=(id)=>{
    //     const proceed=confirm('Are you sure want to delete')
    //     if(proceed){
    //         fetch(`http://localhost:5000/customer/${id}`,{
    //         method:"DELETE"
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             console.log(data)
    //         })
    //     }
    // }
          Swal.fire({
           title: 'Are you sure?',
           text: "You won't be able to revert this!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, delete it!'
         }).
         then((result) => {
           if (result.isConfirmed) {
            fetch(`http://localhost:5000/customer/${id}`,{
                method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
    
                          const deleteItem=booking.filter(load=>load._id !==id)
                          setBooking(deleteItem)
                    }
                }
         )}
            })}
    ////////////////////////////update ------------------------------------

const updateButton =(id)=>{
   
         fetch(`http://localhost:5000/customer/${id}`,{
             method:"PATCH",
             headers:{"content-type":"application/json"},
             body:JSON.stringify({status:"confirm"})
             })
             .then(res=>res.json())
             .then(data=>{
            //  if(data.modifiedCount>0){
                console.log(data)
           //   }
             }
      )}
         


    
    


  return (
    <div>
      <h1 className="text-4xl">Booking {booking.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>
                Date
              </th>
              <th>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
           {
            booking.map(book=><BookingRow key={book._id}
            booking={book} addCardDelete={addCardDelete}
            updateButton={updateButton}></BookingRow>)
           }
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booking;
