import App from "../../components/Cart/App"
import NewFeaturedTool from "./NewFeaturedTool"
function NewFeatured() {
  return (
<>
<div className="container">
  <div className="semicontainer">

 
  <div className="head">
    <div className="title">
      NEW FEATURED CARS
    </div>
    <h2 className="text">CHECKOUT NEW FEATURED CARS</h2>
    <label htmlFor="text">Choose your new cars for affordable price</label>
  </div>
<App/>
   </div>
    {/*  */}
  {/*  */}
  <div className="title">
    <hr />
  </div>
  {/*  */}
  {/*  */}
  {/* NEW FEATURED TOOLKITS */}

  <div className="container">
<NewFeaturedTool/>
  </div>
</div>

</>
  )
}

export default NewFeatured