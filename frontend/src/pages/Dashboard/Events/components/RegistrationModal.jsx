import { useState, useEffect, useCallback, useRef } from 'react';
import { getEventStyle } from '../eventConfig';

// ── Animations ─────────────────────────────────────────────────────────────
// These keyframes are defined once in index.css or injected here the first
// time the component mounts (avoids duplicating CSS in index.css for now).
const MODAL_STYLES = `
  @keyframes reg-dialogIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to   { opacity: 1; transform: scale(1)    translateY(0);    }
  }
  .reg-dialog-in { animation: reg-dialogIn 0.2s ease forwards; }

  @keyframes reg-confettiDrop {
    0%   { transform: translateY(-10px) rotate(0deg);   opacity: 1; }
    100% { transform: translateY(60px)  rotate(360deg); opacity: 0; }
  }
  .reg-confetti-piece {
    position: absolute;
    width: 8px; height: 8px;
    animation: reg-confettiDrop 0.9s ease forwards;
  }

  @keyframes reg-checkPop {
    0%   { transform: scale(0)   rotate(-20deg); }
    70%  { transform: scale(1.2) rotate(5deg);   }
    100% { transform: scale(1)   rotate(0deg);   }
  }
  .reg-check-pop { animation: reg-checkPop 0.4s ease forwards; }

  @keyframes reg-xpFloat {
    0%   { opacity: 0; transform: translateY(0);     }
    30%  { opacity: 1;                                }
    100% { opacity: 0; transform: translateY(-40px); }
  }
  .reg-xp-float { animation: reg-xpFloat 1.4s ease forwards; }

  @keyframes reg-shake {
    0%   { transform: translateX(0);   }
    20%  { transform: translateX(-6px);}
    40%  { transform: translateX(6px); }
    60%  { transform: translateX(-4px);}
    80%  { transform: translateX(4px); }
    100% { transform: translateX(0);   }
  }
  .reg-shake { animation: reg-shake 0.35s ease; }
`;

// ── Badge colour map (mirrors the HTML's .badge-* classes) ──────────────────
const BADGE_STYLE_MAP = {
  hackathon:  { background: '#E05C3A', color: '#fff' },
  cultural:   { background: '#4CAF50', color: '#fff' },
  workshop:   { background: '#F5A623', color: '#000' },
  sports:     { background: '#fff',    color: '#000' },
  seminar:    { background: '#000',    color: '#F5A623' },
  conference: { background: '#000',    color: '#fff' },
  webinar:    { background: '#4CAF50', color: '#fff' },
  other:      { background: '#888',    color: '#fff' },
  general:    { background: '#888',    color: '#fff' },
};

function getBadgeStyle(type) {
  return BADGE_STYLE_MAP[type?.toLowerCase()] ?? BADGE_STYLE_MAP.other;
}

// ── Helper: seat bar colour ─────────────────────────────────────────────────
function getSeatBarColor(pct) {
  if (pct >= 100) return '#E05C3A';
  if (pct >= 80)  return '#F5A623';
  return '#4CAF50';
}

function getSeatStatus(pct, left) {
  if (pct >= 100) return { text: 'No seats remaining', urgent: true };
  if (pct >= 80)  return { text: `Only ${left} seats left — register fast!`, urgent: true };
  return { text: `${left} seats remaining`, urgent: false };
}

