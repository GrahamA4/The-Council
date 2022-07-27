import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import Banner from './imgs/banner.jpg';

function Home() {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
    </div>
  );
}

function Header() {
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);
  const scheduleInfo = document.getElementById('scheduleBox');

  const infoBox = (
    <div
      id="scheduleBox"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      ?{isShown && <Information />}
    </div>
  );

  return (
    <div className="home-container">
      <div className="status">
        <p>We're Open</p>
        <p className="storeNumb">347-240-8778</p>
        {infoBox}
      </div>
      <img src={Banner} />
    </div>
  );
}

function Information() {
  return (
    <div className="schedule">
      <p>
        Monday
        <li>8:AM-8:PM</li>
      </p>
      <p>
        Tuesday
        <li>8:AM-8:PM</li>
      </p>
      <p>
        Wednesday
        <li>8:AM-8:PM</li>
      </p>
      <p>
        Thursday
        <li>8:AM-8:PM</li>
      </p>
      <p>
        Friday<li>8:AM-8:PM</li>
      </p>
      <p>
        Saturday<li>8:AM-8:PM</li>
      </p>
      <p>
        Sunday<li>8:AM-8:PM</li>
      </p>
    </div>
  );
}

export default Home;
