import { useState } from "react";
import FormInput from "../../components/action/FormInput";
import Login from "../../pages/form/login/Login";
import { Link } from "react-router-dom";
const Comment = () => {
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
            name:"problem",
            type:"textarea",
            placeholder:"Define Your Messages",
            errorMessage:"Oh!! Describe your messages",
            label:"Messages",
            required:true
          },
    ]
    const [values,setValues] = useState({
 
        email:"",
        problem:""
       
       });
     
     // fetching data from database
          // handleSubmit
   const handleSubmit = async(e) =>{
     e.preventDefault();

  
   }; 
   const onChange =(e) =>{
     setValues({...values,[e.target.name]:e.target.value});
   }
  return (
   <>
   <div className="container">
   <div className="con">
<div className="left">
<form onSubmit={handleSubmit} className="form">
    
    <h2 className="title">Make a Order</h2>
    <div className="contain">
    {inputs.map((input)=>(
      <FormInput key={input.id}
      {...input}value={values[input.name]}
      onChange={onChange} className='p-4'/>
    ))}
    <div className="head">
    <Link to='/Login'> <button className="button">Submit</button></Link>
    </div>
    </div>
  </form>
</div>
 <div className="left">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Make a Comment</h2>
        <div className="contain">
        {inputs.map((input)=>(
          <FormInput key={input.id}
          {...input}value={values[input.name]}
          onChange={onChange} className='p-3'/>
        ))}
        <div className="head">
      <Link to='/Login'> <button className="button">Submit</button></Link>
        </div>
        </div>
      </form>
     </div>
   <Login/> 
 </div>
   </div>
   </>
  );
}

export default Comment;
