
import { Link } from "react-router-dom"

function Contact() {
  return (
    <>
  
    <div className="container">
    <div className="title">CONTACT US PAGE</div>
        <div className="heading">
         <h3 className="text-center font-bold">Create user account to start enjoy</h3>
         <div className="xleft">
         <h4 className="text-center">
          Create an account here 
          <Link to={'/Register'}> 
          <button className="btn"> Register </button>
          </Link>
          </h4>
         </div>
         <div className="xleft">
         <h4 className="text-center">
          Already have an account log through here 
          <Link to={'/Login'}>
          <button className="btn">  Login</button>
          </Link>
          </h4>
         </div>
         <div className="container">
          <div className="left">
            <div className="title">LOCATION</div>
            <div className="location">
              <div className="title"></div>
              <div className="title"></div>
              <div className="title"></div>
            </div>
          </div>
          {/*  */}
          <div className="left">
            <div className="title">MAIL US</div>
            <div className="content">
              <div className="heading">
                <p className="text-green-600"> leonakingeneye2002@gmail.com</p>
                <p className="text-green-600"> kingsleon250@gmail.com</p>
              </div>
              <div className="title">WORKING HOURS</div>
              <h2 className="text">Opening :7Am</h2>
              <h2 className="text">Closing :7Pm</h2>
              <p>7Days a week</p>
            </div>
          </div>
          {/*  */}
          <div className="left">
            <div className="title">Messaging</div>
          </div>
          <div className="content">
            
          </div>
         </div>

        </div>
 {/*  */}
 {/*  */}

  
         
    </div>
   
    </>
  )
}

export default Contact