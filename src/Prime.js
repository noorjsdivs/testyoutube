import React from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Whatwedo from "./components/whatwedo/Whatwedo";
import Whoweare from "./components/whoweare/Whoweare";

const Prime = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <div className="px-4">
        <Banner />
        <Whoweare />
        <Whatwedo />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Prime;
