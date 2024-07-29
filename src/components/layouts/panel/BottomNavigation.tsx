import { ReactDispatch } from '@/types/core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineSetting,
  AiTwotoneSetting
} from 'react-icons/ai';
import { IoNotificationsOutline, IoNotificationsSharp } from 'react-icons/io5';
import { LuAlignLeft } from 'react-icons/lu';
import { MdManageAccounts, MdOutlineManageAccounts } from 'react-icons/md';

interface BottomNavigationProps {
  responsiveExpand: boolean;
  setResponsiveExpand: ReactDispatch<boolean>;
}

const BottomNavigation: FC<BottomNavigationProps> = ({
  responsiveExpand,
  setResponsiveExpand
}) => {
  const { asPath, push, route } = useRouter();

  const user = {
    role: 'admin'
  };
  const bottomNavigationMenus = [
    {
      icon:
        asPath === `/panel/${user?.role?.toLowerCase()}/profile` ? (
          <MdManageAccounts className="text-quinary" />
        ) : (
          <MdOutlineManageAccounts />
        ),
      path: `/panel/${user?.role?.toLowerCase()}/profile`,
      class: 'text-2xl',
      label: 'Profile',
      fun: () => {
        push(`/panel/${user?.role?.toLowerCase()}/profile`);
      }
    },
    {
      icon: <LuAlignLeft />,
      path: '',
      class: 'text-2xl',
      label: 'Menus',
      fun: () => setResponsiveExpand(true)
    },
    {
      icon:
        asPath === `/panel/${user?.role?.toLowerCase()}/dashboards` ? (
          <AiFillHome />
        ) : (
          <AiOutlineHome />
        ),
      path: `/panel/${user?.role?.toLowerCase()}/dashboards`,
      class: `text-2xl ${
        asPath === `/panel/${user?.role?.toLowerCase()}` ? 'text-quinary' : ''
      }`,
      label: 'Home',
      fun: () => {
        push(`/panel/${user?.role?.toLowerCase()}/dashboards`);
      }
    },
    {
      icon:
        asPath === '/admin/notifications' ? (
          <IoNotificationsSharp />
        ) : (
          <IoNotificationsOutline />
        ),
      path: '/admin/notifications',
      class: `text-2xl ${
        asPath === '/admin/notifications' ? 'text-quinary' : ''
      }`,
      label: 'Notifications',
      fun: () => {
        push(`/panel/${user?.role?.toLowerCase()}/notifications`);
      }
    },
    {
      icon:
        asPath === `/panel/${user?.role?.toLowerCase()}/change-password` ? (
          <AiTwotoneSetting className="text-quinary" />
        ) : (
          <AiOutlineSetting />
        ),
      path: `/panel/${user?.role?.toLowerCase()}/change-password`,
      class: 'text-2xl',
      label: 'Settings',
      fun: () => {}
    }
  ];

  return (
    <section className="fixed md:hidden bottom-0 h-14 flex items-center justify-center left-0 right-0 z-[200] w-full">
      <div className="w-full h-full main-container grid grid-cols-5 items-center rounded-t-[2rem]  bg-dark">
        {bottomNavigationMenus.map((curMenu, i) => (
          <div className="w-full flex items-center justify-center" key={i}>
            <div
              onClick={curMenu.fun}
              className="flex flex-col items-center text-center gap-0.5 relative"
            >
              <div
                className={`${
                  i === 2
                    ? 'h-16 w-16 flex items-center rounded-full border-4 border-white justify-center bg-primary absolute -bottom-2'
                    : ''
                } text-white  text-xl`}
              >
                {curMenu.icon}
              </div>
              <p className={`text-[9px] text-white`}>{curMenu.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BottomNavigation;
