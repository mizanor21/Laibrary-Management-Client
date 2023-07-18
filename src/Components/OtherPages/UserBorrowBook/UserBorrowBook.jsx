import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const UserBorrowBook = () => {
  const { user } = useContext(AuthContext);

  const [borrowBooks, setBorrowBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/borrow-books-spe?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBorrowBooks(data));
  }, [user?.email]);

  const deleteBook = (borrow_id) => {
    toast.success(`Deleted Book!`);
    axios
      .delete(`http://localhost:5000/borrow-books-delete/${borrow_id}`)
      .then(() => {
        toast.success(`Deleted Book!`);
      });
  };

  return (
    <div className="container mx-auto my-10">
      <div className="overflow-x-auto flex justify-center">
        <table className="table max-w-[70%]">
          {/* head */}
          <thead>
            <tr className="bg-base-300">
              <th></th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Book Image</th>
              <th>Return Book</th>
            </tr>
          </thead>
          <tbody className="">
            {borrowBooks.map((borrowBook, i) => (
              <tr className="border-2 ">
                <th>{i + 1}</th>
                <td>{borrowBook?.title}</td>
                <td>{borrowBook?.auther}</td>
                <td>{borrowBook?.publisher}</td>
                <td>
                  <img className="w-16" src={borrowBook?.img} alt="" />
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteBook(borrowBook?.borrow_id);
                    }}
                    className="btn btn-sm"
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBorrowBook;
