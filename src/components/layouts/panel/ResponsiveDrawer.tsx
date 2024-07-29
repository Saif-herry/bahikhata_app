import { CustomDrawer } from '@/components/core';
import { useMenuItems } from '@/hooks';
import { ReactDispatch } from '@/types/core';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import Sidebar from './Sidebar';

interface ResponsiveDrawerProps {
  responsiveExpand: boolean;
  setResponsiveExpand: ReactDispatch<boolean>;
}

const ResponsiveDrawer: FC<ResponsiveDrawerProps> = ({
  responsiveExpand,
  setResponsiveExpand
}) => {
  const [selectMenu, setSelectMenu] = useState(0);

  return (
    <CustomDrawer
      open={responsiveExpand}
      onClose={() => setResponsiveExpand(false)}
    >
      <div
        className={`flex h-full w-[85vw] md:w-[50vw] overflow-hidden relative bg-white `}
      >
        {/* -------------------- side bar part------------------- */}
        <Sidebar
          selectMenu={selectMenu}
          setIsAppDrawerOpen={setResponsiveExpand}
          setSelectMenu={setSelectMenu}
        />

        {/* --------------------- main drawer section ------------------- */}
        <div
          className={`w-[calc(100%-5rem)] ${
            responsiveExpand ? 'block opacity-100' : 'opacity-0'
          }  h-full `}
        >
          <MainDrawer
            selectMenu={selectMenu}
            onClose={() => setResponsiveExpand(false)}
          />
        </div>
      </div>
    </CustomDrawer>
  );
};

export default ResponsiveDrawer;

const MainDrawer = ({
  selectMenu,
  onClose
}: {
  selectMenu: number;
  onClose: () => void;
}) => {
  const { push, asPath } = useRouter();
  const handleChangeRoute = (path: string) => {
    onClose();
    if (path) push(path);
  };
  const menuItems = useMenuItems();
  return (
    <section className="flex flex-col justify-between relative h-full p-3">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-medium">{menuItems[selectMenu].title}</h1>
        <div className="flex flex-col gap-3">
          {menuItems[selectMenu].submenus?.map((curMenu, i) => (
            <div
              onClick={() => handleChangeRoute(curMenu?.route)}
              className={`text-sm cursor-pointer flex items-center gap-2 ${
                asPath === curMenu?.route ? 'text-primary font-semibold' : ''
              }`}
              key={i}
            >
              <span>{curMenu?.icon}</span>
              {curMenu?.title}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <button className="w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-primary text-white text-sm flex items-center justify-center py-2 rounded-md gap-1">
          <IoIosLogOut className="text-xl" />
          Logout
        </button>
      </div>
    </section>
  );
};
