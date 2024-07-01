import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';  // Make sure the import path is correct
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children, onLogout }) => {
  const [activePath, setActivePath] = useState('/');

  return (
    <div className='flex'>
      <Sidebar activePath={activePath} setActivePath={setActivePath} />
      <div className='flex-1'>
        <Navbar onLogout={onLogout} setActivePath={setActivePath} />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;


