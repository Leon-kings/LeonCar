import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";
// pages
import Home from "./pages/home/Home";
import Services from "./pages/service/Services";
import Contact from "./pages/contact/Contact"
import NewFeatured from "./pages/newfeatured/NewFeatured"
import Brands from "./pages/brands/Brands"
import Login from "./pages/form/login/Login";
import Register from "./pages/form/registration/Register"
import CarSell from "./servicePages/rent/CarSell";
import FieldTeam from "./servicePages/requestTeam/FieldTeam";
import ToolKit from "./servicePages/tools/ToolKit";
import FormCarRFental from "./servicePages/rental-form/FormCarRFental";
import { RentCartProvider } from "./components/Rental/context/cart"
import { CheepProvider } from "./components/Question/context/cart";
import { CartProvider } from "./components/Cart/context/cart";
import { ToolsCartContext } from "./servicePages/tools/context/cart";
import Dashboard from "./admin/Dashboard"
          import Users from "./admin/pages/Users"
          import SellCars from "./admin/pages/SellCars"
          import Payment from "./servicePages/payment/Payment"
const App = () => {
     return (


          <CheepProvider>
               <CartProvider>
                    <ToolsCartContext>
                         <RentCartProvider>
                              <BrowserRouter>
                                   <Navbar />
                                   <Routes>
                                        <Route element={<Dashboard />} path='/Dashboard'></Route>
                                        <Route element={<Home />} path='/'></Route>
                                        <Route element={<Services />} path='/Service'></Route>
                                        <Route element={<Contact />} path='/Contact-us'></Route>
                                        <Route element={<NewFeatured />} path='/NewFeatured'></Route>
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
                                        <Route element={<Users />} path='/admin/users-browsered'></Route>
                                        <Route element={<SellCars />} path='/admin/selled-cars'></Route>
                                        {/* Payment methods */}
                                        <Route element={<Payment />} path='/Payment/Methods'></Route>
                                        
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