// import React from 'react'
import { NavbarWithSearch } from "../../components/navbar/NavBar"
import welcome from "../../../assets/images/welcome.jpg"
import { Link } from "react-router-dom"
import UpdateProfile from "./Update"
const Myprofile = () => {
  return (
    <>
    <div className="container">
        <div className="head">
        <NavbarWithSearch/>
      </div>
      <div className="sxleft">
          <div className="menu">
            <Link to={'/Dashboard'}> <button className="btn p-3 m-2">Dashboard</button></Link>
            <Link> <button className="btn p-3 m-2">Payments</button></Link>
            <hr />
            <Link> <button className="btn p-3 m-2">Users</button></Link>
            <Link> <button className="btn p-3 m-2">Products</button></Link>
            <hr />
            <Link> <button className="btn p-3 m-2">Request</button></Link>
            <Link> <button className="btn p-3 m-2">Settins</button></Link>
            <hr />
            <Link> <button className="btn p-3 m-2">Logout</button></Link>
          </div>
        
      </div>

      <div className="left">
        <div className="">
            <div className="img">
    
                  </div>
              <div className="names">
              <img
                    alt="Prof"
                    src={welcome}
                    className="h-40 w-52 rounded-full mx-14"
                  />
                <Link> <h2 className="text-center text-green-400">Admin</h2></Link>
                <h2 className="text-center text-green-600">Kigali , Rwanda</h2>
                <Link><button type="button" className="button">Update Bio</button> </Link>
                
                </div>    
                  
                  </div>
      </div>
      <div className="left">
        <UpdateProfile/>
      </div>
    </div>
    </>
    
  )
}

export default Myprofile
