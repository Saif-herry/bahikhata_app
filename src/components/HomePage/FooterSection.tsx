import React from 'react';

const FooterSection = () => {
  return (
    <div className="w-full flex gap-10 pt-14 pb-6 px-52">
      <aside className="w-full flex  gap-4 items-center justify-between">
        <span>Contact Us</span>
        <span>Help</span>
        <span>Blog</span>
        <span>Developers</span>
        <span>Terms & Condition</span>
        <span>Privacy</span>
        <span>Press</span>
        <span> Privacy Notice for California Users</span>
      </aside>
      <p className="flex items-start justify-start">
        <span>©</span> <span>Automattic</span>
      </p>
    </div>
  );
};

export default FooterSection;
