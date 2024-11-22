import { useState } from "react";
import { Link } from "react-router-dom";
import welcome from '../../../assets/images/welcome.jpg'
import Update from '../my profile/Update'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <><div className="title"></div>
    <div className="flex">
                    {/* FieldRequest */}
                    <div
                        className={`top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                            } transition-transform duration-300 lg:translate-x-0`}
                    >
                        <div className="p-4 text-lg font-bold">LD</div>
                        <nav className="mt-4">
                            <ul>
                                <li>
                                    <Link
                                        to="/5Eqi3pEyTJliNa7ANd9GcQN"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    > <button>Dashboard</button>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link
                                        to="/admin/profile"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Profile</button>
                                    </Link>
                                </li>
                                <br />
                                <hr />
                                <br />
                                <li>
                                    <Link
                                        to="/Userview"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Users</button>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link
                                        to="/Productview"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Products</button>
                                    </Link>
                                </li>
                                <br />
                                <hr />
                                <p>CREATES</p>
                                <br />
                                <li>
                                    <Link
                                        to="/admin/create/user"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Create User</button>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link
                                        to="/admin/create/post"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Create Posts</button>
                                    </Link>
                                </li>
                                <br />
                                <hr />
                                <p>NOTIFY</p>
                                <br />
                                <li>
                                    <Link
                                        to="/Request"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Requests</button>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link
                                        to="/Testimony"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Testimony</button>
                                    </Link>
                                </li>
                                <br />
                                <hr />
                                <p>VIEW</p>
                                <br />
                                <li>
                                    <Link
                                        to="/View/Booking"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Requests</button>
                                    </Link>
                                </li>
                                <br />
                                <li>
                                    <Link
                                        to="/View/Testimony"
                                        className="block px-4 py-2 text-black hover:bg-gray-700 rounded"
                                    >
                                        <button>Testimony</button>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-gray-800 text-white rounded"
                    >
                        ☰
                    </button>

                    {/* Main Content */}
                    <div className="flex-grow bg-gray-100 min-h-screen ">
    
      <div className="left">
        <div className="">
            <div className="img">
    
                  </div>
              <div className="names">
              <img
                    alt="Prof"
                    src={welcome}
                    className="h-40 w-52 rounded-full mx-14"
                  />
                <Link> <h2 className="text-center text-green-400">Admin</h2></Link>
                <h2 className="text-center text-green-600">Kigali , Rwanda</h2>
                <Link><button type="button" className="button">Update Bio</button> </Link>
                
                </div>    
                  
                  </div>
      </div>
      <div className="left">
        <div className="container">
          <Update/>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Sidebar;


