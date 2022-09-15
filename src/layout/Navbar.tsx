import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Navbar: React.FC = () => {
  return (
    <nav className="h-[70px]">
      <div className="flex justify-between my-0 mx-auto">
        <span className="text-2xl font-bold">Calendar View</span>
        <div className="cursor-pointer">
          <HiOutlineUserCircle className="w-8 h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
