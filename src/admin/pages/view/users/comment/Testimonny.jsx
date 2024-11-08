// import React from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import FormInput from "../../../../../components/action/FormInput";
useState
const Testimonny = () => {
    const [values,setValues] = useState({
        email:"",
        testimony:"",
      });
      const Navigate =useNavigate();
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
            name:"name",
            type:"name",
            placeholder:"name",
            errorMessage:"name should be same as those you use to register",
            label:"Name",
            required:true
          },
     
        {
          id:3,
          name:"testimony",
          type:"testimony",
          placeholder:"testimony",
          errorMessage:"testimony should be text",
          label:"testimony",
          required:true
        },
      ];
    
    // fetching data from database
             // handleSubmit
             const handleSubmit = async (e) => {
              e.preventDefault();
              console.log(values);
          

                            try {
                                await axios.post('https://backendproject-8m9r.onrender.com/testimony', values);
                                alert('Testimony Received Successfully');
                                Navigate('/')
                            } catch (error) {
                                console.log(error);
                                alert(error);
                            }
          
          };
    
    
     
      const onChange =(e) =>{
        setValues({...values,[e.target.name]:e.target.value});
      }
  return (
    <>
    <div className="container">
<div className="left"></div>
<div className="left">
    <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Testimony</h2>
        <div className="container">
        {inputs.map((input)=>(
          <FormInput key={input.id} className="p-3"
          {...input}value={values[input.name]}
          onChange={onChange} />
        ))}
        <div className="head">
        <button className="button">Submit</button>
       
        </div>
        </div>
      


      </form>
      </div>
    </div>
    </>
  )
}

export default Testimonny
