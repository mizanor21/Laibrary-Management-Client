import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/UserContext";
import { toast } from "react-hot-toast";

const CseBook = ({ book, setBook }) => {
  const { book_id, img, title, auther, edition, publisher, quantity } = book;

  const deleteBook = (id) => {
    axios.delete(`http://localhost:5000/cse-book-delete/${id}`).then(() => {
      toast.success(`Deleted Book!`);
    });
  };
  const { user } = useContext(AuthContext);

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="w-[300px] h-[300px]">
        <img src={img} alt="Book img not found!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{quantity}</div>
        </h2>
        <i>
          <span className="font-bold">Auther: </span>
          {auther}
        </i>
        <div className="card-actions">
          <div className="badge badge-outline">{edition}</div>
          <div className="badge badge-outline">{publisher}</div>
        </div>
        {user ? (
          <label
            onClick={() => setBook(book)}
            htmlFor="product_modal"
            className="btn btn-outline btn-warning"
          >
            Book Now
          </label>
        ) : (
          <button
            onClick={() => {
              deleteBook(book_id);
            }}
            className="btn btn-sm mt-3"
          >
            Delete Book
          </button>
        )}
      </div>
    </div>
  );
};

export default CseBook;
