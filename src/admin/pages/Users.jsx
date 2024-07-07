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
      const response = await fetch('https://getcard.onrender.com/users/auth'); // Replace with your API endpoint
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
  <div className="container">
 <div className="line">
  <div className="xleft">
    <button className="btn">Add Users</button>
  </div>
  <div className="xleft">
      <button className="btn">View All</button>
  </div>

 </div>

 
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )}
  </div>   
     </div>
  </> 
);
};

export default DataFetcher;