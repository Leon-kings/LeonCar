import Matrix from "./components/pricing/Matrix"
import Chart from "./components/chart/Chart"
function Dashboard() {
  return (
    <>
    <div className="container">
        <div className="container">
            <Matrix/>
            <Chart/>
        </div>
    </div>
    </>
  )
}

export default Dashboard