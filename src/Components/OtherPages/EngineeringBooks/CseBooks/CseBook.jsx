import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/UserContext";
import { toast } from "react-hot-toast";

const CseBook = ({ cseBook }) => {
  const { book_id, img, title, auther, edition, publisher, quantity } = cseBook;

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
          <button className="btn btn-sm mt-3">Borrow Book</button>
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
