import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
// pages
import Home from "./pages/home/Home";
import Services from "./pages/service/Services";
import Contact from "./pages/contact/Contact"
import NewFeatured from "./pages/newfeatured/NewFeatured"
import NewFeaturedTool from "./pages/newfeatured/NewFeaturedTool"
import Brands from "./pages/brands/Brands"
          import Login from "./pages/form/login/Login";
          import Register from "./pages/form/registration/Register"
          import CarSell from "./servicePages/rent/CarSell";
          import FieldTeam from "./admin/pages/view/request/FieldRequest";
import ToolKit from "./servicePages/tools/ToolKit";
import FormCarRFental from "./servicePages/rental-form/FormCarRFental";
     import { RentCartProvider } from "./components/Rental/context/cart"
     import { CheepProvider } from "./components/Question/context/cart";
     import { CartProvider } from "./components/Cart/context/cart";
     import { ToolsCartContext } from "./servicePages/tools/context/cart";
     import Dashboard from "./admin/Dashboard"
          import Create from "./admin/pages/post/Create"
          import Createuser from "./admin/pages/users/Createuser"
          import Payment from "./servicePages/payment/Payment"
          import CreatePost from "./pages/createContent/CreatePost"
import UserDashboard from "./admin/user/UserDashboard"
import Myprofile from "./admin/pages/my profile/Myprofile";
   import Userview from "./admin/pages/view/users/Userview"
   import Productview from "./admin/pages/view/products/Productview"
   import FieldRequest from "./admin/pages/view/request/FieldRequest";
import Testimonny from "./admin/pages/view/users/comment/Testimonny";
import ViewTestimonny from "./admin/pages/view/users/comment/ViewTestimony"
import Booking from './admin/pages/view/booking/Booking'
   import UserRequest from './admin/user/components/Request/userRequest'
   import UserTestimony from './admin/user/components/testimony/UserTestimony'
   import UserPost from './admin/user/components/post/UserPost'
import ViewBooking from "./admin/user/components/Request/components/ViewBooking";
import ViewPost from "./admin/user/components/post/components/ViewPost";
import ViewTestimony from "./admin/user/components/testimony/components/ViewTestimony";
const App = () => {
     return (


          <CheepProvider>
               <CartProvider>
                    <ToolsCartContext>
                         <RentCartProvider>
                              <BrowserRouter>
                                   <Navbar />
                                   <Routes>
                                        <Route element={<Dashboard />} path='/5Eqi3pEyTJliNa7ANd9GcQN'></Route>
                                        <Route element={<Home />} path='/'></Route>
                                        <Route element={<Services />} path='/Service'></Route>
                                        <Route element={<Contact />} path='/Contact-us'></Route>
                                        <Route element={<NewFeatured />} path='/NewFeatured'></Route>
                                        <Route element={<NewFeaturedTool />} path='/NewFeaturedTool'></Route>
                                        <Route element={<Brands />} path='/Branding'></Route>
                                        {/* Form Routes */}
                                        <Route element={<Login />} path='/Login'></Route>
                                        <Route element={<Register />} path='/Register'></Route>
                                        {/* ViewPage */}
                                        <Route element={<CarSell />} path='/Services/SellCars'></Route>
                                        <Route element={<ToolKit />} path='/Services/ToolKit'></Route>
                                        <Route element={<FieldTeam />} path="/Request/ImediateTeamSupport"> </Route>
                                        <Route element={<FormCarRFental />} path='/FormCarRFental'></Route>
                                        {/* admin pages */}
                                        <Route element={<Create />} path='/admin/create/post'></Route>
                                        <Route element={<Createuser />} path='/admin/create/user'></Route>
                                        {/* user admin pannel pages */}
                                        <Route element={<Myprofile />} path='/admin/profile'></Route>
                                        <Route element={<UserDashboard />} path='/833 103.803C182.209 103'></Route>
                                        {/* Payment methods */}
                                        <Route element={<Payment />} path='/Payment/Methods'></Route>
                                        <Route element={<CreatePost />} path='/CreatePost'></Route>
                                        {/* admin pannel */}
                                        <Route element={<Userview />} path='/Userview'></Route>
                                        <Route element={<Productview />} path='/Productview'></Route>
                                        {/*  */}
                                        <Route element={<Createuser />} path='/Create-user'></Route>
                                        <Route element={<FieldRequest />} path='/Request'></Route>
                                        {/*  */}
                                        <Route element={<Testimonny />} path='/Testimony'></Route>
                                        <Route element={<ViewTestimonny />} path='/View/Testimony'></Route>
                                        {/*  */}
                                        <Route element={<Booking />} path='/View/Booking'></Route>
                                        <Route element={<UserRequest />} path='/833 103/Booking'></Route>
                                        {/*  */}
                                        <Route element={<UserTestimony />} path='/833 103/Testimony'></Route>
                                        <Route element={<UserPost />} path='/833 103/Post'></Route>
                                        {/* user Views */}
                                        <Route element={<ViewBooking />} path='/833 103/301 338/Booking'></Route>
                                        <Route element={<ViewPost />} path='/833 103/301 338/Post'></Route>
                                        {/*  */}
                                        <Route element={<ViewTestimony />} path='/833 103/301 338/Testimony'></Route>
                                   </Routes>
                                   <Footer />
                              </BrowserRouter>
                         </RentCartProvider>
                    </ToolsCartContext>
               </CartProvider>
          </CheepProvider>


     );
};

export default App;