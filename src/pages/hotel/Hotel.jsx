import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/city/540x270/688199.webp?k=90f56316fab08573d08922b1dfb6c7e62eab99dd46bd1dc5fdbb87e4e6fccdbc&o=",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/city/540x270/688199.webp?k=90f56316fab08573d08922b1dfb6c7e62eab99dd46bd1dc5fdbb87e4e6fccdbc&o=",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/city/540x270/688199.webp?k=90f56316fab08573d08922b1dfb6c7e62eab99dd46bd1dc5fdbb87e4e6fccdbc&o=",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/city/540x270/688199.webp?k=90f56316fab08573d08922b1dfb6c7e62eab99dd46bd1dc5fdbb87e4e6fccdbc&o=",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/city/540x270/688199.webp?k=90f56316fab08573d08922b1dfb6c7e62eab99dd46bd1dc5fdbb87e4e6fccdbc&o=",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/city/540x270/688199.webp?k=90f56316fab08573d08922b1dfb6c7e62eab99dd46bd1dc5fdbb87e4e6fccdbc&o=",
    },
  ];

  const [sliderNumber, setSliderNumber] = useState("");
  const [openSlider, setOpenSlider] = useState(false);

  const handelslider = (index) => {
    setSliderNumber(index);
    setOpenSlider(true);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          {openSlider && <div className="hotelSlider">
            <img src={photos[sliderNumber].src} alt="" />
          </div>}

          <button className="hotelBookNow">Book Now!</button>
          <h1 className="hotelTitle">Hotel The Sylhet International </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Dhaka 231 est now</span>
          </div>
          <spna className="hotelDistance">120 Shahid Latif Road Unite Number 120, 1st floor (Near Kosai Bari Rail Gate), 1230 Dhaka,</spna>
          <spna className="hotelPriceHeightlight">Perfect for a 1-night stay!</spna>
          <div className="hotelImgs">
            {photos.map((photo, index) => (
              <div className="hotelImageWarpper">
                <img onClick={() => handelslider(index)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hoteDetailslTitle">Stay in the hart of krakow</h1>
              <p className="hoteDetailslDesc">
                Located in Dhaka, 300 m from Embassy of Spain, Doreen Hotel Dhaka provides accommodation with a restaurant, free private parking, a fitness
                centre and a shared lounge. This 5-star hotel offers room service and a concierge service. The accommodation features an outdoor swimming pool,
                a 24-hour front desk, where staff can assist guests, as well as free WiFi throughout the property.
              </p>
            </div>
            <div className="hotelDetailsprice">
              <h1>Perfect for 9-night stay!</h1>
              <span>ocated in Dhaka, 300 m from Embassy of Spain, Doreen Hotel Dhaka provides </span>
              <h2>
                <b>934TK</b> (9 night)
              </h2>
              <button>Reserve or Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
