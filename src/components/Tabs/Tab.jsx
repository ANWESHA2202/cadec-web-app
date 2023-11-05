import React, { useEffect, useState } from 'react';

const Tab = ({ tab }) => {


  return (
    <div
      className={`w-[200px] p-5 hover:text-md flex justify-center rounded-xl items-center bg-blue-950`}
    >
      <div
        className="hover:font-semibold hover:text-yellow-200 cursor-pointer w-full h-full flex justify-center rounded-xl items-center text-white font-bold"
        style={{whiteSpace:'nowrap',textAlign:'center' }}
      >
        {tab.name}
      </div>
    </div>
  );
};

export default Tab;
