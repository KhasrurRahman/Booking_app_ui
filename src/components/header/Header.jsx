import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faPlane, faTaxi, faPerson } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import Moment from "moment";
import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handelOption = (name, action) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: action == "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();
  const handelSearch = ()=>{
    navigate("/hotels",{state:{destination,date,options}})
  }

  return (
    <div className="header">
      <div className={type == "list"? "headerContainer listmode":"headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && 
          <>
            <h1 className="headerTitle">Find your next stay</h1>
            <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
            <button className="headerBtn">Sign in / Register</button>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input type="text" placeholder="Where are you going?" className="headerSearchInput" onChange={e=>setDestination(e.target.value)}/>
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                  {Moment(date[0].startDate).format("DD/MM/YYYY")} to {Moment(date[0].endDate).format("DD/MM/YYYY")}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} Adult . ${options.children} . children ${options.room} room`}</span>

                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optiontext">Adult</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" onClick={() => handelOption("adult", "d")} disabled={options.adult <= 1}>
                          -
                        </button>
                        <button className="optionCounterNumber">{options.adult}</button>
                        <button className="optionCounterButton" onClick={() => handelOption("adult", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optiontext">Children</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" onClick={() => handelOption("children", "d")} disabled={options.children <= 0}>
                          -
                        </button>
                        <button className="optionCounterNumber">{options.children}</button>
                        <button className="optionCounterButton" onClick={() => handelOption("children", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optiontext">Room</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" onClick={() => handelOption("room", "d")} disabled={options.room <= 1}>
                          -
                        </button>
                        <button className="optionCounterNumber">{options.room}</button>
                        <button className="optionCounterButton" onClick={() => handelOption("room", "i")}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handelSearch}>Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Header;
