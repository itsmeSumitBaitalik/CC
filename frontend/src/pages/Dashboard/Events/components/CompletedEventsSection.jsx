import React from 'react';
import SectionHeader from '../../../../components/SectionHeader.jsx';
import CompletedEventRow from './CompletedEventRow';

const CompletedEventsSection = ({ events }) => {
  if (!events || events.length === 0) return null;

  return (
    <div className="flex flex-col gap-3">
      <SectionHeader color="bg-white" title="COMPLETED EVENTS" />
      <div className="flex flex-col gap-3 mt-3">
        {events.map((ev, i) => (
          <CompletedEventRow key={i} event={ev} />
        ))}
      </div>
    </div>
  );
};

export default CompletedEventsSection;
