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

const Sidebar: React.FC = () => {
  return (
    <div className="flex">
      <aside className="flex flex-col h-screen p-5 bg-white shadow w-56 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in">
        <div className="space-y-3">
          <div className="flex items-center justify-center mb-16">
            <Link to="/">
              <h2 className="text-xl font-bold">LOGO</h2>
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
    </div>
  );
};

export default Sidebar;
