
import Icon from "../Icon/Icon";


// AccountHeader.js
import React from 'react';

export default function AccountHeader() {
  return (
    <div className="flex items-center space-x-2 overflow-hidden">
      <img
        className="inline-block h-6 w-6 rounded-full ring-white"
        src="./Images/Account.jpg"
        alt="Account"
      />
      <span className="text-[12px] font-normal">John Doe</span>
    </div>
  );
}

  
  




