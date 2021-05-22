import React, { useState } from 'react';
import JourneyDetail from '../JourneyDetail';
import JourneyPicker from '../JourneyPicker';
// import './style.css';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <div>
      <JourneyPicker onJourneyChange={setJourney} />
      <div className="confirmation">
        {' '}
        {journey ? <JourneyDetail journey={journey} /> : null}{' '}
      </div>
    </div>
  );
};

export default Home;
