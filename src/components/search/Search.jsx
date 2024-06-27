// import React from 'react'

import { useState } from "react";
import FormInput from "../action/FormInput";

function Search() {
  const [values, setValues] = useState({

    search: "",

  });
  const inputs = [

    {
      id: 1,
      name: "search",
      type: "text",
      placeholder: "Place Your Search",
      errorMessage: "Search box must be valid",
      label: "Search Box",
      required: false
    }

  ]
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    //   try{

    //   const dt = await axios.get('https://getcard.onrender.com/users',values)
    //   .then(() =>{

    //   })
    // }
    //   catch(err){
    //     console.log(err)
    //   }

  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="container">

        <div className="head">
          <div className="left"></div>
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>

              {inputs.map((input) => (

                <FormInput key={input.id}
                  {...input} value={values[input.name]}
                  onChange={onChange} className="inputbox" />
              ))}
              <button className="btn">Search</button>
            </form>
          </div>
          <div className="left"></div>

        </div>
      </div>
    </>
  )
}

export default Search