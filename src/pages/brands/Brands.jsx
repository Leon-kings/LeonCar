// import React from 'react'

import { brands } from "../../assets/data/brand"

function Brands() {
  return (
   <>
   <div className="container">
    <div className="head">
      <div className="head">
        <h2 className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, temporibus sunt voluptate, ullam excepturi fugiat ab necessitatibus minima officiis 
        deserunt incidunt quisquam placeat accusamus eligendi nemo corrupti! Illo, voluptatem nisi! </h2>
      </div>
{brands.map((enventor) =>(
  <div className="sleft flex" key={1}>
<div className="hea">
  <img src={enventor.URL} alt={enventor.inx} className="NewFeaturedimg" />
</div>
<div className="head">
  <h2 className="text-center px-3 py-2">{enventor.inx} </h2>
</div>
  </div>
))}
    </div>
    <div className="head">
      <div className="invisible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam sint in recusandae. Ratione iusto soluta numquam! Adipisci ratione enim ullam mollitia praesentium doloribus debitis iste. Asperiores numquam dolores quis.
      </div>
    </div>
    
    <br />
    <hr />
   </div>
   </>
  )
}

export default Brands