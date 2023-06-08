import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero py-[50px]">
      <div className="custom-container">
        <div className="flex md:flex-row flex-col justify-between items-center md:gap-[150px] gap-5">
          <div className="md:w-1/2 w-full md:p-0 p-5">
            <h1 className="md:text-6xl text-3xl font-bold text-[#fff]">CONSUMERS</h1>
            <p className="text-[22px] text-white">
              Get practical, independent information on:
            </p>

            <ul className="list-square my-[35px]">
              <li className="text-[#fff] text-[22px]">Your consumer rights</li>
              <li className="text-[#fff] text-[22px]">Making complaints</li>
              <li className="text-[#fff] text-[22px]">Managing your money</li>
              <li className="text-[#fff] text-[22px]">
                Comparing bank accounts, mortgages, loans and more
              </li>
              <li className="text-[#fff] text-[22px]">Product recalls</li>
            </ul>

            <a
              href="/"
              className="bg-transparent hover:bg-red-600 text-white inline-flex text-lg items-center border-2 py-[15px] px-[30px] border-white rounded-full"
            >
              Find Out More{" "}
              <BsArrowRight className="ml-3 mr-4 text-2xl animation" />
            </a>
          </div>
          <div className="md:w-1/2 w-full md:p-0 p-5">
            <h1 className="md:text-6xl text-3xl font-bold text-[#fff]">BUSINESS</h1>
            <p className="text-[22px] text-white">
              Information for business, legal and media:
            </p>

            <ul className="list-square my-[35px]">
              <li className="text-[#fff] text-[22px]">
                The CCPC and our latest news
              </li>
              <li className="text-[#fff] text-[22px]">
                Our enforcement actions
              </li>
              <li className="text-[#fff] text-[22px]">
                Competition and consumer protection law
              </li>
              <li className="text-[#fff] text-[22px]">Mergers</li>
              <li className="text-[#fff] text-[22px]">
                Guidelines for business
              </li>
              <li className="text-[#fff] text-[22px]">Research</li>
            </ul>

            <a
              href="/"
              className="bg-transparent hover:bg-[#2F4E6F] text-white inline-flex text-lg items-center border-2 py-[15px] px-[30px] border-white rounded-full"
            >
              Find Out More{" "}
              <BsArrowRight className="ml-3 mr-4 text-2xl animation" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
