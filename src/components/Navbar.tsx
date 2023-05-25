import React, { useState } from 'react';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="md:hidden bg-white shadow">
      <div className="flex items-center justify-between px-4 py-2">
        <button
          className="text-gray-600 dark:text-gray-400"
          onClick={toggleMobileNav}
        >
          {/* Mobile menu icon */}
          {showMobileNav ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <span className="text-gray-800 text-lg font-bold">Mobile Nav</span>
      </div>
      {showMobileNav && (
        <ul className="py-2 px-4">
          {/* Mobile navigation links */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
