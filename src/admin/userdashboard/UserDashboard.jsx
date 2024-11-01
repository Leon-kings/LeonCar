import Matrix from "./components/pricing/Matrix"
import Chart from "./components/pricing/Chart"
import Barchart from "./components/pricing/Barchart"
import Piechart from "./components/pricing/Piechart"
import {NavbarWithSearch} from "./components/pricing/NavBar"
function Dashboard() {
  return (
    <>
    <div className="container">
        <div className="container">
          <div className="head">
            <NavbarWithSearch/>
          </div>
            <Matrix/>
            <div className="left">
                <Chart/>
            </div>
          <div className="left">
            <Barchart/>
          </div>
            <div className="left">
              <Piechart/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard