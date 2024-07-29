import React from 'react';

const NavSection = () => {
  return (
    <div className="w-full">
      <aside className="px-4 w-full flex items-center justify-normal">
        <div className="flex justify-center items-center w-full">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxcYUyBLMRMtmWzKwc_WCj9ZsEnrpyS-_KwlFf-SHnImZELsMXa0_1NbNLhqFSETpSuE&usqp=CAU"
            alt="broken-img"
            className="w-40 h-20 cursor-pointer"
          />
        </div>
        <div className="flex gap-6 items-center justify-center w-full cursor-pointer">
          <span>Contact Us</span>
          <span>Help</span>
          <span>Support Forum</span>
          <span>Blog</span>
        </div>
      </aside>
    </div>
  );
};

export default NavSection;
