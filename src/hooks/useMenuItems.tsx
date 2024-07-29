import { GiVerticalBanner } from 'react-icons/gi';
import { HiUsers } from 'react-icons/hi';
import { IoNotifications } from 'react-icons/io5';
import { MdReport, MdSpaceDashboard } from 'react-icons/md';
import { RxDot } from 'react-icons/rx';
const useMenuItems = () => {
  return [
    {
      icon: <MdSpaceDashboard />,
      title: 'All Notes',
      route: ``,
      submenus: [
        {
          icon: <RxDot />,
          title: 'Add Notes',
          route: ``
        },
        {
          icon: <RxDot />,
          title: 'View All Notes',
          route: ``
        }
      ]
    },
    {
      icon: <HiUsers />,
      title: 'Trash',
      route: ``,
      submenus: []
    },

    {
      icon: <MdReport />,
      title: 'Support',
      route: ``,
      submenus: []
    },
    {
      icon: <IoNotifications />,
      title: 'Notifications',
      route: ``,
      submenus: []
    },
    {
      icon: <GiVerticalBanner />,
      title: 'Config',
      route: ``,
      submenus: []
    }
  ];
};

export default useMenuItems;
