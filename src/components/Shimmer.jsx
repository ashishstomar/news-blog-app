import React from "react";

const Shimmer = () => {
  const shimmerCards = Array.from({ length: 8 }, (_, index) => (
    <div
      key={index}
      className="bg-[rgb(0,0,0)]  rounded-2xl h-[280px] w-full mt-10 opacity-55"
    >
      <div className=" bg-slate-900 rounded-2xl object-cover h-40 w-full opacity-55"></div>
      <div className="px-2 py-2 space-y-4">
        <h3 className="h-5 w-36 bg-slate-900 rounded-md"></h3>
        <h6 className="h-3 w-20 bg-slate-900 rounded-md"></h6>
      </div>
      <h1 className="h-6 ml-2 rounded-full w-16 bg-slate-900 mt-3"></h1>
    </div>
  ));

  return (
    <div className="mx-12 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
      {shimmerCards}
    </div>
  );
};

export default Shimmer;
