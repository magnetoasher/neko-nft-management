import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface Props {
  name: string;
  link: string;
}

const SidebarItem: React.FC<Props> = ({ name, link }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === link) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location]);

  return (
    <li
      className={`rounded-md hover:bg-black ${active ? 'bg-black' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        to={link}
        className={`flex items-center p-2 space-x-3 text-black hover:text-white ${
          active ? 'text-white' : ''
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={hovered || active ? 'stroke-white' : ''}
        >
          <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
        </svg>
        <span className="capitalized">{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
