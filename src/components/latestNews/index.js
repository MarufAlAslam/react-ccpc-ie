import React from "react";

const LatestNews = () => {
  return (
    <div className="latest-news py-[50px] bg-[#586A7F]">
      <div className="custom-container text-center">
        <h1 className="text-[42px] text-white font-bold mb-[50px]">
          LATEST NEWS
        </h1>
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="">
            <a
              href="/"
              className="block text-white text-2xl hover:underline mb-[20px]"
            >
              CCPC issues assessment to parties in relation to Q-Park / Tazbell
              Services
            </a>

            <a
              href="/"
              className="border border-white inline-block mx-auto px-[45px] py-[10px] text-white text-lg hover:bg-[#2F4E6F] hover:border-[#2F4E6F] rounded-full"
            >
              READ MORE
            </a>
          </div>
          <div className="">
            <a
              href="/"
              className="block text-white text-2xl hover:underline mb-[20px]"
            >
              CCPC partners with Irish Research Council to fund research into
              electric vehicle charging market
            </a>

            <a
              href="/"
              className="border border-white inline-block mx-auto px-[45px] py-[10px] text-white text-lg hover:bg-[#2F4E6F] hover:border-[#2F4E6F] rounded-full"
            >
              READ MORE
            </a>
          </div>
          <div className="">
            <a
              href="/"
              className="block text-white text-2xl hover:underline mb-[20px]"
            >
              CCPC issues a summer safety warning on travel adaptors
            </a>

            <a
              href="/"
              className="border border-white inline-block mx-auto px-[45px] py-[10px] text-white text-lg hover:bg-[#2F4E6F] hover:border-[#2F4E6F] rounded-full"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
