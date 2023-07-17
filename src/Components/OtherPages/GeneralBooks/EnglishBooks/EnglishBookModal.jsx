import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";

const EnglishBookModal = ({ book }) => {
  const { user } = useContext(AuthContext);
  const { img, title, auther, edition, publisher } = book;

  const handleSubmit = () => {
    toast.success("Successfully book added!");
    axios
      .post("http://localhost:5000/borrow-book-info", {
        email: user?.email,
        title,
        auther,
        edition,
        publisher,
        img,
      })
      .then(() => {
        toast.success("Successfully book added!");
        console.log("Book successfully added!");
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div>
      <div>
        <input type="checkbox" id="product_modal" className="modal-toggle" />
        <label htmlFor="product_modal" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <h3 className="text-center text-2xl font-serif font-bold mb-5 pb-2 border-b-2">
              Borrow Book By - {user?.email}
            </h3>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="email"
                defaultValue={user?.email}
                disabled
              />
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block font-medium mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="title"
                defaultValue={title}
                disabled
              />
            </div>
            <div className="mb-4">
              <label htmlFor="auther" className="block font-medium mb-1">
                Author
              </label>
              <input
                type="text"
                id="auther"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="auther"
                defaultValue={auther}
                disabled
              />
            </div>
            <div className="mb-4">
              <label htmlFor="edition" className="block font-medium mb-1">
                Edition
              </label>
              <input
                type="text"
                id="edition"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="edition"
                defaultValue={edition}
                disabled
              />
            </div>
            <div className="mb-4">
              <label htmlFor="publisher" className="block font-medium mb-1">
                Publisher
              </label>
              <input
                type="text"
                id="publisher"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="publisher"
                defaultValue={publisher}
                disabled
              />
            </div>
            <div className="mb-4">
              <label htmlFor="img" className="block font-medium mb-1">
                Image URL
              </label>
              <input
                type="text"
                id="img"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                name="img"
                defaultValue={img}
                disabled
              />
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Borrow Book
            </button>
          </label>
        </label>
      </div>
    </div>
  );
};

export default EnglishBookModal;
