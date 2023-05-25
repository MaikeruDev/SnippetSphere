import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen"> 
      <Sidebar />
      <Navbar />
      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
};

export default Layout;
