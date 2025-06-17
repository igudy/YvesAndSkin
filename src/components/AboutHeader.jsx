import React from "react";
import vid from "../assets/vid.png";
import logo from "../assets/icon.png";
import you from "../assets/Youtube.png";

const AboutHeader = () => {
  return (
    <div className="container px-4 sm:px-6 mx-auto mt-8 font-sans">
      <div className=" relative rounded-lg overflow-hidden shadow-2xl">
        <img
          src={vid}
          alt=""
          className="w-full h-auto object-cover max-h-[70vh] md:max-h-[80vh]"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-4 bg-opacity-40 text-white">
          <div>
            <img
              src={you}
              alt="YouTube icon"
              className="w-16 sm:w-20 md:w-24 h-auto"
            />
          </div>
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-300">AMYTECH</span>
            <img
              src={logo}
              alt="Amytech Beauty logo"
              width={30}
              className="mx-1"
            />
            <span className="text-lg font-bold text-gray-300">BEAUTY</span>
          </div>
        </div>
      </div>

      <section className=" flex flex-col md:flex-row justify-between items-center gap-8 mx-auto mt-6">
        <div className="flex items-center">
          <span className="text-lg font-bold text-gray-800">AMYTECH</span>
          <img
            src={logo}
            alt="Amytech Beauty logo"
            width={30}
            className="mx-1"
          />
          <span className="text-lg font-bold text-orange-500">BEAUTY</span>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            If It Makes You Feel <br />
            <span className="text-orange-500">Beautiful</span>, Then Do It.
          </h2>
        </div>

        <div className="md:w-1/3 text-gray-700 leading-relaxed text-lg">
          <p>
            Life inside our beauty salon is never a dull moment, and the
            enthusiasm of wanting to satisfy our customers keeps all of us
            united.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;
