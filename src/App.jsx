import { useState, useEffect } from "react";
import axios from "axios";
import data from "../public/data.json";
import "./App.css";

const timeframes = ["daily", "weekly", "monthly"];
const colors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%)",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

function App() {
  const [selectedTimeframe, setSelectedTimeframe] = useState(timeframes[1]);

  const cards = data.map((item, index) => {
    return (
      <div className="card-element">
        <div className="card-header" style={{ backgroundColor: colors[index] }}>
          <img
            src={
              "../images/icon-" +
              item["title"].toLowerCase().replace(" ", "-") +
              ".svg"
            }
            alt={item["title"]}
          />
        </div>
        <div className="card-details">
          <div className="title-row">
            <h2>{item["title"]}</h2>
            <img
              src="./images/icon-ellipsis.svg"
              alt="el"
              className="elipsis"
            />
          </div>
          <div className="hours-details">
            <h1>{item["timeframes"][selectedTimeframe]["current"]} hrs</h1>
            <p>
              Previous - {item["timeframes"][selectedTimeframe]["current"]} hrs
            </p>
          </div>
        </div>
      </div>
    );
  });

  if (cards) {
    return (
      <>
        <div className="cards-section">
          <div className="profile-section">
            <div className="profile-details">
              <img src="../images/image-jeremy.png" alt="avatar" />
              <div>
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className="timeframe-buttons-section">
              <button
                className="selection-button"
                onClick={() => {
                  setSelectedTimeframe("daily");
                }}
              >
                Daily
              </button>
              <button
                className="selection-button"
                onClick={() => {
                  setSelectedTimeframe("weekly");
                }}
                autoFocus
              >
                Weekly
              </button>
              <button
                className="selection-button"
                onClick={() => {
                  setSelectedTimeframe("monthly");
                }}
              >
                Monthly
              </button>
            </div>
          </div>
          {cards}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>tzeapa</h1>
      </>
    );
  }
}

export default App;
