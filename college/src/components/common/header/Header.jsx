import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  HomeIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Head from "./Head";
import { auth } from '../../../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useAuth } from "../../../AuthContext"; // Adjust the path as per your project structure
import "./header.css"; // Add any additional CSS if needed

const Header = () => {
  const { currentUser } = useAuth(); // Assuming useAuth provides currentUser
  const [click, setClick] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out: ', error);
    }
  };

  return (
    <>
      <Head />
      <header>
        <button
          className="fixed top-5 left-5 z-50 text-gray-500 border-none cursor-pointer text-2xl mr-8"
          onClick={() => setClick(!click)}
        >
          {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars text-gray-600 '></i>}
        </button>
        <nav
          className={`fixed left-0 top-0 h-full w-64 bg-teal-400 shadow-lg transform ${
            click ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out z-40 overflow-y-auto`}
        >
          <div className="p-6">
            <h1 className="text-2xl font-semibold mt-6 text-white">Learn-With-Gagan</h1>
            <ul className="list-none p-0 m-0" onClick={() => setClick(false)}>
              <li className="p-4 border-b">
                <Link to="/home" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <HomeIcon className="h-6 w-6 mr-3" />
                  Home
                </Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/courses" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <ClipboardDocumentListIcon className="h-6 w-6 mr-3" />
                  All Courses
                </Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/about" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <UsersIcon className="h-6 w-6 mr-3" />
                  About
                </Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/team" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <UsersIcon className="h-6 w-6 mr-3" />
                  Team
                </Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/pricing" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <Cog6ToothIcon className="h-6 w-6 mr-3" />
                  Pricing
                </Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/journal" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <ClipboardDocumentListIcon className="h-6 w-6 mr-3" />
                  Journal
                </Link>
              </li>
              <li className="p-4 border-b">
                <Link to="/contact" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                  <ClipboardDocumentListIcon className="h-6 w-6 mr-3" />
                  Contact
                </Link>
              </li>
              {currentUser ? (
                <li className="p-4 border-b">
                  <button
                    onClick={handleLogout}
                    className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md w-full text-left"
                  >
                    <ArrowRightOnRectangleIcon className="h-6 w-6 mr-3" />
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="p-4 border-b">
                    <Link to="/login" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                      <HomeIcon className="h-6 w-6 mr-3" />
                      Login
                    </Link>
                  </li>
                  <li className="p-4 border-b">
                    <Link to="/register" className="flex items-center p-2 text-base font-semibold hover:bg-gray-700 rounded-md">
                      <HomeIcon className="h-6 w-6 mr-3" />
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
      {click && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setClick(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
