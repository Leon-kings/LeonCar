// import React from 'react'

import { BsCart4, BsClock, BsListCheck, BsPeople, BsTools,  BsWallet2 } from "react-icons/bs"

function Services() {
  return (
 <div className="container">
  <div className="head">
<div className="title"></div>
<h2 className="text-center"><b> Welcome to SerVices Page</b> </h2>
</div>
   <div className="container">

  <div className="left">
    <div className="block">
      <div className="head">
        <BsCart4 className="icons"/>
      </div>
      <h3>Buy a Car</h3>
    </div>
  </div>

  <div className="left">
    <div className="block">
      <div className="head">
        <BsTools className="icons"/>
      </div>
      <h3>Maintenance ToolKits</h3>
    </div>
  </div>

  <div className="left">
    <div className="block">
      <div className="head">
        <BsPeople className="icons"/>
      </div>
      <h3>Maintenance Team</h3>
    </div>
  </div>
  <div className="left">
    <div className="block">
      <div className="head">
        <BsClock className="icons"/>
      </div>
      <h3>Rent Car</h3>
    </div>
  </div>
  <div className="left">
    <div className="block">
      <div className="head">
        <BsWallet2 className="icons"/>
      </div>
      <h3>Maintenance Tyres</h3>
    </div>
  </div>
  <div className="left">
    <div className="block">
      <div className="head">
        <BsListCheck className="icons"/>
      </div>
      <h3>Make Your Order</h3>
    </div>
  </div>
  
</div>
<div className="title">
    <hr />
  </div>
   </div>

  )
}

export default Services