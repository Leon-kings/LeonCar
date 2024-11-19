
import axios from "axios"
import { useState } from "react";
import FormInput from "../action/FormInput";
import { BiSearch } from "react-icons/bi";
// import { useNavigate } from "react-router-dom";
// import { BsSearch } from "react-icons/bs";

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
      required: true
    }

  ]
  // // useNavigate = Navigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
      try{

      await axios.get('https://backendproject-8m9r.onrender.com/search',values)
      .then(() =>{

        // Navigate('/Search/Page');
      })
    }
      catch(err){
        console.log(err)
      }

  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="container">
<div className=" text-2xl"> Search Your wishes</div>
        <div className="head">
          <div className="left"></div>
          <div className="left">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form flex p-1">
              {inputs.map((input) => (

                <FormInput key={input.id}
                  {...input} value={values[input.name]}
                  onChange={onChange} className="inputbox" />
              ))}
              <div className="invisible">
                 &nbps;
              </div>
              <button className="btn mt-5 tracking-wide font-semibold text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <BiSearch className="text-black bg-white"/>
               
                </button>
           
              </div>
            </form>
          </div>
          <div className="left"></div>

        </div>
      </div>
    </>
  )
}

export default Search