import { useMenuItems } from '@/hooks';
import { ReactDispatch } from '@/types/core';
import { errorHelper } from '@/utils/helper';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { toast } from 'react-toastify';
import Sidebar from './Sidebar';

interface PanelDrawerProps {
  isAppDrawerOpen: boolean;
  setIsAppDrawerOpen: ReactDispatch<boolean>;
}
const PanelDrawer: FC<PanelDrawerProps> = ({
  isAppDrawerOpen,
  setIsAppDrawerOpen
}) => {
  const [selectMenu, setSelectMenu] = useState(0);

  return (
    <div
      className={`flex min-h-screen h-full w-full overflow-hidden relative bg-white`}
    >
      {/* -------------------- side bar part------------------- */}
      <Sidebar
        selectMenu={selectMenu}
        setIsAppDrawerOpen={setIsAppDrawerOpen}
        setSelectMenu={setSelectMenu}
      />

      {/* --------------------- main drawer section ------------------- */}
      <div
        className={`w-[calc(100%-5rem)] ${
          isAppDrawerOpen ? 'block opacity-100' : 'opacity-0'
        }  h-full border-r border-primary-border `}
      >
        <MainDrawer
          selectMenu={selectMenu}
          onClose={() => {
            setIsAppDrawerOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default PanelDrawer;

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

  const handleLogout = async () => {
    try {
      push('/');
      toast.success('Logout successfully');
    } catch (error) {
      errorHelper('Logout failed');
    }
  };
  const menuItems = useMenuItems();
  return (
    <section className="flex flex-col justify-between relative h-full p-5">
      <div className="flex flex-col gap-6">
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
        <button
          onClick={() => handleLogout()}
          className="w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] bg-primary text-white text-sm flex items-center justify-center py-2 rounded-md gap-1"
        >
          <IoIosLogOut className="text-xl" />
          Logout
        </button>
      </div>
    </section>
  );
};
