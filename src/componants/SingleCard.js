import React from 'react'
import { Link } from 'react-router-dom';


const SingleCard = ({country}) => {
  return (
    <Link to={`/Country/${country.name.common}`} className="flex-[1_1_180px] shadow-md">
      <img className="w-full h-1/2" src={country.flags.png} alt={country.name.common}/>
      <ul className="p-4">
      <li  className="text-[20px]">{country.name.common}</li>
      <li>population: {country.population}</li>
      <li>capital:{country.capital} </li>
      <li>Region:{country.region}</li>
      </ul>
    </Link>
  )
}

export default SingleCard;
