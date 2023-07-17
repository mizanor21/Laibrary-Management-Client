import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import book_create from "../../../../assets/logo/book-entry-logo.png";
import EeeAddBook from "./EeeAddBook";
import EeeBook from "./EeeBook";
import { AuthContext } from "../../../Contexts/UserContext";
import EeeBookModal from "./EeeBookModal";

const EeeBooks = () => {
  const { user } = useContext(AuthContext);
  const books = useLoaderData();
  const [book, setBook] = useState([]);

  return (
    <div className="">
      <div className="container mx-auto flex justify-center items-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Open the modal using ID.showModal() method */}
          {user ? (
            <></>
          ) : (
            <button
              className="flex justify-center items-center"
              title="Book Add"
              onClick={() => window.my_modal_2.showModal()}
            >
              <img src={book_create} alt="" />
            </button>
          )}

          <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
              <EeeAddBook></EeeAddBook>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          {books.map((book) => (
            <EeeBook key={book.book_id} book={book} setBook={setBook}></EeeBook>
          ))}
        </div>
      </div>
      <EeeBookModal book={book}></EeeBookModal>
    </div>
  );
};

export default EeeBooks;
