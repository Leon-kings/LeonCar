import  { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backendproject-8m9r.onrender.com/users'); 
      // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

 return (
  <>
  <div className="container ">
 
    {loading ? (
   alert('Data fetched successfull ....')
    ) : error ? (
   alert('Oops sorry !!!')
    ) : (
         <div className="container">
                    <div className="table">
                <table className="table">
                  <thead>
                  <th className='head'>ID</th>
                  <th className='head'>USERNAMES</th>
                  <th className='head'>EMAIL</th>
                  <th className='head'>TELEPHONE</th>
                  <th className='head'>PASSCODES</th>
                  </thead>
                  <div>
        {data.map((item) => (

          <div className="box" key={item.id}>
          

                  <tbody>
                    <tr className='head'>
               <td>{item.name} </td>
                    </tr>
                  </tbody>
                
        
          
         
                  </div>
        ))}
     </div>  
     
   
   
    </table>
     </div>
     </div>

   )} 
    </div>
  </> 
)
};

export default DataFetcher;