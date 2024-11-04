import  { useState } from "react";
import FormInput from "../../../components/action/FormInput"
import {useNavigate} from "react-router-dom"
// import { Link } from "react-router-dom";
import axios from "axios";
const Login =()=>{
  
  const [values,setValues] = useState({
 
    name:"",
    info:"",
    image:"",
    price:"",
  
  });
  const Navigate =useNavigate();
  const inputs=[
  
 
    {
      id:1,
      name:"name",
      type:"name",
      placeholder:"VOLVO 350",
      errorMessage:"name should be valid and in capital letters",
      label:"name",
      required:true
    },
 
    {
      id:2,
      name:"image",
      type:"file",
      placeholder:"image",
      label:"image",
      required:true
    },
    {
        id:3,
        name:"info",
        type:"text",
        placeholder:"Info and speciality",
        label:"Info",
        required:true
      },
      {
        id:4,
        name:"price",
        type:"number",
        placeholder:"Price in $",
        label:"$",
        required:true
      },
  ];


         // handleSubmit
         const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(values);
          try {

            await axios.post('https://backendproject-8m9r.onrender.com/posts', values);
            alert('Thank you to post a product');
            Navigate('/NewFeatured');
          } catch (err) {
            console.log(err);
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
        <div className="name">
        <h2>Create</h2>
        </div>
        
        <div className="container">
        {inputs.map((input)=>(
          <FormInput key={input.id} className="p-3"
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <div className="name">
        <button className="button">Submit</button>
    
        </div>
        </div>
      


      </form>
     </div>
 </div>
    </>
  )
}
export default Login ;