import { useState } from "react";
import FormInput from "../../../components/action/FormInput"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateProfile = () => {
  const [values, setValues] = useState({
    email: "",
    image: "",
  });
  const Navigate = useNavigate();
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Email should be valid ",
      label: "Email",
      required: true
    },

    {
      id: 2,
      name: "image",
      type: "file",
      placeholder: "image",
      label: "image",
      required: true
    },
  ];

  // fetching data from database
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {

      await axios.post('https://backendproject-8m9r.onrender.com/users/auth', values);
      alert('Profile up[dated] successfully');
      Navigate('/');
    } catch (err) {
      console.log(err);
    }

  };



  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  return (
    <>
      <div className="container ">
        <form onSubmit={handleSubmit} className="form">
          <div className="head">
            <h2 className="title text-blue-600 ">Admin Profile</h2>
          </div>

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
    </>
  )
}

export default UpdateProfile
