import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext";

const UserBorrowed = () => {
  const { user } = useContext(AuthContext);

  const [borrowBooks, setBorrowBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/borrow-books-spe?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBorrowBooks(data));
  }, [user?.email]);
  return (
    <div>
      <h5 className="absolute top-20 z-50 right-16 border-b-8 border-b-green-600 text-8xl font-bold text-center bg-slate-50 shadow-2xl p-12">
        {borrowBooks.length}
      </h5>
    </div>
  );
};

export default UserBorrowed;
