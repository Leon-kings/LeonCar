// import React from 'react'

import { NavBar } from "./pdtNav"
import { pdtdata } from "../../../assets/data/data"
function Products() {
  return (
    <>
    <div className="container">
      <div className="title">
        PRODUCT PAGES 
      </div>
      <div className="content">
        <div className="heading">
          <NavBar/>
        </div>
        {/* products codes */}
        <div className="main overflow-x-auto">
    <table className="table">
  <tr>
                  <th className='head'>ID</th>
                  <th className='head'>NAME OF PRODUCTE</th>
                  <th className='head'>MAIL</th>
                  <th className='head'>DESCRIPTION</th>
                  <th className='head'>IMAGE</th>
                  <th className='head'>PRICE</th>
                  <th className="head" colSpan={2}>ACTION</th>
                  </tr>
  
{pdtdata.map((index)=>(
<tr className="list" key={index.index}>
<td className="text-white">{index.id} </td>
<td className="text-white">{index.name} </td>
<td className="text-white">{index.email} </td>
<td className="text-white">{index.description} </td>
<td className="text-white">  <img src={index.image} className="w-36 h-20" alt="pdt image" />  </td>
<td className="text-white">{index.price} </td>
<td><button className="bn p-2 bg-green-300">EDIT </button> </td>
<td><button className="bn p-2 bg-red-500">CLOSE </button> </td>
</tr>

))}
</table>
</div>
      </div>
    </div>
    </>
  )
}

export default Products