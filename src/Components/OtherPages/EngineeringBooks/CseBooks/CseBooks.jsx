import React from "react";
import { useLoaderData } from "react-router-dom";
import CseBook from "./CseBook";
import book_create from "../../../../assets/logo/book-entry-logo.png";

const CseBooks = () => {
  const cseBooks = useLoaderData();
  console.log(cseBooks);
  return (
    <div className="container mx-auto flex justify-center items-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Open the modal using ID.showModal() method */}
        <button
          className="flex justify-center items-center"
          title="Book Add"
          onClick={() => window.my_modal_2.showModal()}
        >
          <img src={book_create} alt="" />
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        {cseBooks.map((cseBook) => (
          <CseBook key={cseBook.book_id} cseBook={cseBook}></CseBook>
        ))}
      </div>
    </div>
  );
};

export default CseBooks;
