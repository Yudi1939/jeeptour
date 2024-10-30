import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faInfoCircle, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-700 shadow-lg">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        {/* Judul */}
        <div className="text-white font-extrabold text-3xl tracking-widest">
          JeepTour
        </div>

        {/* Menu Navigasi */}
        <div className="flex items-center space-x-8">
          <NavItem href="/dashboard" icon={faTachometerAlt} label="Dashboard" />
          <NavItem href="/about" icon={faInfoCircle} label="Tentang Kami" />
          <NavItem href="/profile" icon={faUser} label="Profil" />
          <NavItem href="/logout" icon={faSignOutAlt} label="Logout" />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-white text-lg font-medium flex items-center space-x-2 hover:text-gray-200 transition duration-300"
  >
    <FontAwesomeIcon icon={icon} />
    <span>{label}</span>
  </a>
);

export default NavBar;
