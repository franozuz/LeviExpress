import React, { useState } from 'react';
import JourneyPicker from '../JourneyPicker';
// import './style.css';

const Home = () => {
  const [journey, setJourney] = useState(null);

  return (
    <div>
      <JourneyPicker onJourneyChange={setJourney} />
      <p className="confirmation">
        {' '}
        {journey ? `Nalezeno spojení s ID ${journey.journeyId}` : null}{' '}
      </p>
    </div>
  );
};

export default Home;
