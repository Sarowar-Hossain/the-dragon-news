import React from "react";
import moment from "moment";
import logo from "../../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import {UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="" />
      </div>
      <p className="text-xl my-3">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
      <div className="flex items-center  py-5 ">
        <button className="bg-red-500 text-white text-2xl font-semibold py-2 px-4 rounded">
          Latest
        </button>
        <p className="text-2xl font-semibold">
          <Marquee speed={100}>
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as.Match Highlights: Germany vs Spain —
            as it happened ! Match Highlights: Germany vs Spain as...
          </Marquee>
        </p>
      </div>
      <div className="flex justify-between ms-[44%] items-center">
        <div className="text-xl flex gap-3">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/career">Career</Link>
        </div>
        <div className="flex items-center gap-2">
        <UserCircleIcon className="h-12 w-12 text-black" />
          <button className="bg-black text-white text-2xl font-semibold py-2 px-8 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
