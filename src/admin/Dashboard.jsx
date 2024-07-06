import Matrix from "./components/pricing/Matrix"
import Chart from "./components/chart/Chart"
import Barchart from "./components/Barchart/Barchart"
import Piechart from "./components/pie/Piechart"
import {NavbarWithSearch} from "./components/navbar/NavBar"
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