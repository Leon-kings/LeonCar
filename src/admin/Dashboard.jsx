
import Chart from "./components/chart/Chart"
import Barchart from "./components/Barchart/Barchart"
import Piechart from "./components/pie/Piechart"
import {NavbarWithSearch} from "./components/navbar/NavBar"
import {NavBar} from "./user/navbar/userNav"
import { Link } from "react-router-dom"
import {data} from "../assets/data/data"
import { BiCloset, BiEdit } from "react-icons/bi"
import Userview from "./pages/view/users/Userview"
import Testimonny from "./pages/view/users/comment/Testimonny"
import Products from "./user/product/Products"
function Dashboard() {
  return (
    <>
    <div className="container">
      <div className="invisible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis ipsam nihil cupiditate nisi commodi et neque quis accusantium at fugit, accusamus rerum. Tempora vero eos ratione quae dolore quibusdam.</div>
       <div className="head">
        <NavbarWithSearch/>
       </div>
       {/*  */}
       {/*  */}
        <div className="sxleft">
          <div className="menu">
            <Link to={'/admin/profile'}> <button className="btn p-3 m-2">My Profile</button></Link>
            <Link> <button className="btn p-3 m-2">Payments</button></Link>
            <hr />
            <Link to={'/Userview'}> <button className="btn p-3 m-2">Users</button></Link>
            <Link to={'/Productview'}> <button className="btn p-3 m-2">Products</button></Link>
            <hr />
            <Link to={'/FieldRequest'}> <button className="btn p-3 m-2">Request</button></Link>
            <Link> <button className="btn p-3 m-2">Settins</button></Link>
            <hr />
            <Link> <button className="btn p-3 m-2">Logout</button></Link>
          </div>
        
      </div>
      {/*  */}
      {/*  */}
      <div className="xxleft">
      <div className="container">
          <div className="head">
            <NavBar/>
          </div>
        <div className="main overflow-x-auto">
        <table className="table">
  <tr>
                  <th className='head'>ID</th>
                  <th className='head'>USERNAMES</th>
                  <th className='head'>EMAIL</th>
                  <th className='head'>TELEPHONE</th>
                  <th className='head'>PASSCODES</th>
                  <th className="head" colSpan={2}>ACTION</th>
                  </tr>
  
{data.map((index)=>(
<tr className="list" key={index.index}>
<td className="text-white">{index.id} </td>
<td className="text-white">{index.name} </td>
<td className="text-white">{index.email} </td>
<td className="text-white">{index.telephone} </td>
<td className="text-white">{index.password} </td>
<td><button className="bn p-2 bg-green-300"><BiEdit/> </button> </td>
<td><button className="bn p-2 bg-red-500"><BiCloset/> </button> </td>
</tr>

))}
</table>
</div>

<div className="container">
  <div className="content">
    <Products/>
  </div>
</div>

            {/* <Matrix/> */}
            <div className="left">
                <Chart/>
            </div>
          <div className="left">
            <Barchart/>
          </div>
            <div className="left">
              <Piechart/>
            </div></div>
            </div>

<div className="container">
  <Testimonny/>
</div>
      <Userview/> 
    </div>
    </>
  )
}

export default Dashboard