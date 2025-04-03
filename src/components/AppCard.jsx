/* eslint-disable simple-import-sort/imports */
import React from "react";
import { appsList } from "../utils/lists";

const Appcard = () => {
  return (
    <div className="container mt-20">
      <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
        {appsList.map((app) => (
          <div
            key={app.id}
            data-aos="zoom-in"
            className="dark:hover:bg-primary group flex w-full max-w-[300px] h-[250px] flex-col text-center items-center rounded-2xl bg-gradient-to-r from-teal-400 to-blue-300 p-4 shadow-xl duration-300 hover:bg-black/80 hover:from-pink-500 hover:to-orange-500 hover:text-white"
          >
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={app.image}
                alt={app.appName}
                className="h-24 w-24 rounded-full object-cover shadow-md duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className="mt-4 flex flex-col items-center text-center flex-1">
              <h1 className="text-xl font-bold">{app.appName}</h1>
              <p className="line-clamp-2 text-md text-gray-500 group-hover:text-white">
                {app.description}
              </p>
            </div>

            {/* Button */}
            <div className="mt-auto pb-4">
              <button className="group-hover:text-primary rounded-full px-4 py-1 text-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:bg-white group-hover:opacity-100">
                {app.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appcard;
