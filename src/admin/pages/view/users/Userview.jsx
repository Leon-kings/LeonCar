// import React from 'react'
import axios from 'axios'


const Userview = () => {
async () => {
 
    try {

    const Response = await axios.post('https://backendproject-8m9r.onrender.com/users');
      console.log(Response.data)
      
    } catch (err) {
      console.log(err);
    }

};
  return (
    <div>
      <div className="container">
        <div className="title">USER VIEW ALL</div>
      
      </div>
      
    </div>
  )
}

export default Userview
