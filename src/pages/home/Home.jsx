
import "../../assets/css/home/home.css"
import { Link } from "react-router-dom"
import Slide from "../../components/slide/Slide"
import { BsCart, BsClock, BsTools } from "react-icons/bs"
import Company from "../../components/brands/Company"
import { BsCart4, BsListCheck, BsPeople, BsWallet2 } from "react-icons/bs"
import SlideToolKit from "../../components/slide/SlideToolKit"
import Search from "../../components/search/Search"
import CarSell from "../../servicePages/rent/CarSell"
import { SearchByDetails } from "../../components/search/SearchByDetails"
import Tools from "../../servicePages/tools/Tools"
import App from "../../components/Cart/App"
import Testimony from "../testmony/Testimony"
import Qtn from "../../components/Question/Qtn"
import OurTeam from "../team/OurTeam"
import QuestionPage from "../../components/Qtn/QuestionPage"

function Home() {


  return (
    <>
      {/* Body space */}
      <div className="container px-0 py-0 mx-0">
        {/* general container */}
        {/* Head Body starts*/}
        <div className="container">
          <div className="backImage">
            <div className="front">
              <p id="invisible">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam ducimus sint veritatis dicta molestias blanditiis
                quas obcaecati voluptatibus facere illo. Sapiente recusandae
                ipsa omnis repudiandae cumque culpa illum cum corporis.</p>
              <h2 className="title text-center ">GET YOUR DESIRED CAR IN RESONABLE PRICE</h2>

              <h4 className="title text-center">Leon is happy to serve you Your favourate Cars , Choose The Best Cars You want and Your repairment Kits. </h4>
              <div className="stitle">
                <Link to={'/contact'}>
                  <button className="button">Contact us</button>
                </Link>
              </div>
            </div>

          </div>
          <br />
          <hr />
        </div>

        {/* Head Body ends*/}
        {/*  */}
        {/*  */}
        {/* Search space starts*/}
        <div>
          <div className="container">
            <div className="head">
              <Search />
            </div>
          </div>

          <br />
          <hr />
          <div className="container">
          <div className="head">
            <h2 className="text px-1 py-2">Search Your Model , Cars and Year of Manufacturing</h2>
          </div>
          <SearchByDetails />
          <br />
        </div>
        <br />
        </div>
        <br />
        <hr />
        {/* Search space ends*/}
        {/*  */}
        {/*  */}
        {/* Main Services starts */}
        <div className="container">
          <div className="container">
            <div className="block">
              <div className="head">
              <h2 className="hidden text px-2 py-2 text-black">
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ad, beatae! Esse sed maxime unde,
                eius quae quis nostrum officiis alias odit quia harum
                natus animi ipsa, saepe dolor deserunt ab!</h2>
                </div>
            </div>
            <div className="left">
              <div className="block">
                <div className="box">
                  <div className="text-center">
                    <label htmlFor="icons" className="text-black hover:text-lime-400">
                      <BsCart />
                    </label>
                    <h3 className="head text-center hover:text-red-500">BUY DEAL</h3>
                  </div>
                  <div className="head">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Soluta, veniam incidunt quis molestiae eos deserunt provident
                    maiores beatae! Fuga esse delectus ab inventore vel sed porro
                    veritatis qui saepe reiciendis.
                  </div>
                </div>
              </div>
            </div>
            {/* services flow */}
            <div className="container">
              <div className="left">
                <div className="block">
                  <div className="box">
                    <div className="text-center">
                      <label htmlFor="icons" className="text-black hover:text-lime-400">
                        <BsClock />
                      </label>
                      <h3 className="head text-center hover:text-red-500">RENT DEAL</h3>
                    </div>
                    <div className="head">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Soluta, veniam incidunt quis molestiae eos deserunt provident
                      maiores beatae! Fuga esse delectus ab inventore vel sed porro
                      veritatis qui saepe reiciendis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="block">
                  <div className="box">
                    <div className="text-center">
                      <label htmlFor="icons" className="text-black hover:text-lime-400">
                        <BsTools />
                      </label>
                      <h3 className="head text-center hover:text-red-500">TOOLKIT BOX</h3>
                    </div>
                    <div className="head">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Soluta, veniam incidunt quis molestiae eos deserunt provident
                      maiores beatae! Fuga esse delectus ab inventore vel sed porro
                      veritatis qui saepe reiciendis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second line */}
          <div className="head">
            <h2 className="text-center px-1 py-2 text-white">Services</h2>
          </div>
          {/*  */}
          {/*  */}
          <div className="container">
            <div className="left">
              <div className="block">
                <div className="head hover:first:invisible hover:after:visible ">
                  <BsCart4 />
                </div>
                <h3 className="text text-black">Buy a Car</h3>
              </div>
            </div>

            <div className="left">
              <div className="block">
                <div className="head">
                  <BsTools />
                </div>
                <h3 className="text text-black">Maintenance ToolKits</h3>
              </div>
            </div>

            <div className="left">
              <div className="block">
                <div className="head">
                  <BsPeople />
                </div>
                <h3 className="text text-black">Maintenance Team</h3>
              </div>
            </div>
            <div className="left">
              <div className="block">
                <div className="head">
                  <BsClock />
                </div>
                <h3 className="text text-black">Rent Car</h3>
              </div>
            </div>
            <div className="left">
              <div className="block">
                <div className="head">
                  <BsWallet2 />
                </div>
                <h3 className="text text-black">Maintenance Tyres</h3>
              </div>
            </div>
            <div className="left">
              <div className="block">
                <div className="head">
                  <BsListCheck />
                </div>
                <h3 className="text text-black">Make Your Order</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main Services ends */}
        {/*  */}
        {/*  */}
        <br />
        <hr />


        {/* Slider Starts */}
        <div className="container">
          <div className="container">
            <div className="card">
              <h2 className="text-center">
                <i className="text-blue-600">
                  Latest New Cars
                </i>
              </h2>
            </div>
            <Slide />
          </div>
          {/* ToolKits */}
          <br />
          <hr />
          <div className="container">
            <div className="card">
              <h2 className="text-center">
                <i className="text-blue-600">
                  Latest New ToolKits
                </i>
              </h2>
            </div>
            <SlideToolKit />
          </div>
        </div>
        {/* Slider Starts */}
        {/*  */}
        {/*  */}
        <br />
        <hr />
        {/* Branding sites starts*/}
        <div className="container">
          <div className="brands">
            <div className="title">
              <h2 className="text">
                Our Products Brands
              </h2>
            </div>

            <div className="container">
              <div className="head">
                <Company />
              </div>
            </div>
          
          </div>
       
        </div>
        {/* Branding sites ends*/}
        {/*  */}
        {/*  */}
        <br />
        <hr />

        {/* Featured New cars starts*/}
        <div className="container">
          <div className="backCar">
            <h4 className="text-center text-blue-500">Checkout the Featured Cars</h4>
            <h3 className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur ea ut dicta quos,
              sunt inventore possimus itaque fugit ipsa recusandae atque veniam et eaque omnis autem ipsam exercitationem
              corporis sit.</h3>
            <h2 className="text-center">New Featured Cars</h2>
          </div>
          <App />

        </div>
        {/* Featured New cars ends*/}
        {/*  */}
        {/*  */}
        <br />
        <hr />
        {/* Featured New Toolkits starts*/}

        <div className="container">
          <div className="backCar">
            <h4 className="text-center text-blue-400">Checkout the Featured ToolKits</h4>
            <h3 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab unde ipsa veritatis eveniet,
              inventore et voluptas corrupti ipsum dolores autem reiciendis vitae pariatur iure non qui, nostrum quod omnis?</h3>
            <h2 className="text-center">Featured ToolKits</h2>
          </div>
          <div className="container">
            <div className="head">
              <Tools />
            </div>
          </div>
        </div>
        {/* Featured New Toolkits ends*/}
        {/*  */}
        {/*  */}
        <br />
        <hr />

        {/* Rental Cars */}

        {/* Featured New Rent Cars start*/}
        <div className="container">
          <div className="backCar">
            <h4 className="text-center text-blue-400">Checkout the Featured Car For Rent</h4>
            <h3 className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil nobis,
              placeat ut, assumenda sapiente unde exercitationem consequuntur rerum doloribus animi hic aut
              nulla magni? Labore, repudiandae. Dolorem, quidem! Adipisci!</h3>
            <h2 className="text-center">Featured Rental Car</h2>
          </div>
          <div className="container">
            <div className="head">
              <CarSell />
            </div>
          </div>
        </div>
        {/* Featured New Rent Cars ends*/}
        {/*  */}
        {/*  */}
        <br />
        <hr />
        {/* Featured  start*/}
        <div className="container">
          <div className="backCar">
            <h4 className="text-center text-blue-400">Cars Under 15000 $</h4>

            <h2 className="text-center">Shop Your Cars </h2>
          </div>
          <div className="container">
            <div className="head">
              <Qtn />
            </div>
          </div>
        </div>
        {/* Featured New Rent Cars ends */}

        {/*  */}
        {/*  */}
        <br />
        <br />

        <br />
        <hr />

        <br />

        {/* Featured  start*/}
        <div className="container">
          <div className="container">
            <div className="head">
              <Testimony />
            </div>
          </div>
        </div>
        {/* Featured New Rent Cars ends*/}

        <br />
        <hr />

        {/* Featured  start*/}
        <div className="container">
          <div className="container">
            <div className="head">
              <QuestionPage />
            </div>
          </div>
        </div>
        {/* Featured New Rent Cars ends*/}

        <br />
        <hr />


        {/* Featured  start*/}
        <div className="container">
          <div className="container">
            <div className="head">
              <OurTeam />
            </div>
          </div>
        </div>
        {/* Featured New Rent Cars ends*/}

        <br />
        <hr />


        <div className="last">
          <h2 className="invisible">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus rerum neque
            rem deserunt veniam illum maxime enim, id fugiat aspernatur molestias exercitationem suscipit possimus dolor
            officiis vitae! Eaque, vitae ad.</h2>
          <div className="container">
            <div className="head">
              <h2 className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium animi minus illo est officiis ratione reprehenderit ipsa corporis, nemo, quae omnis nesciunt, neque facilis? Obcaecati dolore dicta maiores modi eaque. </h2>
            </div>
            <div className="head">
              <h3 className="text-center">SPECIAL THANKS</h3>
              <div className="left">
                <label htmlFor="">Pinsoe</label>
              </div>
              <div className="left">
                <label htmlFor="">Klab</label>
              </div>
              <div className="left">
                <label htmlFor="">KIAC</label>
              </div>
            </div>
          </div>
        </div>
        <br /><hr />
      </div>

    </>
  )
}

export default Home