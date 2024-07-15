import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import infinilogo from './assets/infinibg.png';
import './Header.css';

const OtherHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full z-50 fixed bg-customDarkBlue top-0 left-0">
      <div className="flex items-center justify-between p-4">
        <Link to="/">
          <img src={infinilogo} alt="logo" className="h-28 w-28 ml-4" />
        </Link>

        {/* Hamburger Icon */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mr-8">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-gray-300 text-xl font-bold underline-animation mr-5"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className="text-white hover:text-gray-300 text-xl font-bold underline-animation mr-5"
              >
                About Us
              </NavLink>
            </li>
            <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-300 text-xl font-bold underline-animation mr-5"
              >
                Services
              </NavLink>
              {isDropdownOpen && (
                <ul className="absolute left-0 bg-customDarkBlue rounded shadow-lg flex flex-col">
                  <li>
                    <NavLink
                      to="/services/basic-dental-services"
                      className="block text-white hover:text-gray-300 text-base font-bold px-4 py-2 w-48"
                    >
                      Basic Dental Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/specialized-services"
                      className="block text-white hover:text-gray-300 text-base font-bold px-4 py-2"
                    >
                      Specialized Services
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink
                to="/book"
                className="text-white hover:text-gray-300 text-xl font-bold underline-animation mr-5"
              >
                Book Now
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default OtherHeader;
