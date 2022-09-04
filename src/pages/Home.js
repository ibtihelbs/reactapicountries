import React, { useState, useEffect } from 'react'
import SingleCard from '../componants/SingleCard';
import Filters from '../componants/Filters';
import {FetchData} from '../utils/FetchData';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../componants/Loader';
const Home = () => {
  const dataSplit = (i)=>{
    let com;
    
    switch (true) {
      
      case [...Array(250).keys()].slice(25,50).includes(i) :
      com = 2
      
      break;
      case [...Array(250).keys()].slice(50,75).includes(i) :
      com = 3
      break;
      case [...Array(250).keys()].slice(75,100).includes(i) :
      com = 4
      break;
      case [...Array(250).keys()].slice(100,125).includes(i) :
      com = 5
      
      break;
      case [...Array(250).keys()].slice(125,150).includes(i) :
      com = 6
      
      break;
      case [...Array(250).keys()].slice(150,175).includes(i) :
      com = 7
      
      break;
      case [...Array(250).keys()].slice(175,200).includes(i) :
      com = 8
      
      break;
      case [...Array(250).keys()].slice(200,225).includes(i) :
      com = 9;
      
      break;
      case [...Array(250).keys()].slice(225,250).includes(i) :
      com = 10;
      break;
      default:
      com = 1
    }
    //console.log(com)
    return com;
  }
  
  const [urlCountries, setUrlCountries] = useState('https://restcountries.com/v3.1/all')
  const [countries, setCountries] = useState([]);
  const [splitte, setSplitted] = useState([])
  const [pageNum, setPageNum] = useState(1);
  useEffect(() =>{ 
    const fetchAllCountries = async() => {
    const fetchAllCountriesFn = await FetchData(urlCountries);
    //setCountries(fetchAllCountriesFn);
    setCountries( fetchAllCountriesFn.map((country, index) =>
        {return {...country, page : dataSplit(index)}}
    ))
    setSplitted( countries.filter((c)=> c.page <= pageNum) )
  }
fetchAllCountries(); 
},[countries,urlCountries, pageNum, splitte])
const nextPage = () =>{
  setPageNum(pageNum + 1)
}

 return (
    <div className="px-4 self-stretch w-screen">
      <Filters setUrlCountries={setUrlCountries} setCountries={setCountries} countries={countries}/>
      
         
      <InfiniteScroll
  dataLength={splitte.length} //This is important field to render the next data
  next={nextPage}
  hasMore={true}
  loader={<Loader/>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
  <div className="flex flex-wrap gap-6 py-5">
    {splitte.map((country, index)=>(<SingleCard key={index}   country={country}/>))}
  </div>
  </InfiniteScroll>
      </div> 
  )
}
export default Home;
/** {countries.map((country, index) => (
           <SingleCard key={index}   country={country}/>
         ))}
 * 
 className="flex flex-wrap gap-6 py-5"
 * 
 * 
 *        {countries.map((country, index) => (
         <SingleCard key={index}   country={country}/>
       ))}
        {countries.length !== 0 ? <SingleCard key={key}  country={countries[1]}/>: console.log("loading")}
 <Grid 
        height={10000}
        width={1000}
        columnWidth={100}
        rowHeight={1000}
        rowCount={250}
        itemSize={250}
        itemCount={countries.length}
        columnCount={3}
      >
          {GridItem}
      </Grid>
<VirtuosoGrid
       
       totalCount={countries.length}
       data = { countries }
       overscan={900}
       className="virtuosogrid-wrap"
       style={{position:"static" ,height: "100%", width: "100%", overflowY:"hidden", overflowX:"hidden" }}
       itemContent={(index) => (
            <SingleCard  key={index} country={countries[index]}/>
       )} 
       />
              
console.log( [...Array(25).keys()],
 [...Array(250).keys()].slice(25,50),
 [...Array(250).keys()].slice(50,75),
 [...Array(250).keys()].slice(75,100),
 [...Array(250).keys()].slice(100,150),
 [...Array(250).keys()].slice(150,200),
 [...Array(250).keys()].slice(200,250)
 )
        */