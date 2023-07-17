import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import book_create from "../../../../assets/logo/book-entry-logo.png";
import EnglishBook from "./EnglishBook";
import EnglishAddBook from "./EnglishAddBook";
import EnglishBookModal from "./EnglishBookModal";
import { AuthContext } from "../../../Contexts/UserContext";

const EnglishBooks = () => {
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
              <EnglishAddBook></EnglishAddBook>
            </form>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          {books.map((book) => (
            <EnglishBook
              key={book.book_id}
              book={book}
              setBook={setBook}
            ></EnglishBook>
          ))}
        </div>
      </div>
      <EnglishBookModal book={book}></EnglishBookModal>
    </div>
  );
};

export default EnglishBooks;
