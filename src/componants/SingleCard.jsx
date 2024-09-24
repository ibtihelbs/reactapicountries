import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ country, index }) => {
  return (
    <Link
      to={`/Country/${country.name.common}`}
      className="SingleCard  self-start shadow-md"
    >
      <img
        className="w-full h-[200px] object-cover"
        src={country.flags.png}
        alt={country.name.common}
        loading="lazy"
      />
      {index}
      <ul className="p-4">
        <li className="text-[20px]">{country.name.common}</li>
        <li>population: {country.population}</li>
        <li>capital:{country.capital} </li>
        <li>Region:{country.region}</li>
      </ul>
    </Link>
  );
};

export default SingleCard;
