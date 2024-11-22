import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import FormInput from "../../../../components/action/FormInput";

const FieldRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [values,setValues] = useState({
    email:"",
    request:""
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
        name:"request",
        type:"text",
        placeholder:"Text",
        errorMessage:"Field needed",
        label:"Request",
        required:true
      },
 

  ];

// fetching data from database
         // handleSubmit
         const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(values);
      

                        try {
                            await axios.post('https://backendproject-8m9r.onrender.com/request', values);
                            alert('Request Received Successfully');
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
    <div className="flex">
      {/* FieldRequest */}
      <div
        className={`top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">LD</div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/5Eqi3pEyTJliNa7ANd9GcQN"
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
                to="/Userview"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
              <button>Users</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/Productview"
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
                to="/admin/create/user"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
               <button>Create User</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/admin/create/post"
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
                to="/Request"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
               <button>Requests</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/Messages"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
               <button>Messages</button>
              </Link>
            </li>
            <br />
            <hr />
            <br />
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
               <button>Dashboard</button>
              </Link>
            </li>
            <br />
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
              >
               <button>Dashboard</button>
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
<div className="title text-blue-300">USER REQUESTS</div>
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
<div className="left">
<div className="title">
  NEW REQUEST 
</div>
</div>
      </div>
    </div>
  );
};

export default FieldRequest;
