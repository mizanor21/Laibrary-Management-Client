import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const EnglishAddBook = () => {
  const [title, setTitle] = useState("");
  const [auther, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [publisher, setPublisher] = useState("");
  const [img, setImg] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/english-book-add", {
        title: title,
        auther: auther,
        edition: edition,
        publisher: publisher,
        img: img,
        quantity: quantity,
      })
      .then(() => {
        toast.success(`Successfully book added!`);
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a Book</h1>
      <div className="mb-4">
        <label htmlFor="title" className="block font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          required
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
          onChange={(e) => setAuthor(e.target.value)}
          required
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
          onChange={(e) => setEdition(e.target.value)}
          required
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
          onChange={(e) => setPublisher(e.target.value)}
          required
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
          onChange={(e) => setImg(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block font-medium mb-1">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
          name="quantity"
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default EnglishAddBook;
