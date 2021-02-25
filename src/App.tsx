import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "./src/calculateTimeLeft";
import "./App.css";

import alMurray from "./assets/al-murray.png";
import beer from "./assets/beer.png";
import nuts from "./assets/nuts.png";
import fruity from "./assets/fruity.png";
import tequila from "./assets/tequila.png";
import schweff from "./assets/schweff.png";
import scampiFries from "./assets/scampi-fries.png"

import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-190609321-1");

  const [timeLeftTilPubGarden, setTimeLeftTilPubGarden] = useState(
    calculateTimeLeft(new Date(), new Date("2021-04-12T09:00:00.000Z"))
  );

  const [timeLeftTilPub, setTimeLeftTilPub] = useState(
    calculateTimeLeft(new Date(), new Date("2021-05-17T09:00:00.000Z"))
  );

  const [timeLeftTilTotalFuckery, setTimeLeftTilTotalFuckery] = useState(
    calculateTimeLeft(new Date(), new Date("2021-06-21T00:00:00.000Z"))
  );

  useEffect(() => {
    setInterval(() => {
      setTimeLeftTilPubGarden(
        calculateTimeLeft(new Date(), new Date("2021-04-12T09:00:00.000Z"))
      );
      setTimeLeftTilPub(
        calculateTimeLeft(new Date(), new Date("2021-05-17T09:00:00.000Z"))
      );
      setTimeLeftTilTotalFuckery(
        calculateTimeLeft(new Date(), new Date("2021-06-21T00:00:00.000Z"))
      );
    }, 1000);
  }, []);

  return (
    <div>
      <section>
        <div className="leaf">
          <div>
            {" "}
            <img src={alMurray} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={alMurray} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={alMurray} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={beer} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={beer} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={nuts} height="75px" width="75px" />
          </div>
          <div>
            <img src={nuts} height="75px" width="75px" />
          </div>

          <div>
            {" "}
            <img src={tequila} height="75px" width="75px"></img>
          </div>

          <div>
            {" "}
            <img src={tequila} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={fruity} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={fruity} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={schweff} height="75px" width="75px" />
          </div>
          <div>
            <img src={beer} height="75px" width="75px" />
          </div>
          <div>
            {" "}
            <img src={scampiFries} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={scampiFries} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={scampiFries} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={scampiFries} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={schweff} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={beer} height="75px" width="75px"></img>
          </div>
        </div>
        <div className="time-to">
          <h1>Time until pub garden</h1>
          <div className="time">
            {timeLeftTilPubGarden.days}D {timeLeftTilPubGarden.hours}H{" "}
            {timeLeftTilPubGarden.minutes}M {timeLeftTilPubGarden.seconds}S
          </div>
          <h1>Time until pub</h1>
          <div className="time">
            {timeLeftTilPub.days}D {timeLeftTilPub.hours}H{" "}
            {timeLeftTilPub.minutes}M {timeLeftTilPub.seconds}S
          </div>
          <h1>Time until total fuckery</h1>
          <div className="time">
            {timeLeftTilTotalFuckery.days}D {timeLeftTilTotalFuckery.hours}H{" "}
            {timeLeftTilTotalFuckery.minutes}M {timeLeftTilTotalFuckery.seconds}
            S
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
