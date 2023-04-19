import React from "react";
import img1 from "../../../assets/qZone1.png";
import img2 from "../../../assets/qZone2.png";
import img3 from "../../../assets/qZone3.png";
import bgImg from "../../../assets/bg.png";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const RightNav = () => {
  return (
    <div>
      <div className="px-4">
        <h1 className="text-left text-2xl font-bold mb-4">Login With</h1>
        <div className=" flex justify-center items-center mb-4">
          <button className="inline-flex items-center rounded w-full border-2 py-2 justify-center border-black">
            <FaGoogle /> <span className="ms-3">Login with Google</span>
          </button>
        </div>
        <div className=" flex justify-center items-center mb-4">
          <button className="inline-flex items-center w-full rounded border-2 py-2 justify-center border-black">
            <FaGithub /> <span className="ms-3">Login with Github</span>
          </button>
        </div>
      </div>
      <div className="px-4 mt-10">
        <h1 className="text-left text-2xl font-bold mb-4">Find Us On</h1>
        <div className="w-full flex justify-center items-center py-1 border-2 border-gray-300 mb-2">
          <button className=" inline-flex items-center justify-center text-xl">
            <FaFacebook /> <span className="ms-3">Facebook</span>
          </button>
        </div>
        <div className=" flex justify-center items-center py-1 border-2 border-gray-300 mb-2">
          <button className="inline-flex items-center justify-center text-xl">
            <FaTwitter /> <span className="ms-3">Twitter</span>
          </button>
        </div>

        <div className=" flex justify-center items-center py-1 border-2 border-gray-300 mb-2">
          <button className="inline-flex items-center justify-center text-xl">
            <FaInstagram /> <span className="ms-3">Instagram</span>
          </button>
        </div>
      </div>

      <div className="bg-slate-100 p-5 mt-10">
        <h1 className="text-left  text-2xl font-bold mb-4">Q-Zone</h1>
        <div className="flex flex-col items-center">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${bgImg})` }} className="bgImg mt-8 p-8">
        <h1 className="text-white text-[40px] font-bold mb-6 mt-14">Create an Amazing Newspaper</h1>
        <h4 className="text-white text-[20px] px-10 mb-10">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </h4>
        <button className="bg-pink-500 text-white font-bold text-xl p-5 mb-14">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightNav;
