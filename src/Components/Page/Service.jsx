import PropTypes from 'prop-types';
import {BsCurrencyDollar} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Service = ({load}) => {
    const {_id,title,price,img}=load
    return (
        <div>

         <div className="card w-96 bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
         <img src={img} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body  text-center">
         <h2 className="card-title">{title}</h2>
         <p className='flex flex-row text-2xl text-orange-500'>Price:<BsCurrencyDollar className="my-1"></BsCurrencyDollar>{price}</p>
         <div className="card-actions">
         <Link to={`/checkout/${_id}`} className="btn btn-primary ">Booking Now</Link>
         </div>
        </div>
</div>


        </div>
    );
};


Service.propTypes={
    load:PropTypes.object
}
export default Service;