// ── Confetti helper ─────────────────────────────────────────────────────────
function spawnConfettiNodes(container) {
  if (!container) return;
  container.innerHTML = '';
  const colors = ['#F5A623', '#fff', '#4CAF50', '#000', '#E05C3A'];
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'reg-confetti-piece';
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 30}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border: 1.5px solid #000;
      animation-delay: ${Math.random() * 0.5}s;
      animation-duration: ${0.7 + Math.random() * 0.7}s;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
    `;
    container.appendChild(el);
  }
}

// ── Departments & Years ─────────────────────────────────────────────────────
const DEPARTMENTS = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'IT', 'MBA', 'Other'];
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Alumni'];

// ══════════════════════════════════════════════════════════════════════════════
//  Sub-components
// ══════════════════════════════════════════════════════════════════════════════

// ── Event Info Header ───────────────────────────────────────────────────────
function EventInfoHeader({ event, onClose }) {
  const { title, campusName, eventType, date, location } = event;

  // Support both { seats: { total, filled } } shape and raw backend fields
  const seatsObj = event.seats && typeof event.seats === 'object' ? event.seats : null;
  const totalSeats = seatsObj ? seatsObj.total : (event.totalSeats ?? 0);
  const filledSeats = seatsObj ? seatsObj.filled : (event.registeredCount ?? 0);
  const hasSeatInfo = totalSeats > 0;

  const pct  = hasSeatInfo ? Math.round((filledSeats / totalSeats) * 100) : 0;
  const left = hasSeatInfo ? totalSeats - filledSeats : 0;
  const badgeStyle = getBadgeStyle(eventType);
  const barColor   = getSeatBarColor(pct);
  const seatStatus = getSeatStatus(pct, left);

  return (
    <div className="bg-retro-yellow border-b-3 border-black p-5 relative">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 bg-retro-red border-3 border-black flex items-center justify-center text-white shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
        aria-label="Close modal"
      >
        <span className="material-symbols-outlined text-lg">close</span>
      </button>

      {/* Event type badge */}
      <div className="mb-3">
        <span
          className="border-2 border-black px-3 py-1 font-black uppercase text-xs inline-block shadow-retro-sm"
          style={badgeStyle}
        >
          {eventType}
        </span>
      </div>

      {/* Title + campus */}
      <h2 className="text-2xl font-black uppercase tracking-tighter leading-none pr-10">
        {title}
      </h2>
      <p className="text-xs font-black uppercase text-black/50 mt-1">{campusName}</p>

      {/* Meta row */}
      <div className="flex flex-wrap gap-4 mt-3">
        <div className="flex items-center gap-1.5">
          <div className="retro-icon-box-sm bg-black">
            <span className="material-symbols-outlined text-retro-yellow" style={{ fontSize: 14 }}>
              calendar_today
            </span>
          </div>
          <span className="text-xs font-black uppercase">{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="retro-icon-box-sm bg-black">
            <span className="material-symbols-outlined text-retro-yellow" style={{ fontSize: 14 }}>
              location_on
            </span>
          </div>
          <span className="text-xs font-black uppercase">{location}</span>
        </div>
      </div>

      {/* Seat availability bar — only shown when there is seat info */}
      {hasSeatInfo && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-black uppercase">Seats Available</span>
            <span className="text-xs font-black">{filledSeats} / {totalSeats} filled</span>
          </div>
          <div className="h-4 bg-white border-3 border-black w-full relative">
            <div
              className="h-full border-r-3 border-black transition-all"
              style={{ width: `${pct}%`, background: barColor }}
            />
            <span className="absolute right-2 top-0 h-full flex items-center text-xs font-black">
              {pct}%
            </span>
          </div>
          <p className={`text-xs font-bold uppercase mt-1 ${seatStatus.urgent ? 'text-retro-red' : 'text-black/50'}`}>
            {seatStatus.text}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Already Registered State ────────────────────────────────────────────────
function StateRegistered({ onCancel }) {
  return (
    <div className="p-6 stripe-bg">
      <div className="bg-retro-green border-3 border-black p-5 shadow-retro text-center">
        <div className="w-14 h-14 bg-white border-3 border-black flex items-center justify-center mx-auto mb-3 shadow-retro-sm">
          <span
            className="material-symbols-outlined text-retro-green text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <p className="font-black uppercase text-white text-lg leading-tight">You're Already Registered!</p>
        <p className="text-sm font-bold text-white/80 mt-2">You have secured your spot for this event.</p>
      </div>

      <div className="mt-4 bg-white border-3 border-black p-4 shadow-retro-sm flex items-center gap-3">
        <span
          className="material-symbols-outlined text-retro-green text-2xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          confirmation_number
        </span>
        <div>
          <p className="font-black uppercase text-sm">Registration Confirmed</p>
          <p className="text-xs font-bold text-black/50 uppercase">Check your email for details</p>
        </div>
      </div>

      <button
        onClick={onCancel}
        className="retro-btn retro-btn-danger w-full py-3 mt-4 text-sm shadow-retro"
      >
        Cancel Registration
      </button>
    </div>
  );
}

// ── Event Full State ────────────────────────────────────────────────────────
function StateFull() {
  return (
    <div className="p-6 stripe-bg">
      <div className="bg-retro-red border-3 border-black p-5 shadow-retro text-center">
        <div className="w-14 h-14 bg-white border-3 border-black flex items-center justify-center mx-auto mb-3 shadow-retro-sm">
          <span className="material-symbols-outlined text-retro-red text-4xl">event_busy</span>
        </div>
        <p className="font-black uppercase text-white text-lg leading-tight">Event is Full</p>
        <p className="text-sm font-bold text-white/80 mt-2">All seats have been taken for this event.</p>
      </div>

      <div className="mt-4 bg-retro-yellow border-3 border-black p-4 shadow-retro-sm flex items-center gap-3">
        <span className="material-symbols-outlined text-black text-2xl">notifications_active</span>
        <div>
          <p className="font-black uppercase text-sm">Want to be notified?</p>
          <p className="text-xs font-bold text-black/50 uppercase">We'll alert you if a spot opens up</p>
        </div>
        <button className="ml-auto retro-btn retro-btn-dark retro-btn-sm px-3 py-1.5 text-xs">
          Notify Me
        </button>
      </div>
    </div>
  );
}

// ── Registration Form ───────────────────────────────────────────────────────
function StateForm({ onSubmit, isLoading = false, errorMsg = null }) {
  const [form, setForm]       = useState({ name: '', email: '', dept: '', year: '', team: '' });
  const [terms, setTerms]     = useState(false);
  const [shake, setShake]     = useState(false);
  const [termErr, setTermErr] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.dept || !form.year) {
      triggerShake();
      return;
    }
    if (!terms) {
      setTermErr(true);
      setTimeout(() => setTermErr(false), 1500);
      return;
    }
    onSubmit(form);
  };

  return (
    <div className={`p-5 flex flex-col gap-4 stripe-bg${shake ? ' reg-shake' : ''}`}>
      {/* Section heading */}
      <div className="flex items-center gap-2 mb-1">
        <div className="w-5 h-5 bg-black flex-shrink-0" />
        <span className="font-black uppercase text-sm tracking-tight">Registration Details</span>
      </div>

      {/* Fields grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-black uppercase text-black/60 tracking-wide">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="retro-input"
            placeholder="Your Name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-black uppercase text-black/60 tracking-wide">College Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="retro-input"
            placeholder="you@college.ac.in"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-black uppercase text-black/60 tracking-wide">Department</label>
          <select name="dept" value={form.dept} onChange={handleChange} className="retro-select">
            <option value="">Select Department</option>
            {DEPARTMENTS.map(d => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-black uppercase text-black/60 tracking-wide">Year</label>
          <select name="year" value={form.year} onChange={handleChange} className="retro-select">
            <option value="">Select Year</option>
            {YEARS.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Team name (optional) */}
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-black uppercase text-black/60 tracking-wide">
          Team Name <span className="text-black/30">(optional)</span>
        </label>
        <input
          name="team"
          value={form.team}
          onChange={handleChange}
          className="retro-input"
          placeholder="Leave blank if solo"
          type="text"
        />
      </div>

      {/* Terms */}
      <label
        className="flex items-start gap-3 cursor-pointer"
        style={termErr ? { outline: '3px solid #E05C3A' } : {}}
      >
        <input
          type="checkbox"
          checked={terms}
          onChange={e => setTerms(e.target.checked)}
          className="w-4 h-4 mt-0.5 accent-black flex-shrink-0"
        />
        <span className="text-xs font-bold text-black/60 uppercase leading-snug">
          I agree to follow campus event guidelines and code of conduct
        </span>
      </label>

      {/* API error */}
      {errorMsg && (
        <div className="bg-retro-red border-3 border-black p-3 text-white font-black uppercase text-xs">
          {errorMsg}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className="retro-btn retro-btn-dark w-full py-4 text-base shadow-retro flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span>
            Registering...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-xl">how_to_reg</span>
            Confirm Registration
          </>
        )}
      </button>

      <p className="text-center text-xs font-bold text-black/30 uppercase -mt-2">
        You'll earn <span className="text-retro-green font-black">+20 XP</span> for registering
      </p>
    </div>
  );
}

// ── Confirmation View ───────────────────────────────────────────────────────
function ViewConfirmation({ event, registeredName, onClose }) {
  const confettiRef = useRef(null);

  useEffect(() => {
    spawnConfettiNodes(confettiRef.current);
  }, []);

  return (
    <div>
      {/* Green success header */}
      <div className="bg-retro-green border-b-3 border-black p-8 text-center relative overflow-hidden">
        <div ref={confettiRef} className="absolute inset-0 pointer-events-none overflow-hidden" />

        <div className="reg-check-pop w-20 h-20 bg-white border-3 border-black flex items-center justify-center mx-auto mb-4 shadow-retro relative z-10">
          <span
            className="material-symbols-outlined text-retro-green text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>

        <h2 className="text-3xl font-black uppercase tracking-tighter text-white leading-none relative z-10">
          You're In!
        </h2>
        <p className="text-sm font-bold text-white/80 mt-2 relative z-10">
          Registration confirmed successfully
        </p>

        {/* XP float badge */}
        <div className="reg-xp-float absolute top-6 right-8 bg-retro-yellow border-3 border-black px-3 py-1.5 shadow-retro z-20">
          <span className="font-black uppercase text-sm">+20 XP</span>
        </div>
      </div>

      {/* Confirmation details */}
      <div className="p-5 flex flex-col gap-3 stripe-bg">
        <div className="bg-white border-3 border-black shadow-retro divide-y-3 divide-black">
          {[
            { icon: 'event',         label: 'Event',         value: event.title,       bg: 'bg-retro-yellow', iconColor: 'text-black' },
            { icon: 'person',        label: 'Registered As', value: registeredName,    bg: 'bg-retro-yellow', iconColor: 'text-black' },
            { icon: 'calendar_today',label: 'Date',          value: event.date,        bg: 'bg-retro-yellow', iconColor: 'text-black' },
          ].map(({ icon, label, value, bg, iconColor }) => (
            <div key={label} className="px-4 py-3 flex items-center gap-3">
              <div className={`w-8 h-8 ${bg} border-3 border-black flex items-center justify-center flex-shrink-0`}>
                <span className={`material-symbols-outlined ${iconColor} text-base`}>{icon}</span>
              </div>
              <div>
                <p className="text-xs font-black uppercase text-black/40">{label}</p>
                <p className="font-black uppercase text-sm">{value}</p>
              </div>
            </div>
          ))}

          {/* XP row */}
          <div className="px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-white text-base">star</span>
            </div>
            <div>
              <p className="text-xs font-black uppercase text-black/40">XP Earned</p>
              <p className="font-black uppercase text-sm text-retro-green">+20 Campus XP</p>
            </div>
          </div>
        </div>

        <div className="bg-retro-yellow border-3 border-black p-3 shadow-retro-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-black text-xl">mail</span>
          <p className="text-xs font-black uppercase text-black/70">Confirmation sent to your college email</p>
        </div>

        <button
          onClick={onClose}
          className="retro-btn retro-btn-dark w-full py-3.5 text-sm shadow-retro"
        >
          Done — Back to Events
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
//  Main RegistrationModal
// ══════════════════════════════════════════════════════════════════════════════

/**
 * RegistrationModal
 *
 * Props:
 *  isOpen     {boolean}          — controls visibility
 *  onClose    {() => void}       — close handler
 *  event      {object|null}      — event data (see EVENT_DATA shape below)
 *  status     {'default'|'registered'|'full'} — registration status
 *
 * event shape:
 *  { _id, title, campusName, eventType, date, location,
 *    seats: { total, filled } }
 */
export default function RegistrationModal({ isOpen, onClose, event, status = 'registered', onRegister, onUnregister }) {
  const [view, setView]               = useState('form');       // 'form' | 'confirmation'
  const [registeredName, setName]     = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [regError, setRegError]           = useState(null);
  const dialogRef                     = useRef(null);

  // Inject keyframe styles once
  useEffect(() => {
    if (document.getElementById('reg-modal-styles')) return;
    const tag = document.createElement('style');
    tag.id = 'reg-modal-styles';
    tag.textContent = MODAL_STYLES;
    document.head.appendChild(tag);
  }, []);

  // Reset view when modal reopens
  useEffect(() => {
    if (isOpen) {
      setView('form');
      setName('');
      setIsRegistering(false);
      setRegError(null);
      // re-trigger dialog animation
      if (dialogRef.current) {
        dialogRef.current.classList.remove('reg-dialog-in');
        void dialogRef.current.offsetWidth;
        dialogRef.current.classList.add('reg-dialog-in');
      }
    }
  }, [isOpen]);

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  const handleFormSubmit = useCallback(async (formData) => {
    if (!onRegister) {
      // Fallback: no API provided — just show confirmation
      setName(formData.name);
      setView('confirmation');
      return;
    }
    setIsRegistering(true);
    setRegError(null);
    try {
      await onRegister(event._id || event.id);
      setName(formData.name);
      setView('confirmation');
    } catch (err) {
      setRegError(err?.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsRegistering(false);
    }
  }, [onRegister, event]);

  const handleCancelRegistration = useCallback(async () => {
    if (onUnregister) {
      try {
        await onUnregister(event._id || event.id);
      } catch (err) {
        console.error('Unregister failed:', err);
      }
    }
    onClose();
  }, [onUnregister, event, onClose]);

  if (!isOpen || !event) return null;

  // Full-seat override for 'full' status (works with raw or mapped event shapes)
  const _total = event.totalSeats ?? (event.seats && typeof event.seats === 'object' ? event.seats.total : 0);
  const displayEvent = status === 'full'
    ? { ...event, totalSeats: _total, registeredCount: _total, seats: { total: _total, filled: _total } }
    : event;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="reg-dialog-in bg-white border-3 border-black shadow-retro-lg w-full overflow-hidden"
        style={{ maxWidth: 560, maxHeight: '90vh', overflowY: 'auto' }}
      >
        {view === 'form' ? (
          /* ── Form view ───────────────────────────────── */
          <div>
            <EventInfoHeader event={displayEvent} onClose={onClose} />

            {status === 'registered' && (
              <StateRegistered onCancel={handleCancelRegistration} />
            )}
            {status === 'full' && (
              <StateFull />
            )}
            {status === 'default' && (
              <StateForm onSubmit={handleFormSubmit} isLoading={isRegistering} errorMsg={regError} />
            )}
          </div>
        ) : (
          /* ── Confirmation view ───────────────────────── */
          <ViewConfirmation
            event={event}
            registeredName={registeredName}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
