import React, { useState } from 'react';

const List = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = ['12 Months', '30 Days', '7 Days', '24 Hours'];

  return (
    <div className="flex justify-center space-x-4 border-b-[0.5px] border-gray-300">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`pb-2 text-[12px] font-medium ${
            activeIndex === index
              ? 'border-b-[0.5px] border-orange-400 text-orange-400'
              : 'text-gray-500'
          } focus:outline-none`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default List;
