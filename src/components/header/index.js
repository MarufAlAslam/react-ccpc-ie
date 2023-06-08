import React from "react";

import logo from "../../assets/images/logo.svg";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <header className="py-5">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <div className="flex items-center justify-end">
            <FiPhoneCall className="text-2xl text-[#37A29C]" />
            <div className="ml-2 flex justify-start items-center">
              <p className="text-black text-xl">Helpline: </p>
              <a href="tel:01 402 5555" className="text-black text-xl font-bold ml-2">01 402 5555</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
