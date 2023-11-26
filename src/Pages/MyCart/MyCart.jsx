import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import axios from "axios";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const total = totalPrice.toFixed(2);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/mycart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      {cart.length > 0 ? (
        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.picture} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.toyName}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="divider"></div>
          <div className="flex flex-col items-end">
            <p className="text-xl font-semibold">Items: {cart.length}</p>
            <p className="text-xl font-semibold">Total: ${total}</p>
          </div>
        </div>
      ) : (
        <div className="my-44 flex justify-center text-black font-semibold text-2xl">
          Your cart is empty
        </div>
      )}
    </div>
  );
};

export default MyCart;
