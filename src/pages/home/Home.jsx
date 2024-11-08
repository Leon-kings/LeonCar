import "../../assets/css/home/home.css"
import { Link } from "react-router-dom"
import Slide from "../../components/slide/Slide"
import { BsCart, BsClock, BsTools } from "react-icons/bs"
import Company from "../../components/brands/Company"
import { BsCart4, BsListCheck, BsPeople, BsWallet2 } from "react-icons/bs"
import SlideToolKit from "../../components/slide/SlideToolKit"
import Search from "../../components/search/Search"
import CarSell from "../../servicePages/rent/CarSell"
import Tools from "../../servicePages/tools/Tools"
import App from "../../components/Cart/App"
import Testimony from "../testmony/Testimony"
import Qtn from "../../components/Question/Qtn"
import OurTeam from "../team/OurTeam"
import QuestionPage from "../../components/Qtn/QuestionPage"
import Comment from "../../servicePages/comment/Comment"

function Home() {
  return (
    <>
      {/* Body space */}
      <div className="container px-0 py-0 mx-0">
        {/* general container */}
        {/* Head Body starts*/}
        <div className="container">
          {/* space btn nav and body */}
          <div className="title"></div>
          {/* space btn nav and body ends*/}
          <div className="backImage">
            <div className="front">
              {/* space to fit a car */}
          <p className="title"></p>
          <p className="title"></p>
          {/* space to fit a car ends*/}
              <h2 className="title text-center ">GET YOUR DESIRED CAR IN RESONABLE PRICE</h2>

              <h4 className="title text-center">
                 Leon is happy to serve you Your favourate Cars , 
                 Choose The Best Cars You want and Your repairment Kits. 
                 </h4>
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
          <div className="container *:p-0">
            {/* heading */}
            <div className="title">
            <h2 className="text-green-300">Search Your Cars or ToolKits Using search Box</h2>
            </div>
            <div className="head">
              <Search />
            </div>
          </div>
          <br />
          <hr />
        <br />
        </div>
        <br />
       
        {/* Search space ends*/}
        {/*  */}
        {/*  */}
        {/* Main Services starts */}
        <div className="container">
          <div className="container">
          <div className="title">
              <h2 className="text">Our Services</h2>
            </div>
            <div className="block">
              {/* space btn line and content */}
              <div className="head">
              <h2 className="hidden text px-2 py-2 text-black">
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ad, beatae! Esse sed maxime unde,
                eius quae quis nostrum officiis alias odit quia harum
                natus animi ipsa, saepe dolor deserunt ab!</h2>
                </div>
            </div>
            {/* content of services */}
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
                   You Visit Our Website and Choose Your Favourite Car and Follow Instruction and 
                   You will get Your Product in 5 to 7 days.For more information You can call our customer care  
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
                    You Visit Our Website and Choose Your Favourite Car and Follow Instruction to Rent 
                    Our cars and Provide All Requirement and Get Your Car.Call us for More inquirement about Documentation
                    
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
                    You Visit Our Website and Choose Your Favourite ToolKits and Follow Instruction and 
                    You will get Your Product in 2 to 7 days.For more information You can call our customer care 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second line to differ 2 part to 1 */}
          <br />
          <br />
          <hr />
        <br />
        {/* second part of services we provide */}
        <div className="block">
              {/* space btn line and content */}
              <div className="head">
              <h2 className="hidden text px-2 py-2 text-black">
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ad, beatae! Esse sed maxime unde,
                eius quae quis nostrum officiis alias odit quia harum
                natus animi ipsa, saepe dolor deserunt ab!</h2>
                </div>
            </div>
          {/* heading ends */}
          {/* 2 part starts */}
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
        <div className="invisible">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Doloribus, id! Suscipit ex voluptatibus, alias qui asperiores mollitia corporis 
          accusamus at eius fuga voluptas quaerat excepturi repudiandae, atque magni adipisci 
          reiciendis!</div>
        <hr />

       {/* Slide block where we show latest products we have in arrays */}
        {/* Slider Starts */}
        <div className="container">
          <div className="container">
            <div className="title">
              NEW FEATURED PRODUCTS
              </div>
            <Slide />
          </div>
          {/* slider for new featured ends */}
          {/*  */}
          {/*  */}
          <div className="title">
            <hr />
          </div>
          {/* TOOLKITS */}
          {/* ToolKits slide starts */}
          
          <div className="container">
        <div className="title">
         NEW FEATURED TOOLKITS
        </div>
            <SlideToolKit />
          </div>
        </div>
        {/* Slider toolkits ends */}
        {/*  */}
        {/*  */}
      <div className="title">
        <hr />
      </div>
        {/* Branding sites starts*/}
        <div className="container">
          <div className="brands">
            <div className="title">
                CAR BRANDS WE HAVE IN STOCK
            </div>
              <div className="head">
                <h2 className="text">
                  Choose Your Favourite Branded Car as You can
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
       <div className="title">
        <hr />
       </div>
       {/*  */}
       {/* NEW FEATURED CARS */}
        {/* Featured New cars starts*/}
        <div className="container">
          <div className="backCar">
            {/* title */}
            <div className="title">CHECKOUT NEW FEATURED CARS AVAILABLE IN STOCK</div>
            
            <h3 className="text">We Have New Featured Cars , Be The 1 <sup>st</sup> To Buy Yours Now . 
            We have Limitted Stock Due To much Orders and also Due to Demands and Best Qualited Product We Serve</h3>
          </div>
          <App />
        </div>
        {/* Featured New cars ends*/}
        {/*  */}
        {/*  */}
        <div className="title">
          <hr />
        </div>
       {/*  */}
       {/*  */}
       {/* NEW TOOLKITS FEATURED */}
        {/* Featured New Toolkits starts*/}

        <div className="container">
          <div className="backCar">
            {/* heading */}
            <div className="title">
            CHECKOUT NEW FEATURED TOOLKITS AVAILABLE IN STOCK
            </div>
            <h3 className="text">We Have New Featured Toolkits , Be The 1 <sup>st</sup> To Buy Yours Now . 
            We have Limitted Stock Due To much Orders and also Due to Demands and Best Qualited Product We Serve</h3>
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
        <div className="title">
          <hr />
        </div>
        {/*  */}
        {/*  */}
              {/* NEW FEATURED RENTAL CARS */}
        {/* Rental Cars */}
        {/* Featured New Rent Cars start*/}
        <div className="container">
          <div className="backCar">
            <div className="title">
            CHECKOUT NEW FEATURED RENTAL CARS AVAILABLE IN STOCK
            </div>
            <h3 className="text">We Have New Featured Rental Cars , Be The 1 <sup>st</sup> To Book Yours Now . 
            We have Limitted Stock Due To much Orders and also Due to Demands and Best Qualited Product We Serve</h3>
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
        <div className="title">
          <hr />
        </div>
        {/*  */}
        {/*  */}
        {/* FEATURED CARS UNDER !% */}
        {/* Featured  start*/}
        <div className="container">
          <div className="backCar">
            {/* heading */}
            <div className="title">
              FEATURED CARS UNDER 15K $
            </div>
            <h2 className="text-center">Shop Your Cars </h2>
            <label htmlFor="mention">We also give you warrant of 12 months</label>
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
      <div className="title">
        <hr />
      </div>
       {/*  */}
       {/*  */}
       {/* TESTIMONY PARTS */}
        {/* testimony part start*/}
        <div className="container">
          <div className="container">
            <div className="head">
              <Testimony />
            </div>
          </div>
        </div>
        {/* Featured testimony part ends*/}
            {/*  */}
            {/*  */}
            <div className="title">
              <hr />
            </div>
            {/*  */}
            {/*  */}
            {/* QUESTION PAGE */}
  
        {/* Featured question page start*/}
        <div className="container">
          <div className="container">
            <div className="head">
              <QuestionPage />
            </div>
          </div>
        </div>
        {/* Featured question page ends*/}
      {/*  */}
      {/*  */}
      <div className="title">
        <hr />
      </div>
      {/*  */}
      {/*  */}
      {/* TECHNICAL TEAM */}
        {/* Featured technical team start*/}
        <div className="container">
          <div className="container">
            <div className="head">
              <OurTeam />
            </div>
          </div>
        </div>
        {/* Featured technical team ends*/}
            {/*  */}
            {/*  */}
            <div className="title">
             <hr />
            </div>
          {/*  */}
          {/*  */}

         {/*FORM ACTION [MESSAGES][LOGIN][MAKE ORDER] */}
         <div className="container">
          <div className="title">
            MAKE ORDER / MAKE A COMMENTS OR TESTIMONY / LOGIN
          </div>
          <label htmlFor="info">To make Order and Testimony requires To first LogIn</label>
          <div className="comment">
           <Comment/> 
          </div>
         </div>
          <div className="title">
            <hr />
          </div>
       
      </div>

    </>
  )
}

export default Home