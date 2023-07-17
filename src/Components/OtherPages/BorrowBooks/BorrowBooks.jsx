import React from "react";
import { useLoaderData } from "react-router-dom";

const BorrowBooks = () => {
  const borrowBooks = useLoaderData();
  return (
    <div className="container mx-auto my-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300">
              <th></th>
              <th>User Email</th>
              <th>Book Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Book Image</th>
            </tr>
          </thead>
          <tbody>
            {borrowBooks.map((borrowBook, i) => (
              <tr className="border-2">
                <th>{i + 1}</th>
                <td>{borrowBook?.email}</td>
                <td>{borrowBook?.title}</td>
                <td>{borrowBook?.auther}</td>
                <td>{borrowBook?.publisher}</td>
                <td>
                  <img className="w-16" src={borrowBook?.img} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowBooks;
