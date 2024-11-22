
import { useState } from "react";
import FormInput from "../../../components/action/FormInput"
import {  Link, useNavigate } from "react-router-dom";
import axios from "axios";

// useNavigate
const App = () => {
  const [values, setValues] = useState({

    email: "",
    password: "",
    fullname: "",
    phone: ""

  });
  const Navigate = useNavigate()
  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Names",
      errorMessage: "Names needed ",
      label: "Your Names",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "email",
      required: true
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "+250787944577",
      errorMessage: "Phone should start with country code +250",
      label: "email",
      required: true
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage: "password should be 8-12 characters include at least 1 letter and 1 symbol",
      label: "password",
      // pattern:"/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g",
      required: true
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      await axios.post('https://backendproject-8m9r.onrender.com/users', values);
      alert('User Registered successfully');
      Navigate('/Login');
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  const onChange = (e) => {

    setValues({ ...values, [e.target.name]: e.target.value });

  }
  return (
    <>
      <div className="container">
            {/* Sidebar */}
            <div className="title"></div>
            <div className="xleft">
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
            <p>USERS</p>
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
      </div>
      <div className="xleft">
      <div className=" bg-gray-100 ">
  
   <div className="fit">
            <form onSubmit={handleSubmit} >
              <div className="head">
                <button className="p-3">
                  <h1 className="p-3 text-blue-400">Create User</h1></button>
              </div>
              <div className="contain">
                {inputs.map((input) => (
                  <FormInput key={input.id} className="p-3"
                    {...input} value={values[input.name]}
                    onChange={onChange} />
                ))}
                <div className="head">
                  <button className="btn">Submit</button>
                  </div>
              </div>
            </form>
          </div>
       </div>
  </div>

  </div>   
    

      
    </>
  )
}
export default App;