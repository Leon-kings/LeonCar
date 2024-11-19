
import { Link } from "react-router-dom"
import ContactWithFile from "./newcontact/ContactWithFile"
import DetailsWithContact from './newcontact/DetailsWithContact'
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
          {/* <div className="left">
            <div className="title">LOCATION</div>
            <div className="location">
              <div className="title"></div>
              <div className="title"></div>
              <div className="title"></div>
            </div>
          </div> */}
          {/*  */}
          <div className="xleft">
            <div className="title">MAIL US</div>
       <DetailsWithContact/>
          </div>
          {/*  */}
          <div className="left">
            <div className="title">Messaging</div>
            <ContactWithFile/>
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