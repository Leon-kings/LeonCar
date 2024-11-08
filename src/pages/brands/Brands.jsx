// import React from 'react'

import { brands } from "../../assets/data/brand"

function Brands() {
  return (
    <>

      <div className="container">
        <div className="head">
          <div className="head">
            <div className="title">LD Brands We Serve</div>
            <h2 className="text-center">We Provide more Brands </h2>
          </div>
          {brands.map((enventor) => (
            <div className="sxleft" key={1}>
              <div className="head">
                <img src={enventor.URL} alt="brands" className="NewFeaturedimg" />
              </div>
              <div className="head">
                <h2 className="text-center px-3 py-2">{enventor.inx} </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="head">
          <div className="invisible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laboriosam sint in recusandae.
            Ratione iusto soluta numquam! Adipisci ratione enim ullam mollitia praesentium doloribus debitis
            iste. Asperiores numquam dolores quis.
          </div>
        </div>

        <br />
        <hr />
      </div>
    </>
  )
}

export default Brands