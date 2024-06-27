// import React from 'react'
import { BsCart, BsEye } from "react-icons/bs"
import { ToolKits } from "../../assets/data/Tools"
// import Products from "../../components/Cart/components/Products"

function ToolKit() {
  return (
    <>
    <div className="container">
        <div className="head">
            <h2 className="text-center"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate odit vitae et aspernatur voluptates quasi consequatur totam voluptatem, 
                alias reiciendis, cum animi laudantium repudiandae praesentium quidem quam saepe optio veniam?</h2>
        </div>
        <div className="container">
{ToolKits.map((tool, index)=>(
<div className="sleft" key={index}>
<img src={tool.URL} alt="" />
<div className="head">
  <h2 className="text-center">{tool.head}</h2>
  <h4 className="text-center">{tool.capacity} </h4>
  <h2 className="color">{tool.inx} </h2>
  <br />
  <ul className="eye-cart">
  <button className="btn"><BsCart/></button>
  <button className="btn"> <BsEye/></button></ul>
</div>
</div>
))}
        </div>
       
    </div>
    
    </>
  )
}

export default ToolKit