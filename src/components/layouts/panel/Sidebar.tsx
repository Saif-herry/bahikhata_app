import { CustomDrawer, CustomTooltip } from '@/components/core';
import { ReactDispatch } from '@/types/core';
import { Avatar, Zoom } from '@mui/material';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { useMenuItems } from '@/hooks';

interface SidebarProps {
  selectMenu: number;
  setSelectMenu: ReactDispatch<number>;
  setIsAppDrawerOpen: ReactDispatch<boolean>;
}

const Sidebar: FC<SidebarProps> = ({
  selectMenu,
  setSelectMenu,
  setIsAppDrawerOpen
}) => {
  const menuItems = useMenuItems();
  const { asPath } = useRouter();
  const foundItem = menuItems?.find((curMenu, i) =>
    curMenu?.submenus?.some((curSub) => curSub?.route === asPath)
  );
  const foundIndex = foundItem && menuItems?.indexOf(foundItem as any);
  useEffect(() => {
    if (foundIndex) setSelectMenu(foundIndex);
  }, [foundIndex, asPath]);
  return (
    <div className="w-16 bg-primary-border/60 lg:bg-transparent md:w-20 h-full flex items-center gap-2 flex-col flex-cols border-r border-primary-border">
      <div className="h-16 items-center justify-center flex object-contain w-full">
        <img
          src="data:image/png;base64,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"
          alt="logo"
          className="w-10 "
        />
      </div>
      <div className="w-full h-[calc(100%-4rem)] py-3 flex flex-col justify-between">
        <div className="flex flex-col items-center gap-3 justify-center w-full">
          {menuItems?.map((curMenu, i) => (
            <CustomTooltip
              key={i}
              title={curMenu?.title}
              placement="right"
              TransitionComponent={Zoom}
            >
              <aside className="flex flex-col items-center justify-center">
                <div
                  onClick={() => {
                    setSelectMenu(i);
                    setIsAppDrawerOpen(true);
                  }}
                  className={`w-11 h-11 text-[1.35rem] rounded-lg transition-all duration-200 ease-linear cursor-pointer hover:bg-primary-blue/10 flex items-center justify-center ${
                    selectMenu === i
                      ? 'bg-primary/10 lg:bg-primary-blue/10 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-primary'
                      : ''
                  }`}
                >
                  {curMenu.icon}
                </div>
                <span
                  className={`
              ${selectMenu === i ? ' text-primary text-xs' : 'text-xs'}`}
                >
                  {curMenu?.title}
                </span>
              </aside>
            </CustomTooltip>
          ))}
        </div>
        <SettingAndProfile />
      </div>
    </div>
  );
};
export default Sidebar;

const SettingAndProfile = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openLgProfile, setOpenLgProfile] = useState(false);
  return (
    <section className="flex gap-3 h-28 relative justify-end flex-col items-center">
      <CustomDrawer
        anchor="left"
        open={openLgProfile}
        onClose={() => setOpenLgProfile(false)}
      ></CustomDrawer>
      <CustomDrawer
        anchor="bottom"
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      ></CustomDrawer>

      <CustomTooltip
        title="Settings"
        placement="right"
        TransitionComponent={Zoom}
      >
        <div
          onClick={() => {}}
          className={`w-11 h-11 text-[1.35rem] rounded-lg transition-all duration-200 ease-linear cursor-pointer  hover:bg-primary-blue/10 flex items-center justify-center `}
        >
          <IoSettingsSharp />
        </div>
      </CustomTooltip>
      <div
        className="w-fit h-fit hidden md:block cursor-pointer"
        onClick={() => setOpenLgProfile((pre) => !pre)}
      >
        <Avatar className="!w-12 cursor-pointer !h-12"></Avatar>
      </div>
      <div
        className="w-fit h-fit block md:hidden cursor-pointer"
        onClick={() => setOpenProfile((pre) => !pre)}
      >
        <Avatar className="!w-12 cursor-pointer !h-12"></Avatar>
      </div>
    </section>
  );
};
