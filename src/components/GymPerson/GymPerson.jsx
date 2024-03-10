import React from "react";

const GymPerson = ({ person }) => {
  const { image, details, description, schedule, price } = person;
  return (
    <div className="card w-96 bg-gray-200 text-slate-900 shadow-xl mx-auto">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {details}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{schedule}</div>
          <div className="badge badge-outline">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default GymPerson;
