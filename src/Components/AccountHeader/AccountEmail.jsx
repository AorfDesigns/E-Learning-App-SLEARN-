import React from 'react';

const AccountEmail = ({ name, email }) => {
  return (
    <div className="flex items-center space-x-2 overflow-hidden">
      <img
        className="inline-block h-10 w-10 rounded-full"
        src="./Images/Account.jpg"
        alt=""
      />
      <div>
        <span className="text-[16px]">{name}</span>
        <p className="text-[12px]">{email}</p>
      </div>
    </div>
  );
};

export default AccountEmail;
