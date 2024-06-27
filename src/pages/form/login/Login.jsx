import  { useState } from "react";
// import React from "react";
// import "../../../css/form/universal.css"
import FormInput from "../../../components/action/FormInput"
// import {useNavigate} from "react-router-dom"
// import Screenshot from "../../../assets/images/Screenshot.png"
import { Link } from "react-router-dom";
// import axios from "axios";
const Login =()=>{
  
  const [values,setValues] = useState({
 
    email:"",

    password:"",
  
  });
  // const Navigate =useNavigate();
  const inputs=[
  
 
    {
      id:1,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },
 
    {
      id:2,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"passworx should be 8-12 characters include at least 1 letter and 1 symbol",
      label:"password",
    
      required:true
    },
  ];

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
  return(
    <>
  <div className="container">
<div className="left"></div>
 <div className="left">
      <form onSubmit={handleSubmit} className="form">
        <div className="head">
        <h2>Log in</h2>
        </div>
        
        <div className="contain">
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <div className="head">
        <button className="button">Submit</button>
        <p>If you don`t have an account got <a ><Link to="/Register"><b><button> Register</button></b> </Link> </a></p>
        </div>
        </div>
      


      </form>
     </div>
 </div>
    </>
  )
}
export default Login ;