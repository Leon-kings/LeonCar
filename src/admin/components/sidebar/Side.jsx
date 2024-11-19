import { useState } from "react";
import { Link } from "react-router-dom";
import ShortList from '../shortlist/ShortList'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <div className="p-4 text-lg font-bold">Responsive Sidebar</div>
        <nav className="mt-4">
          <ul>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-700 rounded"
              >
                Profile
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
    
       <ShortList/>
      </div>
    </div>
  );
};

export default Sidebar;
