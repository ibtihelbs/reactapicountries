import Info from './Info';
import InfoArray from './InfoArray';
import Flag from './Flag'
const UiUx = ({getLink, countryData}) => {
    console.log(countryData)
  return (
    <div className='h-screen flex justify-center flex items-center'>
           <div className="h-96 gap-4 py-8 flex flex-col md:flex md:flex-row  shadow-md">
            <Flag countryData={countryData}  />
          <div  className="grid grid-cols-2 gap-1 flex align-center w-1/2">
         <Info countryData={countryData} />
         <InfoArray countryData={countryData} getLink={getLink} />
         <div className="flex gap-4">border: {countryData.borders ? countryData.borders.map(c => getLink(c)) : "it's an island"}
          </div>
          </div>
        </div>
    </div>
  )
}

export default UiUx
