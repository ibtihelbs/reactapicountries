import React from 'react'

const Flag = ({countryData}) => {
  const flag = countryData.flags.png;
  return (
    
      <img className='w-full' src={flag} alt={countryData.name}/>
    
  )
}

export default Flag
