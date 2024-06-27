// import React from 'react'

import { BsCart4, BsClock, BsListCheck, BsPeople, BsTools,  BsWallet2 } from "react-icons/bs"

function Services() {
  return (
 <div className="container">
  <div className="head">
    <h2 className="invisible">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui rerum vel deserunt, 
    cum quia facere eos quaerat consequuntur, temporibus ea labore corrupti dolor atque nihil necessitatibus. 
    Quod nostrum incidunt accusantium? </h2>
<h2 className="text-center"><b> Welcome to SerVices Page</b> </h2>
</div>
   <div className="container">

  <div className="left">
    <div className="block">
      <div className="head">
        <BsCart4/>
      </div>
      <h3>Buy a Car</h3>
    </div>
  </div>

  <div className="left">
    <div className="block">
      <div className="head">
        <BsTools/>
      </div>
      <h3>Maintenance ToolKits</h3>
    </div>
  </div>

  <div className="left">
    <div className="block">
      <div className="head">
        <BsPeople/>
      </div>
      <h3>Maintenance Team</h3>
    </div>
  </div>
  <div className="left">
    <div className="block">
      <div className="head">
        <BsClock/>
      </div>
      <h3>Rent Car</h3>
    </div>
  </div>
  <div className="left">
    <div className="block">
      <div className="head">
        <BsWallet2/>
      </div>
      <h3>Maintenance Tyres</h3>
    </div>
  </div>
  <div className="left">
    <div className="block">
      <div className="head">
        <BsListCheck/>
      </div>
      <h3>Make Your Order</h3>
    </div>
  </div>
</div>
   </div>

  )
}

export default Services