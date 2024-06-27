// import React from 'react'

import { BsEnvelope, BsInstagram, BsWhatsapp } from "react-icons/bs"
import { Link } from "react-router-dom"

function Contact() {
  return (
    <>
    <div className="container">
    
        <div className="heads">
          <h2 className="spaceOut text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint, soluta esse quibusdam nesciunt minus, necessitatibus excepturi 
          laborum aperiam dolor provident illo accusamus at in deleniti ratione maxime consequatur vero. </h2>
         <h3 className="text-center font-bold">Create user account to start enjoy</h3>
         <div className="xleft">
         <h4 className="text-center">Create an account here <Link to={'/Register'}> <button className="btn"> Register </button></Link></h4>
         </div>
         <div className="xleft">
         <h4 className="text-center">Already have an account log through here <Link to={'/Login'}><button className="btn">  Login</button></Link></h4>
         </div>

        </div>
       <div className="head">
        <div className="invisible">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, voluptatibus odit dolorem ducimus, 
          inventore aspernatur fuga iure dolorum atque debitis aut cum, earum maiores fugit est perspiciatis totam ut non?
        </div>
       </div>
        <div className="contactAddress">

        <h3 className="text-center font-bold"><b>Do not Husitate to call us for any services </b> </h3>
          <div className="left">
            <div className="head">
             <p htmlFor="icon"> <BsInstagram/></p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam minima nostrum dolorem ducimus vel voluptates quasi aut,
               fugiat tenetur nemo aliquid nesciunt cupiditate nobis eaque sed reprehenderit? Vero, eveniet nulla.
            </div>
          </div>
          <div className="left">
            <div className="head">
            <BsEnvelope/>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis laudantium est modi debitis sint. Atque odit enim ut distinctio, 
              laboriosam aspernatur sed consequuntur architecto repellat voluptatum! Odit atque porro nam?
            </div>
          </div>
          <div className="left">
            <div className="head">
            <BsWhatsapp/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore, magni nihil ea dolorem distinctio, 
              dolores in eum atque qui, itaque esse recusandae impedit commodi quam. Nemo vero natus modi!
            </div>
          </div>
          </div>
         
    </div>
    
    </>
  )
}

export default Contact