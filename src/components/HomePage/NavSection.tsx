import React, { useState } from 'react';

const NavSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <aside className="px-4 w-full flex items-center justify-between">
        <div className="flex justify-start items-start md:justify-center md:items-center w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxcYUyBLMRMtmWzKwc_WCj9ZsEnrpyS-_KwlFf-SHnImZELsMXa0_1NbNLhqFSETpSuE&usqp=CAU"
            alt="broken-img"
            className="w-40 h-20 cursor-pointer"
          />
        </div>
        <div className="hidden md:flex gap-6 items-center justify-center w-full cursor-pointer">
          <span>Contact Us</span>
          <span>Help</span>
          <span>Support Forum</span>
          <span>Blog</span>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </aside>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 cursor-pointer">
          <span>Contact Us</span>
          <span>Help</span>
          <span>Support Forum</span>
          <span>Blog</span>
        </div>
      )}
    </div>
  );
};

export default NavSection;
