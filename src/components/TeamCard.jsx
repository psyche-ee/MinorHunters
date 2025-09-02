import React from "react";

const TeamCard = ({ src, name, position, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl bg-white transition transform hover:-translate-y-2 duration-300 w-64"
    >
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={src}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
