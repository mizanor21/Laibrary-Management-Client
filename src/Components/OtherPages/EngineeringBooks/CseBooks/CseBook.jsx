import React from "react";

const CseBook = ({ cseBook }) => {
  const { img, title, auther, edition, publisher, quantity } = cseBook;
  console.log(cseBook);
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
      </div>
    </div>
  );
};

export default CseBook;
