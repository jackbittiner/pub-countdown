import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "./src/calculateTimeLeft";
import "./App.css";

import alMurray from "./assets/al-murray.png";
import beer from "./assets/beer.png";
import nuts from "./assets/nuts.png";
import fruity from "./assets/fruity.png";
import tequila from "./assets/tequila.png";
import schweff from "./assets/schweff.png";

import {
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

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
        <div className="shareButtons">
          <FacebookShareButton
            url={"https://pubcountdown.uk"}
            quote={"Shit me we gonna go to the pub soon"}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton
            url={"https://pubcountdown.uk"}
            title={"Shit me we gonna go to the pub soon"}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"https://pubcountdown.uk"}
            title={"Shit me we gonna go to the pub soon"}
            separator=":: "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <RedditShareButton
            url={"https://pubcountdown.uk"}
            title={"We gonna go to the pub soon"}
            windowWidth={660}
            windowHeight={460}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>
      </section>
    </div>
  );
}

export default App;
