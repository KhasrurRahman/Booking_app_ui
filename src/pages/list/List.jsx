import moment from "moment";
import React from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSeacrch">
            <h1 className="lsTitle">Search </h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Chek-in-date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {moment(date[0].startDate).format("DD/MM/YYYY")} to {moment(date[0].endDate).format("DD/MM/YYYY")}
              </span>

              {openDate && (
                <DateRange editableDateInputs={true} onChange={(item) => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="listOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" className="lsOptionInput" placeholder={options.adult} min={1} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Childrean</span>
                  <input type="number" className="lsOptionInput" placeholder={options.children} min={0} />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" className="lsOptionInput" placeholder={options.room} min={0} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
