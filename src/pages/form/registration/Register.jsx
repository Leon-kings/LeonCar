
import  { useState } from "react";
import FormInput from "../../../components/action/FormInput"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// useNavigate
const App =()=>{
  const [values,setValues] = useState({
  
    email:"",
    password:"",
    fullname:"",
    phone:""
   
  });
  const Navigate =useNavigate()
  const inputs=[
    {
      id:1,
      name:"fullname",
      type:"text",
      placeholder:"Names",
      errorMessage:"Names needed ",
      label:"Your Names",
      required:true
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"email",
      errorMessage:"email should be valid and should incloude @ symbols",
      label:"email",
      required:true
    },
    {
      id:3,
      name:"phone",
      type:"text",
      placeholder:"+250787944577",
      errorMessage:"Phone should start with country code +250",
      label:"email",
      required:true
    },

    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"password",
      errorMessage:"password should be 8-12 characters include at least 1 letter and 1 symbol",
      label:"password",
      // pattern:"/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g",
      required:true
    },
 

    

  ];

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.post('https://backendproject-8m9r.onrender.com/users', values);
      alert('User Registered successfully');
      // console.log(response)
      Navigate('/login');
  } catch (err) {
      console.log(err);
      console.log('Handle the error');
  }  
 
  };



  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return(
    <>
      <div className="container">
<div className="left"></div>
    <div className="left">

    <div className="app">
   
      <form onSubmit={handleSubmit} >
       <div className="head">
        <h1>Register</h1>
        </div>
        <div className="contain">
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <div className="head">
        <button className="btn">Submit</button>
        <p>If you do have an account got <Link to="/Login"><b> <button>Login</button></b></Link> </p></div>
        </div>
      </form>
    </div>
    </div>
 
    </div>
    </>
  )
}
export default App ;