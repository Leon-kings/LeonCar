import { useEffect, useState } from "react";
import "../../assets/css/asmin/css.css"

export default function App() {
 const [ countries, setCountries ] = useState([]);
 
 useEffect(() => {
   const fetchata = async () => {
 
       const response = await fetch(
         'https://api.sampleapis.com/countries/countries');
          const data = await response.json();

          //use only 3 sample data
          setCountries( data.slice( 0,21) )
      
   }
 
   // Call the function
   fetchata();
}, []);
 
 return (
   <div className="container">
    
     <div className="container">
<div className="hd">
    <div className="xleft">
        <button className="btn">Add Post</button>
    </div>
    <div className="xleft">
        <button className="btn">View All</button>
    </div>
</div>
    
     <table className="table">
       <thead>
         <tr>
           <th>country</th>
           <th>capital</th>
           <th>flag</th>
         </tr>   
       </thead>   
       <tbody>
         {
         countries.map( (country,key) =>
         <tr key={key}>
             <td className='table-data'>{country.name }</td>
             <td className='table-data'>{country.capital }</td>
             <td className='table-data'><img width='40px' height='40px'
             src={ country.media.flag } alt="flag" /></td>
         </tr>
         )
       }
       </tbody>
     </table>
     </div>
   </div>
 );
}
