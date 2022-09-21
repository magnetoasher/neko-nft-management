import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem';

const listItems = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'calendar',
    link: '/calendar',
  },
  {
    name: 'spreadsheet',
    link: '/spreadsheet',
  },
  {
    name: 'database',
    link: '/database',
  },
];

const getScreenWidth = () => {
  const { innerWidth: width } = window;

  return width;
};

const Sidebar: React.FC = () => {
  // const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  // const [screenWidth, setScreenWidth] = useState<number>(getScreenWidth());

  // if (screenWidth < 640) {
  //   setIsCollapsed(true);
  // } else {
  //   setIsCollapsed(false);
  // }

  return (
    <div className="flex">
      <aside
        className={`flex flex-col h-screen p-5 bg-white shadow w-56 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in`}
      >
        <div className="space-y-3">
          <div className="flex items-center justify-center mb-16">
            <Link to="/">
              <h2 className="text-3xl font-bold text-[#A04EF6]">LOGO</h2>
            </Link>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm leading-8">
              {listItems.map((item, index) => (
                <SidebarItem key={index} name={item.name} link={item.link} />
              ))}
            </ul>
          </div>
        </div>
      </aside>
      {/* <svg
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
        fill="#2563EB"
        viewBox="0 0 100 80"
        width="40"
        height="40"
      >
        <rect width="100" height="10"></rect>
        <rect y="30" width="100" height="10"></rect>
        <rect y="60" width="100" height="10"></rect>
      </svg> */}
    </div>
  );
};

export default Sidebar;
