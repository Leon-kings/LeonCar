// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
import FormInput from "../../../../components/action/FormInput";
import ExampleSide from '../../../pages/view/request/component/ExampleSide'
const Testimonny = () => {
  const [values, setValues] = useState({
    email: "",
    testimony: "",
    name: ""
  });
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const inputs = [


    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage: "email should be valid and should incloude @ symbols",
      label: "email",
      required: true
    },
    {
      id: 2,
      name: "name",
      type: "name",
      placeholder: "name",
      errorMessage: "name should be same as those you use to register",
      label: "Name",
      required: true
    },

    {
      id: 3,
      name: "testimony",
      type: "testimony",
      placeholder: "testimony",
      errorMessage: "testimony should be text",
      label: "testimony",
      required: true
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
                Navigate('/833 103.803C182.209 103')
                } catch (error) {
                console.log(error);
                alert(error);
                }

            };



  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="container">
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
                to="/833 103/301 338/Post"
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
            <div className="left"></div>
            <div className="left">
              <form onSubmit={handleSubmit} className="form">
                <h2 className="title text-red-300">Testimony</h2>
                <div className="container">
                  {inputs.map((input) => (
                    <FormInput key={input.id} className="p-3"
                      {...input} value={values[input.name]}
                      onChange={onChange} />
                  ))}
                  <div className="head">
                    <button className="button">Submit</button>

                  </div>
                </div>
              </form>
            </div>
            <div className="container">

              <div className="Lleft">
                <ExampleSide />
              </div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonny
