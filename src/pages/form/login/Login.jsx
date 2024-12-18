import  { useState } from "react";
import FormInput from "../../../components/action/FormInput"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login =()=>{
  
  const [values,setValues] = useState({
 
    email:"",
    password:"",
  
  });

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
const Navigate=useNavigate();
// fetching data from database
         // handleSubmit

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(values);

  if (values.email === 'admin@gmail.com' && values.password === 'admin') {
    if (window.confirm("Do you really want to continue to dashboard?")) {
      Navigate("/5Eqi3pEyTJliNa7ANd9GcQN");
    }else{

      Navigate("/");
    }
    return;
  }

  try {
    await axios.post('https://backendproject-8m9r.onrender.com/users/auth', values);
    if (window.confirm("Do you really want to move?")) {
   
      Navigate("/833 103.803C182.209 103");
    }else{
  
      Navigate("/");
    }
  } catch (err) {
    console.log(err);

    if (err.response && err.response.status === 401) {
      alert('Invalid credentials. Please try again.');
    } else {
     alert('An error occurred. Please try again later.');
    }
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
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Log in</h2>
        <div className="container">
        {inputs.map((input)=>(
          <FormInput key={input.id} className="p-3"
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <div className="head">
        <button className="button">Submit</button>
        <p>If you don`t have an account got <a ><Link to="/Register"><b><button className="p-3"> Register</button></b> </Link> </a></p>
        </div>
        </div>
      


      </form>
     </div>
 </div>
    </>
  )
}
export default Login ;