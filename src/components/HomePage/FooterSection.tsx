import React from 'react';

const FooterSection = () => {
  return (
    <div className=" w-full flex gap-10 pt-14 pb-6 px-4 lg:px-52">
      <aside className="w-full flex  gap-4 items-center justify-between">
        <span className="hidden lg:block ">Contact Us</span>
        <span>Help</span>
        <span>Blog</span>
        <span>Developers</span>
        <span className="hidden lg:block ">Terms & Condition</span>
        <span>Privacy</span>
        <span>Press</span>
        <span className="hidden md:block ">
          Privacy Notice for California Users
        </span>
      </aside>
      <p className="hidden items-start justify-start lg:block ">
        <span>©</span> <span>Automattic</span>
      </p>
    </div>
  );
};

export default FooterSection;
