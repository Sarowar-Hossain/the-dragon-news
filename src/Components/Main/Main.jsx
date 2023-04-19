import React from "react";
import Header from "../Shared/Home/Header";
import Footer from "../Shared/Home/Footer";
import Home from "../Shared/Home/home/Home";
import LeftNav from "../Shared/Home/LeftNav";
import RightNav from "../Shared/Home/RightNav";

const Main = () => {
  return (
    <div className="container mx-auto text-center">
      <Header></Header>
      <div className="grid grid-cols-8 gap-2">
        <div className="col-span-2 border-2 border-blue-200">
          <LeftNav></LeftNav>
        </div>
        <div className="col-span-4 border-2 border-blue-200">
          <Home></Home>
        </div>
        <div className="col-span-2 border-2 border-blue-200">
          <RightNav></RightNav>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
