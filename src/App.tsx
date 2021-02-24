import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "./src/calculateTimeLeft";
import "./App.css";

import alMurray from "./assets/al-murray.png";
import beer from "./assets/beer.png";
import nuts from "./assets/nuts.png";
import fruity from "./assets/fruity.png";
import tequila from "./assets/tequila.png";

function App() {
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
            <img src={beer} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={beer} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={alMurray} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={nuts} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={fruity} height="75px" width="75px" />
          </div>
          <div>
            <img src={tequila} height="75px" width="75px" />
          </div>
        </div>

        <div className="leaf leaf1">
          <div>
            {" "}
            <img src={tequila} height="75px" width="75px"></img>
          </div>
          <div>
            <img
              src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
              height="75px"
              width="75px"
            ></img>
          </div>
          <div>
            {" "}
            <img src={beer} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={alMurray} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={nuts} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={fruity} height="75px" width="75px" />
          </div>
          <div>
            <img src={tequila} height="75px" width="75px" />
          </div>
        </div>

        <div className="leaf leaf2">
          <div>
            {" "}
            <img src={tequila} height="75px" width="75px"></img>
          </div>
          <div>
            <img
              src="http://www.pngmart.com/files/1/Autumn-Fall-Leaves-Pictures-Collage-PNG.png"
              height="75px"
              width="75px"
            ></img>
          </div>
          <div>
            {" "}
            <img src={beer} height="75px" width="75px"></img>
          </div>
          <div>
            <img src={alMurray} height="75px" width="75px"></img>
          </div>

          <div>
            {" "}
            <img src={nuts} height="75px" width="75px"></img>
          </div>
          <div>
            {" "}
            <img src={fruity} height="75px" width="75px" />
          </div>
          <div>
            <img src={tequila} height="75px" width="75px" />
          </div>
        </div>

        <div>
          <h1>Time until pub garden</h1>
          {timeLeftTilPubGarden.days}:{timeLeftTilPubGarden.hours}:
          {timeLeftTilPubGarden.minutes}:{timeLeftTilPubGarden.seconds}
        </div>
        <div>
          <h1>Time until pub</h1>
          {timeLeftTilPub.days}:{timeLeftTilPub.hours}:{timeLeftTilPub.minutes}:
          {timeLeftTilPub.seconds}
        </div>
        <div>
          <h1>Time until total fuckery</h1>
          {timeLeftTilTotalFuckery.days}:{timeLeftTilTotalFuckery.hours}:
          {timeLeftTilTotalFuckery.minutes}:{timeLeftTilTotalFuckery.seconds}
        </div>
      </section>
    </div>
  );
}

export default App;
