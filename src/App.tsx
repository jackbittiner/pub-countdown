import React, { useEffect, useState } from "react";
import { calculateTimeLeft } from "./src/calculateTimeLeft";

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
    </div>
  );
}

export default App;
