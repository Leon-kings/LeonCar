// import React from 'react'

import { useState } from "react";
import FormInput from "../../components/action/FormInput"
import { inputs } from "../../assets/data/requestTeam";
import { Link } from "react-router-dom";

function FieldTeam() {
    const [values,setValues] = useState({
 
       email:"",
       telephone:"",
       address:"",
       routeNumber:"",
       problem:""
      
      });
    // fetching data from database
         // handleSubmit
  const handleSubmit = async(e) =>{
    e.preventDefault();
    // try{
     
    //   const dt = await axios.post('https://getcard.onrender.com/users/auth',values)
    //   .then(() =>{
       
    //       Navigate('/Dashboard')
        
    //     alert('User Logged in successfully');
    //    Navigate('/')
    
    //   })
    // }
    //   catch(err){
    //     console.log(err)
    //   }
    console.log(values);
 
  }; 



 
  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return (
    <>
    <div className="container">
        <div className="head">
            <h2 className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo numquam vitae provident laborum deleniti exercitationem! Inventore 
                ipsam repudiandae quasi. Tenetur ad cupiditate veniam corrupti neque voluptates pariatur! Suscipit, ipsa!
            </h2>
            
        </div>

        <div className="container">
<div className="left"></div>
 <div className="left">
      <form onSubmit={handleSubmit} className="form">
    
        <h2 className="title">Request Immediate Support Team</h2>
      
        
        <div className="contain">
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <div className="head">
        <button className="button">Submit</button>
        <p>If you don`t have an account got <a >
            <Link to="/Register"><b><button> Register</button></b>
             </Link> </a></p>
        </div>
        </div>
      


      </form>
     </div>
 </div>
    </div>
    </>
  )
}

export default FieldTeam