import { Link } from 'react-router-dom';

import SidebarItem from './SidebarItem';

const listItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Calendar',
    link: '/calendar',
  },
  {
    name: 'Spreadsheet',
    link: '/spreadsheet',
  },
  {
    name: 'Database',
    link: '/database',
  },
];

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-5 bg-white shadow w-56">
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
      </div>
    </div>
  );
}
