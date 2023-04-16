import React from "react";
import Footer from "./Head&Footer/Footer";
import Nav from "./Head&Footer/Nav";
import About from "./Home/About";
import Home from "./Home/Home";

const Whole = () => {
  return (
    <>
      <div className="">
        <Nav />
        <div className="hidden sm:block">
          <Footer />
        </div>
      </div>

      <Home/>
      <About/>


      <div className="block sm:hidden">
        <Footer/>
      </div>
    </>
  );
};

export default Whole;
