import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  link: string;
}

const SidebarItem: React.FC<Props> = ({ name, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <li
      className="rounded-sm hover:bg-black hover:text-white hover:rounded-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={link} className="flex items-center p-2 space-x-3">
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
          className={hovered ? 'stroke-white' : ''}
        >
          <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z" />
        </svg>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
