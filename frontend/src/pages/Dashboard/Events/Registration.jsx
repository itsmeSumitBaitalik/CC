import { useState } from 'react';
import RegistrationModal from './components/RegistrationModal';

// ── Mock event — swap with real API data later ──────────────────────────────
const MOCK_EVENT = {
  _id: 'evt_001',
  title: 'DevSprint 2025',
  campusName: 'VJTI Mumbai',
  eventType: 'Hackathon',
  date: 'Jan 25, 2025',
  location: 'Main Auditorium',
  seats: { total: 150, filled: 72 },
};

export default function Registration(open) {
  const [isOpen, setOpen]   = useState(false);
  const [status, setStatus] = useState('default');

  const open = (s) => { setStatus(s); setOpen(true); };

  return (
    <div className="min-h-screen bg-retro-yellow font-display flex flex-col items-center justify-center gap-6 p-6">
      <p className="text-xs font-black uppercase text-black/40 tracking-widest">
        Simulate event card buttons
      </p>

      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => open('default')}
          className="retro-btn retro-btn-dark px-6 py-3 text-sm shadow-retro"
        >
          Register for Event →
        </button>
        <button
          onClick={() => open('registered')}
          className="retro-btn retro-btn-primary px-6 py-3 text-sm shadow-retro"
        >
          Already Registered
        </button>
        <button
          onClick={() => open('full')}
          className="retro-btn retro-btn-danger px-6 py-3 text-sm shadow-retro"
        >
          Event Full
        </button>
      </div>

      <RegistrationModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        event={MOCK_EVENT}
        status={status}
      />
    </div>
  );
}