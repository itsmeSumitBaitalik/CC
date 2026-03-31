import React from 'react';
import SectionHeader from '../../../../components/SectionHeader.jsx';
import OngoingEventCard from './OngoingEventCard';

const OngoingEventsSection = ({ events }) => {
  if (!events || events.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <SectionHeader 
        color="bg-retro-red" 
        title="ONGOING EVENTS" 
        badge="● LIVE NOW" 
        badgeBg="bg-retro-red" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {events.map((ev, i) => (
          <OngoingEventCard key={i} event={ev} />
        ))}
      </div>
    </div>
  );
};

export default OngoingEventsSection;
