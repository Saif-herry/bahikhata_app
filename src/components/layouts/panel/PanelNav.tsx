import { ReactDispatch } from '@/types/core';
import { toggleFullScreen } from '@/utils/helper';
import { IconButton } from '@mui/material';
import { FC, useState } from 'react';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuAlignLeft, LuLayoutDashboard } from 'react-icons/lu';

interface PanelNavProps {
  setIsAppDrawerOpen: ReactDispatch<boolean>;
  setResponsiveExpand: ReactDispatch<boolean>;
}

const PanelNav: FC<PanelNavProps> = ({
  setIsAppDrawerOpen,
  setResponsiveExpand
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <nav
      className={`w-full h-fit py-1 md:py-0 md:h-16 sticky top-0 z-[99] border-b primary-border bg-white/80 backdrop-blur-md`}
    >
      <div className="w-full h-full panel-container flex items-center justify-between">
        <div
          className="text-2xl hidden lg:block cursor-pointer"
          onClick={() => {
            setIsAppDrawerOpen((pre) => !pre);
          }}
        >
          <LuAlignLeft />
        </div>
        <div className="flex items-center gap-2">
          <div
            className="text-2xl hidden md:block lg:hidden cursor-pointer"
            onClick={() => setResponsiveExpand((pre) => !pre)}
          >
            <LuAlignLeft />
          </div>
          <img
            src="/logos/primary-black.png"
            alt="logo"
            className="w-24 lg:hidden"
          />
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 w-60 bg-[#e9eef5] rounded-3xl py-1.5 text-xs px-3">
            <span className="text-xl text-[#1e293b]">
              <CiSearch />
            </span>
            <input
              type="input"
              className={`form-control bg-transparent font-normal focus:outline-none outline-none  focus:text-gray-700 `}
              placeholder="Quick Navigation..."
              autoComplete="off"
            />
          </div>

          <div className="">
            <IconButton
              className="!text-xl"
              onClick={() => toggleFullScreen(isFullScreen, setIsFullScreen)}
            >
              {!isFullScreen ? (
                <AiOutlineFullscreen />
              ) : (
                <AiOutlineFullscreenExit />
              )}
            </IconButton>
            <IconButton className="!text-xl">
              <IoMdNotificationsOutline />
            </IconButton>
            <IconButton className="!text-lg">
              <LuLayoutDashboard />
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default PanelNav;
