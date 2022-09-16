import { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const location = useLocation();
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/calendar':
        return 'Calendar View';
      case '/spreadsheet':
        return 'Spreadsheet View';
      case '/database':
        return 'Database';
    }
  };

  return (
    <nav className="h-[70px]">
      <div className="flex justify-between my-0 mx-auto">
        <span className="text-2xl font-bold">{getCurrentPage()}</span>
        <div className="cursor-pointer">
          <HiOutlineUserCircle className="w-8 h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
