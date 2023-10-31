import { PropTypes } from "prop-types";




const BookingRow = ({ booking,addCardDelete,updateButton }) => {
  const {_id, img, CustomerName, email, ServiceName, date, price } = booking;
 




  return (
    <tr>
      <th>
        <button onClick={()=>addCardDelete(_id)} className="btn  btn-sm btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar w-16 h-16 rounded-full">
          {img && <img src={img} className="rounded-full" alt="" />}
        </div>
      </td>
      <td>{CustomerName}</td>
      <td>{email}</td>
      <td>{ServiceName}</td>
      <td>{date}</td>
      <td>{price}</td>

      <th>
        <button onClick={()=>updateButton(_id)} className="btn btn-ghost btn-xs">Confirm</button>
      </th>
    </tr>
  );
};
BookingRow.propTypes = {
  booking: PropTypes.object,
  addCardDelete: PropTypes.func,
  updateButton:PropTypes.func,
};
export default BookingRow;
