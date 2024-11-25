import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import FormInput from "../../../../components/action/FormInput";
import Example from "./components/Example";

const FieldRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values,setValues] = useState({
    email:"",
    reason:"",
    productname:"",
    contact:""
  });
  const Navigate =useNavigate();
  const inputs=[
  
    {
        id:1,
        name:"productname",
        type:"text",
        placeholder:"Product Name ex: VOLKWAGEN",
        errorMessage:"Product name required",
        label:"Product Name",
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
        name:"reason",
        type:"text",
        placeholder:"Details ex: I need it ASAP/I like it",
        errorMessage:"Details Field needed",
        label:"Reason/details",
        required:true
      },
      {
        id:4,
        name:"contact",
        type:"text",
        placeholder:"+250787944577",
        errorMessage:"Contact Field needed",
        label:"Contact",
        required:true
      },
 

  ];

// fetching data from database
         // handleSubmit
         const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(values);
      

                        try {
                            await axios.post('https://backendproject-8m9r.onrender.com/Booking', values);
                            alert('Request Received Successfully');
                            Navigate('/833 103.803C182.209 103')
                        } catch (error) {
                            console.log(error);
                            alert(error);
                        }     
                };
  const onChange =(e) =>{
    setValues({...values,[e.target.name]:e.target.value});
  }
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">LD</div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/833 103.803C182.209 103"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              > <button>Dashboard</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/admin/profile"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Profile</button>
              </Link>
            </li>
            <br />
            <hr />
            <br />
            <li>
              <Link
              
                className="block px-4 py-2 text-blue-100 hover:bg-gray-700 rounded"
              >
                <button>Users</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/833 103/Post"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Products</button>
              </Link>
            </li>
            <br />
            <hr />
            <p>CREATES</p>
            <br />
            <li>
              <Link
               
                className="block px-4 py-2 text-blue-100 hover:bg-gray-700 rounded"
              >
                <button>Create User</button>
              </Link>
            </li>
            <br /> 
            <li>
              <Link
                to="/833 103/Post"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Create Posts</button>
              </Link>
            </li>
            <br />
            <hr />
            <p>NOTIFY</p>
            <br />
            <li>
              <Link
                to="/833 103/Booking"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Requests</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/833 103/Testimony"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Testimony</button>
              </Link>
            </li>
            <br />
            <hr />
            <p>VIEW</p>
            <br />
            <li>
              <Link
                to="/833 103/301 338/Booking"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Request</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/833 103/301 338/Testimony"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
                <button>Testimony</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-gray-800 text-white rounded"
      >
        ☰
      </button>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 min-h-screen ">
        {/* side1 */}
        <div className="left">
              <div className="title"></div>
        </div>
        {/* side2 */}
    <div className="left">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title text-black">Makes Requests</h2>
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

<div className="Lleft">
<div className="title">
  CHECKOUT
  <Example/>
</div>
</div>
      </div>
    </div>
  );
};

export default FieldRequest;
