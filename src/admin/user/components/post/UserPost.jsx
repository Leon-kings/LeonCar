import  { useState } from "react";
import FormInput from "../../../../components/action/FormInput"
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";
import Example from "../../../pages/view/request/component/Example";

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
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
  <div className="container">
            {/* Sidebar */}
            <div className="title"></div>
            <div className="left">
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
      </div>


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
     <div className="left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga voluptates aut impedit officia repellat quis quod obcaecati cum voluptate laudantium rerum magni voluptas, inventore nihil at, praesentium blanditiis corporis dicta!
     </div>
   
        <div className="Lleft">
            <Example/>
        </div>
 </div>
    </>
  )
}
export default Login ;