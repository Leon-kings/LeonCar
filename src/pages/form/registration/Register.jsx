
import  { useState } from "react";
import FormInput from "../../../components/action/FormInput"
import { Link } from "react-router-dom";
// import axios from "axios";

const App =()=>{
  const [values,setValues] = useState({
  
    email:"",
    telephone:"",
    password:"",
    Names:""
   
  });
  // const Navigate =useNavigate()
  const inputs=[
    {
      id:1,
      name:"Names",
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
      name:"telephone",
      type:"phone",
      placeholder:"phone number",
      errorMessage:"phone number must be 10 numbers",
      label:"Your phone number",
      required:true,
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
  console.log(values);
  //   try{
     
  //   const dt = await axios.post('https://getcard.onrender.com/users',values)
  //   .then(() =>{
  //     alert('User Registered successfully');
  //    Navigate('/login')
      
  //   })
  // }
  //   catch(err){
  //     console.log(err)
  //   }
 
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