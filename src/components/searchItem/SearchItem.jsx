import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="seacrchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/city/540x270/740930.webp?k=58e6fd52fcf3174223967fc1629c1de15a9ca9de10347618038d042b56e0f968&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Stdio Aprtment wit air conditioning</span>
        <span className="siFeatures">400 m from Cox's Bazar • Very good (8.2) • 10 min walk</span>
        <span className="siCancellop">Free cancellation</span>
        <span className="siCancellopSubtitle">You can cancel later, so lock in this great price today</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellen</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice">120tk</span>
          <span className="siTaxOp">Include Taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
