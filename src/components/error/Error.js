import React from 'react';

//! If there is no routes available Error Component will be displayed
const Error = () => {
  return (
    <div className="flex w-full justify-center h-[25rem] items-center">
      <div className="">❌</div>
      <div className="text-red-600 text-2xl">Oops! Something went wrong.</div>
    </div>
  );
};

export default Error;
