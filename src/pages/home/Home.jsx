import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <PropertyList/>
        <FeaturedProperty/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
