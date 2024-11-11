import Products from "../../servicePages/tools/components/Products"

function NewFeatured() {
  return (
<>
<div className="container">
  <div className="head">
  <div className="title">
    NEW FEATURED TOOLS 
  </div>
  <h2 className="text">
    CHECKOUT NEW FEATURED TOOLS
  </h2>
  <label htmlFor="text">Choose your Toolkits for affordable price</label>
  </div>
<Products/>

  <br />
  <hr />
</div>

</>
  )
}

export default NewFeatured