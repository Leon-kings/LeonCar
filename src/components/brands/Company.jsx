import { brands } from "../../assets/data/brand"

function Company() {

  return (
    <>
    <div className="container">
{brands.map((Company , index) =>(
    <div className="left" key={index}>
<img src={Company.URL} alt=""  className="w-80 h-36"/>
<div className="head">
    <h2 className="text-center">{Company.head} </h2>
    <h3 className="text-center">{Company.inx} </h3>
</div>
    </div>
))}

    </div>
    </>
  )
}

export default Company