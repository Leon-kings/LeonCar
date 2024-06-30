// import React from 'react'

import { users } from "../../assets/data/Users"

function Testimony() {
  return (
    <>
    <div className="container">
        <div className="eft">
        <div className="block">
            {users.map((Users )=>(
                <div className="left" key={1}>
                    <div className="box">
<div className="head">
    <img src={Users.URL} alt={Users.name} className="cycle text-center " />
</div>
<div className="head">
    <h3 className="text text-blue-500">{Users.name}</h3>
    <hr />
    <h3 className="text">{Users.Message}</h3>
</div>
            </div>
                </div>
            ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default Testimony