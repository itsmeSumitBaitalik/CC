<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CampusConnect | Events</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet"/>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          "retro-yellow": "#F5A623",
          "retro-red":    "#E05C3A",
          "retro-green":  "#4CAF50",
        },
        fontFamily: { display: ["Space Grotesk", "sans-serif"] },
        borderWidth: { '3': '3px' },
        boxShadow: {
          'retro':    '4px 4px 0px 0px #000',
          'retro-lg': '8px 8px 0px 0px #000',
          'retro-sm': '2px 2px 0px 0px #000',
        },
      },
    },
  }
</script>
<style>
  /* ── Animations ─────────────────────────── */
  @keyframes floatIcon {
    0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
    50%       { transform: translateY(-7px) rotate(var(--r, 0deg)); }
  }
  .float { animation: floatIcon 3s ease-in-out infinite; }

  @keyframes pulse-dot {
    0%, 100% { opacity:1; transform:scale(1); }
    50%       { opacity:.5; transform:scale(.85); }
  }
  .pulse { animation: pulse-dot 2s ease-in-out infinite; }

  @keyframes tickerH {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker { display:flex; white-space:nowrap; width:max-content;
             animation: tickerH 22s linear infinite; }

  /* ── Sidebar stripe ─────────────────────── */
  .stripe-bg {
    background-image: repeating-linear-gradient(
      -45deg, transparent, transparent 10px,
      rgba(0,0,0,.025) 10px, rgba(0,0,0,.025) 20px);
  }

  /* ── Calendar ───────────────────────────── */
  .cal-day { transition: background .12s, transform .12s; }
  .cal-day:hover { background: #F5A623 !important; transform: scale(1.08); z-index:2; }
  .cal-day.has-event { cursor: pointer; }

  /* Event dot colours */
  .dot-hackathon { background:#E05C3A; }
  .dot-cultural   { background:#4CAF50; }
  .dot-workshop   { background:#F5A623; border:2px solid #000; }
  .dot-sports     { background:#fff;    border:2px solid #000; }

  /* ── Card hover ─────────────────────────── */
  .card-lift { transition: transform .15s, box-shadow .15s; }
  .card-lift:hover { transform: translate(-2px,-3px); box-shadow: 6px 7px 0 0 #000; }

  /* ── Scrollbar ──────────────────────────── */
  .retro-scroll::-webkit-scrollbar { width:5px; }
  .retro-scroll::-webkit-scrollbar-track { background:#F5A623; border-left:2px solid #000; }
  .retro-scroll::-webkit-scrollbar-thumb { background:#000; }

  /* ── Progress bar ───────────────────────── */
  @keyframes growBar { from{width:0} to{width:var(--w)} }
  .grow-bar { animation: growBar 1s ease-out forwards; }

  /* Nav active */
  .nav-active { background:#F5A623; border-left:4px solid #000 !important; }
</style>
</head>

<body class="bg-retro-yellow font-display text-black h-screen overflow-hidden">
<div class="flex h-screen w-full overflow-hidden">

  <!-- ══════════════════════════════
       SIDEBAR  (identical system)
  ══════════════════════════════ -->
  <aside class="w-64 flex-shrink-0 bg-white border-r-3 border-black flex flex-col h-full overflow-hidden stripe-bg relative">

    <!-- Logo -->
    <div class="border-b-3 border-black bg-retro-yellow flex items-center justify-between px-5 gap-3 flex-shrink-0" style="min-height:73px;">
      <div class="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
        <span class="material-symbols-outlined text-retro-yellow text-2xl">hub</span>
      </div>
      <div class="flex-1">
        <span class="font-black uppercase tracking-tighter text-lg leading-none block">Campus<span class="text-white bg-black px-1">Connect</span></span>
        <span class="text-xs font-black text-black/50 uppercase tracking-widest">Student Hub</span>
      </div>
      <div class="w-3 h-3 bg-black border-2 border-black rounded-full flex-shrink-0 pulse"></div>
    </div>

    <!-- Ticker -->
    <div class="border-b-3 border-black overflow-hidden bg-retro-green py-1.5 flex-shrink-0">
      <div class="ticker">
        <span class="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
        <span class="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
      </div>
    </div>

    <!-- Nav label -->
    <div class="px-4 pt-4 pb-1 flex-shrink-0">
      <span class="text-xs font-black uppercase tracking-widest text-black/30">Main Menu</span>
    </div>

    <!-- Nav -->
    <nav class="flex flex-col gap-1 px-3 flex-1 overflow-y-auto">
      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-retro-yellow text-xl">grid_view</span>
        </div>
        <span class="font-black uppercase text-sm">Dashboard</span>
      </a>

      <!-- EVENTS — active -->
      <a href="#" class="nav-active flex items-center gap-3 px-3 py-3 border-3 border-black shadow-retro-sm">
        <div class="w-9 h-9 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-xl">event</span>
        </div>
        <span class="font-black uppercase text-sm">Events</span>
        <div class="ml-auto bg-retro-red border-2 border-black px-1.5 py-0.5 text-xs font-black text-white leading-none">4</div>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-xl">chat_bubble</span>
        </div>
        <span class="font-black uppercase text-sm">Chatting</span>
        <div class="ml-auto bg-retro-red border-2 border-black px-1.5 py-0.5 text-xs font-black text-white leading-none">3</div>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">person_search</span>
        </div>
        <span class="font-black uppercase text-sm">Mentors</span>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-white border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">groups</span>
        </div>
        <span class="font-black uppercase text-sm">Community</span>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-white border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">settings</span>
        </div>
        <span class="font-black uppercase text-sm">Settings</span>
      </a>

    </nav>

    <!-- Profile -->
    <div class="border-t-3 border-black p-3 bg-white flex-shrink-0">
      <div class="bg-retro-yellow border-3 border-black p-3 shadow-retro">
        <div class="flex items-center gap-3">
          <div class="relative flex-shrink-0">
            <div class="w-11 h-11 rounded-full border-3 border-black bg-white flex items-center justify-center shadow-retro-sm">
              <span class="material-symbols-outlined text-2xl">person</span>
            </div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-black uppercase text-sm leading-none">Jackie Chen</p>
            <p class="text-xs font-bold text-black/60 mt-0.5">2nd Year • CS</p>
          </div>
          <button class="w-8 h-8 bg-white border-3 border-black flex items-center justify-center shadow-retro-sm hover:bg-black hover:text-white transition-colors">
            <span class="material-symbols-outlined text-lg">settings</span>
          </button>
        </div>
      </div>
    </div>
  </aside>

  <!-- ══════════════════════════════
       MAIN CONTENT
  ══════════════════════════════ -->
  <main class="flex-1 overflow-y-auto bg-retro-yellow retro-scroll">

    <!-- Topbar -->
    <div class="sticky top-0 z-40 bg-white border-b-3 border-black px-6 flex items-center justify-between" style="min-height:73px;">
      <div>
        <p class="text-xs font-black uppercase tracking-widest text-black/30">Campus Life</p>
        <h1 class="text-2xl font-black uppercase tracking-tighter leading-none">Events 🎉</h1>
      </div>
      <button class="relative w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        <span class="material-symbols-outlined text-xl">notifications</span>
        <div class="absolute -top-2 -right-2 w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center rounded-full">
          <span class="text-white text-xs font-black">7</span>
        </div>
      </button>
    </div>

    <div class="p-5 flex flex-col gap-5">

      <!-- ── ROW 1: CALENDAR + QUICK STATS ── -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">

        <!-- CALENDAR (2/3 width) -->
        <div class="xl:col-span-2 bg-white border-3 border-black shadow-retro">

          <!-- Calendar header -->
          <div class="flex items-center justify-between px-5 py-4 border-b-3 border-black bg-retro-yellow">
            <button onclick="prevMonth()" class="w-9 h-9 bg-white border-3 border-black flex items-center justify-center font-black shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">‹</button>
            <div class="text-center">
              <h2 id="cal-month-label" class="text-2xl font-black uppercase tracking-tighter">March 2025</h2>
              <p class="text-xs font-bold text-black/50 uppercase">Pick a date to see events</p>
            </div>
            <button onclick="nextMonth()" class="w-9 h-9 bg-white border-3 border-black flex items-center justify-center font-black shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">›</button>
          </div>

          <!-- Day-of-week labels -->
          <div class="grid grid-cols-7 border-b-3 border-black">
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Sun</div>
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Mon</div>
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Tue</div>
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Wed</div>
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Thu</div>
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Fri</div>
            <div class="py-2 text-center text-xs font-black uppercase border-r-3 border-black last:border-r-0 bg-white">Sat</div>
          </div>

          <!-- Calendar grid -->
          <div id="cal-grid" class="grid grid-cols-7"></div>

          <!-- Legend row -->
          <div class="border-t-3 border-black px-5 py-3 flex flex-wrap gap-4">
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center"><span class="material-symbols-outlined text-white" style="font-size:11px;">bolt</span></div>
              <span class="text-xs font-bold uppercase">Hackathon</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 bg-retro-green border-2 border-black flex items-center justify-center"><span class="material-symbols-outlined text-white" style="font-size:11px;">music_note</span></div>
              <span class="text-xs font-bold uppercase">Cultural</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 bg-retro-yellow border-2 border-black flex items-center justify-center"><span class="material-symbols-outlined text-black" style="font-size:11px;">build</span></div>
              <span class="text-xs font-bold uppercase">Workshop</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 bg-white border-2 border-black flex items-center justify-center"><span class="material-symbols-outlined text-black" style="font-size:11px;">sports_soccer</span></div>
              <span class="text-xs font-bold uppercase">Sports</span>
            </div>
            <div class="flex items-center gap-1.5">
              <div class="w-5 h-5 bg-white border-2 border-black flex items-center justify-center"><span class="material-symbols-outlined text-black" style="font-size:11px;">star</span></div>
              <span class="text-xs font-bold uppercase">Joined</span>
            </div>
          </div>
        </div>

        <!-- RIGHT: quick stats -->
        <div class="flex flex-col gap-4">

          <!-- Stat cards -->
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-retro-green border-3 border-black p-4 shadow-retro card-lift text-white">
              <span class="material-symbols-outlined text-3xl">upcoming</span>
              <p class="text-3xl font-black mt-1 leading-none">6</p>
              <p class="text-xs font-black uppercase mt-1 text-white/70">Upcoming</p>
            </div>
            <div class="bg-retro-red border-3 border-black p-4 shadow-retro card-lift text-white">
              <span class="material-symbols-outlined text-3xl">play_circle</span>
              <p class="text-3xl font-black mt-1 leading-none">2</p>
              <p class="text-xs font-black uppercase mt-1 text-white/70">Ongoing</p>
            </div>
            <div class="bg-white border-3 border-black p-4 shadow-retro card-lift">
              <span class="material-symbols-outlined text-3xl">check_circle</span>
              <p class="text-3xl font-black mt-1 leading-none">8</p>
              <p class="text-xs font-black uppercase mt-1 text-black/40">Completed</p>
            </div>
            <div class="bg-retro-yellow border-3 border-black p-4 shadow-retro card-lift">
              <span class="material-symbols-outlined text-3xl">bookmark</span>
              <p class="text-3xl font-black mt-1 leading-none">4</p>
              <p class="text-xs font-black uppercase mt-1 text-black/60">Registered</p>
            </div>
          </div>

          <!-- Selected day popup -->
          <div id="day-detail" class="bg-white border-3 border-black shadow-retro p-4 hidden">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 bg-retro-yellow border-3 border-black shrink-0"></div>
              <h3 id="day-detail-title" class="font-black uppercase text-sm">Events on Mar 15</h3>
            </div>
            <div id="day-detail-list" class="flex flex-col gap-2"></div>
          </div>

          <!-- Motivational retro block -->
          <div class="bg-retro-yellow border-3 border-black shadow-retro p-4 relative overflow-hidden">
            <div class="absolute -top-4 -right-4 w-20 h-20 bg-white border-3 border-black rounded-full opacity-20"></div>
            <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-black rounded-full opacity-5"></div>
            <div class="float" style="--r: -8deg; display:inline-block; margin-bottom:8px;">
              <div class="bg-white border-3 border-black p-2 shadow-retro-sm w-10 h-10 flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">rocket_launch</span>
              </div>
            </div>
            <p class="font-black uppercase text-base leading-tight">Don't miss <span class="bg-black text-white px-1">Tech Fest</span> today!</p>
            <p class="text-xs font-bold text-black/60 mt-1 uppercase">Registration closes in 2h 14m</p>
            <button class="mt-3 w-full bg-black text-retro-yellow border-3 border-black py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Register Now →</button>
          </div>

        </div>
      </div>

      <!-- ── FILTER + SECTION LABEL ROW ── -->
      <div class="flex items-center justify-between flex-wrap gap-3">
        <!-- Plain label — visually distinct from section headers -->
        <div class="flex items-center gap-2">
          <span class="text-xs font-black uppercase tracking-widest text-black/40">Filter by</span>
          <div class="w-4 h-[2px] bg-black/30"></div>
        </div>
        <!-- Retro segmented filter -->
        <div class="flex items-center border-3 border-black shadow-retro overflow-hidden">
          <button onclick="filterEvents('all')" id="pill-all"
            class="pill-btn bg-black text-retro-yellow px-5 py-2 font-black uppercase text-xs border-r-3 border-black transition-all hover:bg-retro-yellow hover:text-black">
            All
          </button>
          <button onclick="filterEvents('upcoming')" id="pill-upcoming"
            class="pill-btn bg-white text-black px-5 py-2 font-black uppercase text-xs border-r-3 border-black transition-all hover:bg-retro-yellow">
            ↑ Upcoming
          </button>
          <button onclick="filterEvents('ongoing')" id="pill-ongoing"
            class="pill-btn bg-white text-black px-5 py-2 font-black uppercase text-xs border-r-3 border-black transition-all hover:bg-retro-yellow">
            ● Ongoing
          </button>
          <button onclick="filterEvents('completed')" id="pill-completed"
            class="pill-btn bg-white text-black px-5 py-2 font-black uppercase text-xs transition-all hover:bg-retro-yellow">
            ✓ Completed
          </button>
        </div>
      </div>

      <!-- ── ONGOING EVENTS ── -->
      <div id="section-ongoing" class="event-section">
        <div class="flex items-center gap-0 mb-3">
          <div class="w-6 h-6 bg-retro-red border-3 border-black shrink-0"></div>
          <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">ONGOING EVENTS</h2>
          <div class="ml-3 bg-retro-red border-3 border-black px-3 py-1 shadow-retro-sm">
            <span class="text-white font-black text-xs uppercase">● LIVE NOW</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <!-- Ongoing Card 1 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="ongoing">
            <div class="bg-retro-red flex items-center justify-between px-5 py-3 border-b-3 border-black">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-white border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-red" style="font-size:14px;">bolt</span>
                </div>
                <span class="text-white font-black uppercase text-sm">Hackathon</span>
              </div>
              <div class="flex items-center gap-1.5 bg-white border-2 border-black px-2 py-0.5">
                <div class="w-2 h-2 bg-retro-red rounded-full pulse"></div>
                <span class="font-black text-xs uppercase text-retro-red">Live</span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-black uppercase leading-tight mb-1">Tech Fest 2025</h3>
              <p class="text-sm font-medium text-black/60 mb-3">Build something amazing in 24 hours with teams of up to 4.</p>
              <div class="flex flex-wrap gap-3 text-xs font-bold text-black/50 mb-3">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Main Auditorium</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>10:00 AM — 10:00 PM</span>
              </div>
              <!-- Live progress -->
              <div class="mb-3">
                <div class="flex justify-between mb-1">
                  <span class="text-xs font-black uppercase">Progress</span>
                  <span class="text-xs font-black">6h / 24h</span>
                </div>
                <div class="h-3 bg-retro-yellow border-2 border-black w-full">
                  <div class="h-full bg-retro-red grow-bar" style="--w:25%; width:25%;"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">group</span>
                  <span class="text-xs font-bold">142 participants</span>
                </div>
                <button class="bg-retro-green border-3 border-black px-3 py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Join Late →</button>
              </div>
            </div>
          </div>

          <!-- Ongoing Card 2 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="ongoing">
            <div class="bg-retro-green flex items-center justify-between px-5 py-3 border-b-3 border-black">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-white border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-green" style="font-size:14px;">music_note</span>
                </div>
                <span class="text-white font-black uppercase text-sm">Cultural</span>
              </div>
              <div class="flex items-center gap-1.5 bg-white border-2 border-black px-2 py-0.5">
                <div class="w-2 h-2 bg-retro-green rounded-full pulse"></div>
                <span class="font-black text-xs uppercase text-retro-green">Live</span>
              </div>
            </div>
            <div class="p-5">
              <h3 class="text-xl font-black uppercase leading-tight mb-1">Spring Fest Concert</h3>
              <p class="text-sm font-medium text-black/60 mb-3">Live performances from 12 campus bands across 2 stages.</p>
              <div class="flex flex-wrap gap-3 text-xs font-bold text-black/50 mb-3">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Open Air Stage</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>4:00 PM — 9:00 PM</span>
              </div>
              <div class="mb-3">
                <div class="flex justify-between mb-1">
                  <span class="text-xs font-black uppercase">Progress</span>
                  <span class="text-xs font-black">1h / 5h</span>
                </div>
                <div class="h-3 bg-retro-yellow border-2 border-black w-full">
                  <div class="h-full bg-retro-green grow-bar" style="--w:20%; width:20%;"></div>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">group</span>
                  <span class="text-xs font-bold">320 attending</span>
                </div>
                <button class="bg-retro-green border-3 border-black px-3 py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">View →</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ── UPCOMING EVENTS ── -->
      <div id="section-upcoming" class="event-section">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-0">
            <div class="w-6 h-6 bg-retro-green border-3 border-black shrink-0"></div>
            <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">UPCOMING EVENTS</h2>
          </div>
          <button class="bg-white border-3 border-black px-3 py-1.5 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">View All →</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          <!-- Upcoming 1 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="upcoming">
            <div class="bg-retro-yellow border-b-3 border-black flex items-center justify-between px-5 py-3">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-black border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-yellow" style="font-size:14px;">build</span>
                </div>
                <span class="font-black uppercase text-sm">Workshop</span>
              </div>
              <span class="border-2 border-black px-2 py-0.5 font-black text-xs uppercase bg-white">Mar 18</span>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-black uppercase leading-tight mb-1">Placement Prep</h3>
              <p class="text-sm font-medium text-black/60 mb-3">Resume tips, mock interviews, and DSA crash course.</p>
              <div class="flex flex-col gap-1.5 text-xs font-bold text-black/50 mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Room 204, Block C</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>2:00 PM — 5:00 PM</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span>48 / 60 seats</span>
              </div>
              <!-- Seat progress -->
              <div class="mb-4">
                <div class="h-2.5 bg-retro-yellow border-2 border-black w-full">
                  <div class="h-full bg-black grow-bar" style="--w:80%; width:80%;"></div>
                </div>
                <p class="text-xs font-bold text-black/40 mt-1">80% seats filled</p>
              </div>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
            </div>
          </div>

          <!-- Upcoming 2 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="upcoming">
            <div class="bg-retro-red border-b-3 border-black flex items-center justify-between px-5 py-3">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-white border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-red" style="font-size:14px;">bolt</span>
                </div>
                <span class="text-white font-black uppercase text-sm">Hackathon</span>
              </div>
              <span class="border-2 border-white px-2 py-0.5 font-black text-xs uppercase text-white">Mar 22</span>
            </div>
            <div class="p-5">
              <div class="bg-retro-red border-2 border-black px-2 py-0.5 w-fit mb-2">
                <span class="text-white font-black text-xs uppercase">⭐ You're Registered</span>
              </div>
              <h3 class="text-lg font-black uppercase leading-tight mb-1">Inter-College Hackathon</h3>
              <p class="text-sm font-medium text-black/60 mb-3">48-hour build challenge. ₹50,000 prize pool.</p>
              <div class="flex flex-col gap-1.5 text-xs font-bold text-black/50 mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Innovation Hub</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>9:00 AM (48hrs)</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span>210 registered</span>
              </div>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">View Details →</button>
            </div>
          </div>

          <!-- Upcoming 3 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="upcoming">
            <div class="bg-white border-b-3 border-black flex items-center justify-between px-5 py-3">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-white border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-black" style="font-size:14px;">sports_soccer</span>
                </div>
                <span class="font-black uppercase text-sm">Sports</span>
              </div>
              <span class="border-2 border-black px-2 py-0.5 font-black text-xs uppercase">Mar 25</span>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-black uppercase leading-tight mb-1">Annual Sports Meet</h3>
              <p class="text-sm font-medium text-black/60 mb-3">Football, cricket, basketball & athletics on one day.</p>
              <div class="flex flex-col gap-1.5 text-xs font-bold text-black/50 mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Sports Ground</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>8:00 AM — 6:00 PM</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span>124 / 200 spots</span>
              </div>
              <div class="mb-4">
                <div class="h-2.5 bg-retro-yellow border-2 border-black w-full">
                  <div class="h-full bg-black grow-bar" style="--w:62%; width:62%;"></div>
                </div>
                <p class="text-xs font-bold text-black/40 mt-1">62% spots filled</p>
              </div>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
            </div>
          </div>

          <!-- Upcoming 4 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="upcoming">
            <div class="bg-retro-green border-b-3 border-black flex items-center justify-between px-5 py-3">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-white border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-green" style="font-size:14px;">music_note</span>
                </div>
                <span class="text-white font-black uppercase text-sm">Cultural</span>
              </div>
              <span class="border-2 border-white px-2 py-0.5 font-black text-xs uppercase text-white">Apr 1</span>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-black uppercase leading-tight mb-1">Open Mic Night</h3>
              <p class="text-sm font-medium text-black/60 mb-3">Poetry, comedy, music — take the mic and own the stage.</p>
              <div class="flex flex-col gap-1.5 text-xs font-bold text-black/50 mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Campus Cafe</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>6:00 PM — 9:00 PM</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span>Free Entry</span>
              </div>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
            </div>
          </div>

          <!-- Upcoming 5 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="upcoming">
            <div class="bg-retro-yellow border-b-3 border-black flex items-center justify-between px-5 py-3">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-black border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-yellow" style="font-size:14px;">build</span>
                </div>
                <span class="font-black uppercase text-sm">Workshop</span>
              </div>
              <span class="border-2 border-black px-2 py-0.5 font-black text-xs uppercase bg-white">Apr 5</span>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-black uppercase leading-tight mb-1">ML Bootcamp</h3>
              <p class="text-sm font-medium text-black/60 mb-3">Hands-on intro to machine learning with Python & scikit-learn.</p>
              <div class="flex flex-col gap-1.5 text-xs font-bold text-black/50 mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>CS Lab 3</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>10:00 AM — 4:00 PM</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span>20 / 30 seats</span>
              </div>
              <div class="mb-4">
                <div class="h-2.5 bg-retro-yellow border-2 border-black w-full">
                  <div class="h-full bg-black grow-bar" style="--w:67%; width:67%;"></div>
                </div>
                <p class="text-xs font-bold text-black/40 mt-1">Only 10 seats left!</p>
              </div>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
            </div>
          </div>

          <!-- Upcoming 6 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden event-card" data-status="upcoming">
            <div class="bg-retro-red border-b-3 border-black flex items-center justify-between px-5 py-3">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-white border-2 border-black flex items-center justify-center">
                  <span class="material-symbols-outlined text-retro-red" style="font-size:14px;">bolt</span>
                </div>
                <span class="text-white font-black uppercase text-sm">Hackathon</span>
              </div>
              <span class="border-2 border-white px-2 py-0.5 font-black text-xs uppercase text-white">Apr 12</span>
            </div>
            <div class="p-5">
              <h3 class="text-lg font-black uppercase leading-tight mb-1">Smart India Hackathon</h3>
              <p class="text-sm font-medium text-black/60 mb-3">National level. Solve real government problems. Win big.</p>
              <div class="flex flex-col gap-1.5 text-xs font-bold text-black/50 mb-4">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Online + Campus</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>36 hrs</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span>Teams of 6</span>
              </div>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
            </div>
          </div>

        </div>
      </div>

      <!-- ── COMPLETED EVENTS ── -->
      <div id="section-completed" class="event-section">
        <div class="flex items-center gap-0 mb-3">
          <div class="w-6 h-6 bg-white border-3 border-black shrink-0"></div>
          <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">COMPLETED EVENTS</h2>
        </div>

        <div class="flex flex-col gap-3">

          <!-- Completed Row 1 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift flex items-center gap-0 overflow-hidden opacity-80 event-card" data-status="completed">
            <div class="bg-black/10 flex flex-col items-center justify-center px-4 py-5 border-r-3 border-black flex-shrink-0 w-20">
              <span class="font-black text-2xl leading-none">28</span>
              <span class="font-black text-xs uppercase">Feb</span>
            </div>
            <div class="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-r-3 border-black">
              <div class="w-8 h-8 bg-retro-red border-2 border-black flex items-center justify-center">
                <span class="material-symbols-outlined text-white" style="font-size:16px;">bolt</span>
              </div>
              <span class="font-black uppercase text-xs">Hackathon</span>
            </div>
            <div class="px-4 py-3 flex-1">
              <h3 class="font-black uppercase text-base leading-none">Code Sprint 2025</h3>
              <p class="text-xs font-bold text-black/40 mt-0.5 uppercase">Main Auditorium • 12h</p>
            </div>
            <div class="px-4 flex-shrink-0 flex items-center gap-3">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-retro-green">check_circle</span>
                <span class="text-xs font-black uppercase text-retro-green">Attended</span>
              </div>
              <button class="border-3 border-black px-3 py-1.5 font-black uppercase text-xs hover:bg-black hover:text-white transition-colors">View →</button>
            </div>
          </div>

          <!-- Completed Row 2 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift flex items-center gap-0 overflow-hidden opacity-80 event-card" data-status="completed">
            <div class="bg-black/10 flex flex-col items-center justify-center px-4 py-5 border-r-3 border-black flex-shrink-0 w-20">
              <span class="font-black text-2xl leading-none">20</span>
              <span class="font-black text-xs uppercase">Feb</span>
            </div>
            <div class="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-r-3 border-black">
              <div class="w-8 h-8 bg-retro-green border-2 border-black flex items-center justify-center">
                <span class="material-symbols-outlined text-white" style="font-size:16px;">music_note</span>
              </div>
              <span class="font-black uppercase text-xs">Cultural</span>
            </div>
            <div class="px-4 py-3 flex-1">
              <h3 class="font-black uppercase text-base leading-none">Valentine's Day Fest</h3>
              <p class="text-xs font-bold text-black/40 mt-0.5 uppercase">Open Air Stage • 4h</p>
            </div>
            <div class="px-4 flex-shrink-0 flex items-center gap-3">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-retro-green">check_circle</span>
                <span class="text-xs font-black uppercase text-retro-green">Attended</span>
              </div>
              <button class="border-3 border-black px-3 py-1.5 font-black uppercase text-xs hover:bg-black hover:text-white transition-colors">View →</button>
            </div>
          </div>

          <!-- Completed Row 3 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift flex items-center gap-0 overflow-hidden opacity-80 event-card" data-status="completed">
            <div class="bg-black/10 flex flex-col items-center justify-center px-4 py-5 border-r-3 border-black flex-shrink-0 w-20">
              <span class="font-black text-2xl leading-none">10</span>
              <span class="font-black text-xs uppercase">Feb</span>
            </div>
            <div class="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-r-3 border-black">
              <div class="w-8 h-8 bg-retro-yellow border-2 border-black flex items-center justify-center">
                <span class="material-symbols-outlined text-black" style="font-size:16px;">build</span>
              </div>
              <span class="font-black uppercase text-xs">Workshop</span>
            </div>
            <div class="px-4 py-3 flex-1">
              <h3 class="font-black uppercase text-base leading-none">Git & GitHub Bootcamp</h3>
              <p class="text-xs font-bold text-black/40 mt-0.5 uppercase">CS Lab 1 • 3h</p>
            </div>
            <div class="px-4 flex-shrink-0 flex items-center gap-3">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-black/30">cancel</span>
                <span class="text-xs font-black uppercase text-black/30">Missed</span>
              </div>
              <button class="border-3 border-black px-3 py-1.5 font-black uppercase text-xs hover:bg-black hover:text-white transition-colors">View →</button>
            </div>
          </div>

          <!-- Completed Row 4 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift flex items-center gap-0 overflow-hidden opacity-80 event-card" data-status="completed">
            <div class="bg-black/10 flex flex-col items-center justify-center px-4 py-5 border-r-3 border-black flex-shrink-0 w-20">
              <span class="font-black text-2xl leading-none">2</span>
              <span class="font-black text-xs uppercase">Feb</span>
            </div>
            <div class="flex items-center gap-3 px-4 py-3 flex-shrink-0 border-r-3 border-black">
              <div class="w-8 h-8 bg-white border-2 border-black flex items-center justify-center">
                <span class="material-symbols-outlined text-black" style="font-size:16px;">sports_soccer</span>
              </div>
              <span class="font-black uppercase text-xs">Sports</span>
            </div>
            <div class="px-4 py-3 flex-1">
              <h3 class="font-black uppercase text-base leading-none">Inter-Dept Football</h3>
              <p class="text-xs font-bold text-black/40 mt-0.5 uppercase">Sports Ground • Full Day</p>
            </div>
            <div class="px-4 flex-shrink-0 flex items-center gap-3">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-retro-green">check_circle</span>
                <span class="text-xs font-black uppercase text-retro-green">Attended</span>
              </div>
              <button class="border-3 border-black px-3 py-1.5 font-black uppercase text-xs hover:bg-black hover:text-white transition-colors">View →</button>
            </div>
          </div>

        </div>
      </div>

      <!-- Bottom spacer -->
      <div class="h-4"></div>
    </div>
  </main>
</div>

<script>
  // ── Calendar data ──────────────────────────────────────────
  const events = {
    // Mar 2025
    '2025-3-15': [{ type:'hackathon', icon:'bolt',        color:'#E05C3A', textColor:'white', label:'Tech Fest 2025',        status:'ongoing'  }],
    '2025-3-15': [{ type:'hackathon', icon:'bolt',        color:'#E05C3A', textColor:'white', label:'Tech Fest 2025',        status:'ongoing'  },
                  { type:'cultural',  icon:'music_note',  color:'#4CAF50', textColor:'white', label:'Spring Fest Concert',   status:'ongoing'  }],
    '2025-3-16': [{ type:'cultural',  icon:'music_note',  color:'#4CAF50', textColor:'white', label:'Open Mic Night',        status:'upcoming' }],
    '2025-3-18': [{ type:'workshop',  icon:'build',       color:'#F5A623', textColor:'black', label:'Placement Prep',        status:'upcoming' }],
    '2025-3-22': [{ type:'hackathon', icon:'bolt',        color:'#E05C3A', textColor:'white', label:'Inter-College Hack',    status:'upcoming' }],
    '2025-3-25': [{ type:'sports',    icon:'sports_soccer',color:'#fff',   textColor:'black', label:'Annual Sports Meet',    status:'upcoming' }],
    '2025-4-1':  [{ type:'cultural',  icon:'music_note',  color:'#4CAF50', textColor:'white', label:'Open Mic Night',        status:'upcoming' }],
    '2025-4-5':  [{ type:'workshop',  icon:'build',       color:'#F5A623', textColor:'black', label:'ML Bootcamp',           status:'upcoming' }],
    '2025-4-12': [{ type:'hackathon', icon:'bolt',        color:'#E05C3A', textColor:'white', label:'Smart India Hackathon', status:'upcoming' }],
    '2025-2-28': [{ type:'hackathon', icon:'bolt',        color:'#E05C3A', textColor:'white', label:'Code Sprint 2025',      status:'completed'}],
    '2025-2-20': [{ type:'cultural',  icon:'music_note',  color:'#4CAF50', textColor:'white', label:"Valentine's Day Fest",  status:'completed'}],
    '2025-2-10': [{ type:'workshop',  icon:'build',       color:'#F5A623', textColor:'black', label:'Git & GitHub Bootcamp', status:'completed'}],
    '2025-2-2':  [{ type:'sports',    icon:'sports_soccer',color:'#fff',   textColor:'black', label:'Inter-Dept Football',   status:'completed'}],
  };

  const joinedDays = new Set(['2025-3-15','2025-3-22','2025-2-28','2025-2-20']);

  let currentYear  = 2025;
  let currentMonth = 3; // 1-indexed

  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const fullMonthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function buildCalendar(year, month) {
    document.getElementById('cal-month-label').textContent = `${fullMonthNames[month-1]} ${year}`;
    const grid = document.getElementById('cal-grid');
    grid.innerHTML = '';

    const firstDay = new Date(year, month-1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const today = new Date();
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
      const dayNum = i - firstDay + 1;
      const isCurrentMonth = dayNum >= 1 && dayNum <= daysInMonth;
      const key = `${year}-${month}-${dayNum}`;
      const dayEvents = events[key] || [];
      const isToday = isCurrentMonth && today.getFullYear()===year && today.getMonth()+1===month && today.getDate()===dayNum;
      const isJoined = joinedDays.has(key);
      const colIndex = i % 7;

      const cell = document.createElement('div');
      cell.className = `cal-day relative border-b-3 border-r-3 border-black flex flex-col items-start justify-start pt-1 px-1 pb-1 min-h-[70px]
        ${colIndex === 6 ? 'border-r-0' : ''}
        ${!isCurrentMonth ? 'bg-black/5' : 'bg-white'}
        ${dayEvents.length ? 'has-event' : ''}`;

      // Day number
      const dayLabel = document.createElement('span');
      dayLabel.textContent = isCurrentMonth ? dayNum : '';
      dayLabel.className = `text-xs font-black leading-none mb-1 ${isToday ? 'bg-black text-retro-yellow w-5 h-5 flex items-center justify-center rounded-full' : (isCurrentMonth ? 'text-black' : 'text-black/20')}`;
      cell.appendChild(dayLabel);

      // Joined star
      if (isJoined && isCurrentMonth) {
        const star = document.createElement('div');
        star.className = 'absolute top-1 right-1 w-3.5 h-3.5 flex items-center justify-center';
        star.innerHTML = '<span class="material-symbols-outlined text-retro-yellow" style="font-size:11px;-webkit-text-stroke:1px #000;">star</span>';
        cell.appendChild(star);
      }

      // Event icons (max 3 icons)
      const iconRow = document.createElement('div');
      iconRow.className = 'flex flex-col gap-0.5 w-full';
      dayEvents.slice(0,3).forEach(ev => {
        const chip = document.createElement('div');
        chip.className = 'flex items-center gap-0.5 px-1 py-0.5 border border-black w-full';
        chip.style.background = ev.color;
        chip.innerHTML = `<span class="material-symbols-outlined" style="font-size:9px;color:${ev.textColor};">${ev.icon}</span><span style="font-size:7px;font-weight:900;text-transform:uppercase;color:${ev.textColor};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">${ev.label.slice(0,10)}</span>`;
        iconRow.appendChild(chip);
      });
      cell.appendChild(iconRow);

      // Click handler
      if (dayEvents.length && isCurrentMonth) {
        cell.addEventListener('click', () => showDayDetail(dayNum, month, year, dayEvents));
      }

      grid.appendChild(cell);
    }
  }

  function showDayDetail(day, month, year, evs) {
    const panel = document.getElementById('day-detail');
    const title = document.getElementById('day-detail-title');
    const list  = document.getElementById('day-detail-list');
    title.textContent = `Events on ${monthNames[month-1]} ${day}`;
    list.innerHTML = '';
    evs.forEach(ev => {
      const item = document.createElement('div');
      item.className = 'flex items-center gap-2 p-2 border-2 border-black';
      item.style.background = ev.color + '33';
      item.innerHTML = `
        <div class="w-6 h-6 border-2 border-black flex items-center justify-center flex-shrink-0" style="background:${ev.color}">
          <span class="material-symbols-outlined" style="font-size:12px;color:${ev.textColor};">${ev.icon}</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="font-black uppercase text-xs leading-none">${ev.label}</p>
          <p class="text-xs font-bold uppercase mt-0.5 opacity-50">${ev.status}</p>
        </div>`;
      list.appendChild(item);
    });
    panel.classList.remove('hidden');
  }

  function prevMonth() {
    currentMonth--;
    if (currentMonth < 1) { currentMonth = 12; currentYear--; }
    buildCalendar(currentYear, currentMonth);
  }
  function nextMonth() {
    currentMonth++;
    if (currentMonth > 12) { currentMonth = 1; currentYear++; }
    buildCalendar(currentYear, currentMonth);
  }

  buildCalendar(currentYear, currentMonth);

  // ── Filter tabs ────────────────────────────────────────────
  function filterEvents(status) {
    // Update tab active states
    document.querySelectorAll('.pill-btn').forEach(b => {
      b.classList.remove('bg-black','text-white');
      b.classList.add('bg-white','text-black');
    });
    const active = document.getElementById(`pill-${status}`);
    if (active) { active.classList.add('bg-black','text-white'); active.classList.remove('bg-white','text-black'); }

    // Show/hide sections
    const sections = { all: ['ongoing','upcoming','completed'], upcoming:['upcoming'], ongoing:['ongoing'], completed:['completed'] };
    ['ongoing','upcoming','completed'].forEach(s => {
      const el = document.getElementById(`section-${s}`);
      el.style.display = (status==='all' || status===s) ? '' : 'none';
    });
  }
</script>
</body>
</html>