<!DOCTYPE html>
<html class="light" lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CampusConnect | Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "retro-yellow": "#F5A623",
          "retro-red": "#E05C3A",
          "retro-green": "#4CAF50",
        },
        fontFamily: { "display": ["Space Grotesk", "sans-serif"] },
        borderWidth: { '3': '3px' },
        boxShadow: {
          'retro': '4px 4px 0px 0px #000',
          'retro-lg': '8px 8px 0px 0px #000',
          'retro-sm': '2px 2px 0px 0px #000',
        },
        borderRadius: {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "9999px"
        },
      },
    },
  }
</script>
<style>
  /* Float animation */
  @keyframes floatIcon {
    0%   { transform: translateY(0px) rotate(var(--rotation)); }
    50%  { transform: translateY(-8px) rotate(var(--rotation)); }
    100% { transform: translateY(0px) rotate(var(--rotation)); }
  }
  .floating-icon-box { animation: floatIcon 3s ease-in-out infinite; }

  /* Pulse dot */
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.5; transform: scale(0.85); }
  }
  .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

  /* Scrollbar */
  .events-scroll::-webkit-scrollbar { width: 5px; }
  .events-scroll::-webkit-scrollbar-track { background: #F5A623; border-left: 2px solid #000; }
  .events-scroll::-webkit-scrollbar-thumb { background: #000; }

  /* Sidebar diagonal stripe */
  .stripe-bg {
    background-image: repeating-linear-gradient(
      -45deg, transparent, transparent 10px,
      rgba(0,0,0,0.025) 10px, rgba(0,0,0,0.025) 20px
    );
  }

  /* Active nav */
  .nav-active { background: #F5A623; border-left: 4px solid #000 !important; }
  .nav-active .nav-icon { background: #000 !important; }
  .nav-active .nav-icon span { color: #F5A623 !important; }

  /* Ticker tape */
  @keyframes tickerH {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker-content { animation: tickerH 22s linear infinite; display: flex; white-space: nowrap; width: max-content; }

  /* Progress bar anim */
  @keyframes growBar {
    from { width: 0; }
    to   { width: var(--target-w); }
  }
  .progress-bar { animation: growBar 1.2s ease-out forwards; }

  /* Card hover lift */
  .card-hover { transition: transform 0.15s ease, box-shadow 0.15s ease; }
  .card-hover:hover { transform: translate(-2px, -3px); box-shadow: 6px 7px 0px 0px #000; }
</style>
</head>

<body class="bg-retro-yellow font-display text-black selection:bg-black selection:text-white overflow-hidden h-screen">
<div class="flex h-screen w-full overflow-hidden">

  <!-- ══════════════════════════════════════
       SIDEBAR
  ═══════════════════════════════════════ -->
  <aside class="w-64 flex-shrink-0 bg-white border-r-3 border-black flex flex-col h-full overflow-hidden stripe-bg relative">

    <!-- Logo — fills topbar height, full bleed yellow block -->
    <div class="border-b-3 border-black bg-retro-yellow flex items-center justify-between px-5 gap-3 flex-shrink-0" style="min-height: 73px;">
      <!-- Icon -->
      <div class="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm">
        <span class="material-symbols-outlined text-retro-yellow text-2xl">hub</span>
      </div>
      <!-- Name -->
      <div class="flex-1">
        <span class="font-black uppercase tracking-tighter text-lg leading-none block text-black">Campus<span class="text-white bg-black px-1">Connect</span></span>
        <span class="text-xs font-black text-black/50 uppercase tracking-widest">Student Hub</span>
      </div>
      <!-- Decorative dot -->
      <div class="w-3 h-3 bg-black border-2 border-black rounded-full flex-shrink-0 pulse-dot"></div>
    </div>

    <!-- Ticker tape inside sidebar -->
    <div class="border-b-3 border-black overflow-hidden bg-retro-green py-1.5">
      <div class="ticker-content">
        <span class="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
        <span class="text-white font-black uppercase text-xs mx-3">Events • Mentors • Chat • Community • Events • Mentors • Chat • Community • </span>
      </div>
    </div>

    <!-- Nav label -->
    <div class="px-4 pt-4 pb-1">
      <span class="text-xs font-black uppercase tracking-widest text-black/30">Main Menu</span>
    </div>

    <!-- Nav items -->
    <nav class="flex flex-col gap-1 px-3 flex-1 overflow-y-auto">

      <a href="#" class="nav-active flex items-center gap-3 px-3 py-3 border-3 border-black shadow-retro-sm group">
        <div class="nav-icon w-9 h-9 bg-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-retro-yellow text-xl">grid_view</span>
        </div>
        <span class="font-black uppercase text-sm">Dashboard</span>
        <div class="ml-auto w-2 h-2 bg-retro-green rounded-full border-2 border-black pulse-dot"></div>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm group transition-all">
        <div class="nav-icon w-9 h-9 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-xl">event</span>
        </div>
        <span class="font-black uppercase text-sm">Events</span>
        <div class="ml-auto bg-retro-red border-2 border-black px-1.5 py-0.5 text-xs font-black text-white leading-none">4</div>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm group transition-all">
        <div class="nav-icon w-9 h-9 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-xl">chat_bubble</span>
        </div>
        <span class="font-black uppercase text-sm">Chatting</span>
        <div class="ml-auto bg-retro-red border-2 border-black px-1.5 py-0.5 text-xs font-black text-white leading-none">3</div>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm group transition-all">
        <div class="nav-icon w-9 h-9 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">person_search</span>
        </div>
        <span class="font-black uppercase text-sm">Mentors</span>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm group transition-all">
        <div class="nav-icon w-9 h-9 bg-white border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">groups</span>
        </div>
        <span class="font-black uppercase text-sm">Community</span>
      </a>

      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm group transition-all">
        <div class="nav-icon w-9 h-9 bg-white border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">settings</span>
        </div>
        <span class="font-black uppercase text-sm">Settings</span>
      </a>

      <!-- Retro decorative block -->
      <div class="mt-4 border-3 border-black bg-retro-yellow p-3 shadow-retro">
        <p class="text-xs font-black uppercase text-black/70 mb-2">📅 Next Event In</p>
        <p class="text-2xl font-black leading-none">02:14:33</p>
        <p class="text-xs font-bold uppercase text-black/60 mt-1">Tech Fest 2025</p>
        <div class="mt-2 h-2 bg-white border-2 border-black w-full">
          <div class="h-full bg-retro-red progress-bar" style="--target-w: 72%; width: 72%;"></div>
        </div>
      </div>

    </nav>

    <!-- Profile card -->
    <div class="border-t-3 border-black p-3 bg-white">
      <div class="bg-retro-yellow border-3 border-black p-3 shadow-retro">
        <div class="flex items-center gap-3">
          <div class="relative flex-shrink-0">
            <div class="w-11 h-11 rounded-full border-3 border-black bg-white flex items-center justify-center shadow-retro-sm">
              <span class="material-symbols-outlined text-2xl">person</span>
            </div>
            <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse-dot"></div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-black uppercase text-sm leading-none">Jackie Chen</p>
            <p class="text-xs font-bold text-black/60 mt-0.5">2nd Year • CS</p>
          </div>
          <button class="w-8 h-8 bg-white border-3 border-black flex items-center justify-center shadow-retro-sm hover:bg-black hover:text-white transition-colors flex-shrink-0">
            <span class="material-symbols-outlined text-lg">settings</span>
          </button>
        </div>
        <!-- XP bar -->
        <div class="mt-3">
          <div class="flex justify-between mb-1">
            <span class="text-xs font-black uppercase">Campus Rep</span>
            <span class="text-xs font-black">72 XP</span>
          </div>
          <div class="h-2.5 bg-white border-2 border-black w-full">
            <div class="h-full bg-retro-green progress-bar" style="--target-w: 72%; width: 72%;"></div>
          </div>
        </div>
      </div>
    </div>

  </aside>

  <!-- ══════════════════════════════════════
       MAIN CONTENT
  ═══════════════════════════════════════ -->
  <main class="flex-1 overflow-y-auto bg-retro-yellow">

    <!-- Topbar -->
    <div class="sticky top-0 z-40 bg-white border-b-3 border-black px-6 flex items-center justify-between" style="min-height: 73px;">
      <div>
        <p class="text-xs font-black uppercase tracking-widest text-black/30">Dashboard</p>
        <h1 class="text-2xl font-black uppercase tracking-tighter leading-none">Good Morning, Jackie 👋</h1>
      </div>

      <!-- Notification only -->
      <button class="relative w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        <span class="material-symbols-outlined text-xl">notifications</span>
        <div class="absolute -top-2 -right-2 w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center rounded-full">
          <span class="text-white text-xs font-black">7</span>
        </div>
      </button>
    </div>

    <!-- Content grid -->
    <div class="p-5 flex flex-col gap-5">

      <!-- ── ROW 1: STATS ── -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div class="bg-white border-3 border-black p-4 shadow-retro card-hover flex gap-4 items-center">
          <div class="w-12 h-12 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-white text-2xl">event</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">4</p>
            <p class="text-xs font-black uppercase tracking-wide text-black/40 mt-1">Events Joined</p>
          </div>
        </div>

        <div class="bg-white border-3 border-black p-4 shadow-retro card-hover flex gap-4 items-center">
          <div class="w-12 h-12 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-white text-2xl">people</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">12</p>
            <p class="text-xs font-black uppercase tracking-wide text-black/40 mt-1">Friends</p>
          </div>
        </div>

        <div class="bg-white border-3 border-black p-4 shadow-retro card-hover flex gap-4 items-center">
          <div class="w-12 h-12 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-black text-2xl">groups</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">3</p>
            <p class="text-xs font-black uppercase tracking-wide text-black/40 mt-1">Communities</p>
          </div>
        </div>

        <div class="bg-white border-3 border-black p-4 shadow-retro card-hover flex gap-4 items-center">
          <div class="w-12 h-12 bg-white border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-black text-2xl">person_search</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">2</p>
            <p class="text-xs font-black uppercase tracking-wide text-black/40 mt-1">Mentors</p>
          </div>
        </div>

      </div>

      <!-- ── ROW 2: EVENTS + RIGHT PANEL ── -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">

        <!-- EVENTS + COMMUNITIES stacked left (fills gap) -->
        <div class="lg:col-span-2 flex flex-col gap-5">

          <!-- Events header -->
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-0">
              <div class="w-6 h-6 bg-retro-green border-3 border-black shrink-0"></div>
              <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">UPCOMING EVENTS</h2>
            </div>
            <button class="bg-white border-3 border-black px-3 py-1.5 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">View All →</button>
          </div>

          <!-- Events scrollable -->
          <div class="events-scroll flex flex-col gap-3 overflow-y-auto pr-1" style="max-height: 340px;">

            <!-- Card 1 -->
            <div class="bg-white border-3 border-black shadow-retro card-hover flex overflow-hidden flex-shrink-0">
              <div class="bg-retro-red w-2 flex-shrink-0"></div>
              <div class="bg-retro-red flex flex-col items-center justify-center px-3 py-4 flex-shrink-0 border-r-3 border-black">
                <span class="text-white font-black text-2xl leading-none">15</span>
                <span class="text-white font-black text-xs uppercase">MAR</span>
              </div>
              <div class="p-4 flex-1">
                <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span class="bg-retro-red border-2 border-black px-2 py-0.5 text-white font-black uppercase text-xs">TODAY</span>
                  <span class="border-2 border-black px-2 py-0.5 font-black uppercase text-xs">HACKATHON</span>
                </div>
                <h3 class="text-lg font-black uppercase leading-tight">Tech Fest 2025</h3>
                <div class="flex gap-4 text-xs font-bold text-black/50 mt-1.5 flex-wrap">
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Main Auditorium</span>
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>10:00 AM</span>
                </div>
              </div>
              <div class="flex items-center px-4 flex-shrink-0">
                <button class="bg-retro-green border-3 border-black px-3 py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white border-3 border-black shadow-retro card-hover flex overflow-hidden flex-shrink-0">
              <div class="bg-retro-green w-2 flex-shrink-0"></div>
              <div class="bg-retro-green flex flex-col items-center justify-center px-3 py-4 flex-shrink-0 border-r-3 border-black">
                <span class="text-white font-black text-2xl leading-none">16</span>
                <span class="text-white font-black text-xs uppercase">MAR</span>
              </div>
              <div class="p-4 flex-1">
                <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span class="bg-retro-green border-2 border-black px-2 py-0.5 text-white font-black uppercase text-xs">TOMORROW</span>
                  <span class="border-2 border-black px-2 py-0.5 font-black uppercase text-xs">CULTURAL</span>
                </div>
                <h3 class="text-lg font-black uppercase leading-tight">Open Mic Night</h3>
                <div class="flex gap-4 text-xs font-bold text-black/50 mt-1.5 flex-wrap">
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Campus Cafe</span>
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>06:00 PM</span>
                </div>
              </div>
              <div class="flex items-center px-4 flex-shrink-0">
                <button class="bg-retro-green border-3 border-black px-3 py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white border-3 border-black shadow-retro card-hover flex overflow-hidden flex-shrink-0">
              <div class="bg-retro-yellow w-2 flex-shrink-0"></div>
              <div class="bg-retro-yellow flex flex-col items-center justify-center px-3 py-4 flex-shrink-0 border-r-3 border-black">
                <span class="text-black font-black text-2xl leading-none">18</span>
                <span class="text-black font-black text-xs uppercase">MAR</span>
              </div>
              <div class="p-4 flex-1">
                <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span class="bg-retro-yellow border-2 border-black px-2 py-0.5 text-black font-black uppercase text-xs">THIS WEEK</span>
                  <span class="border-2 border-black px-2 py-0.5 font-black uppercase text-xs">WORKSHOP</span>
                </div>
                <h3 class="text-lg font-black uppercase leading-tight">Placement Prep Workshop</h3>
                <div class="flex gap-4 text-xs font-bold text-black/50 mt-1.5 flex-wrap">
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Room 204, Block C</span>
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>02:00 PM</span>
                </div>
              </div>
              <div class="flex items-center px-4 flex-shrink-0">
                <button class="bg-retro-green border-3 border-black px-3 py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="bg-white border-3 border-black shadow-retro card-hover flex overflow-hidden flex-shrink-0">
              <div class="bg-white w-2 flex-shrink-0 border-r-0"></div>
              <div class="bg-white flex flex-col items-center justify-center px-3 py-4 flex-shrink-0 border-r-3 border-black">
                <span class="text-black font-black text-2xl leading-none">22</span>
                <span class="text-black font-black text-xs uppercase">MAR</span>
              </div>
              <div class="p-4 flex-1">
                <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span class="border-2 border-black px-2 py-0.5 font-black uppercase text-xs">UPCOMING</span>
                  <span class="border-2 border-black px-2 py-0.5 font-black uppercase text-xs">HACKATHON</span>
                </div>
                <h3 class="text-lg font-black uppercase leading-tight">Inter-College Hackathon</h3>
                <div class="flex gap-4 text-xs font-bold text-black/50 mt-1.5 flex-wrap">
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span>Innovation Hub</span>
                  <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span>09:00 AM</span>
                </div>
              </div>
              <div class="flex items-center px-4 flex-shrink-0">
                <button class="bg-retro-green border-3 border-black px-3 py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Register →</button>
              </div>
            </div>

          </div>

          <!-- ── COMMUNITIES (fills the gap) ── -->
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-0">
                <div class="w-6 h-6 bg-retro-yellow border-3 border-black shrink-0"></div>
                <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">MY COMMUNITIES</h2>
              </div>
              <button class="bg-white border-3 border-black px-3 py-1.5 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Explore →</button>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">

              <div class="bg-white border-3 border-black shadow-retro card-hover p-4 flex items-center gap-3">
                <div class="w-12 h-12 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-white text-xl">code</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-black uppercase text-sm truncate">Coding Club</p>
                  <p class="text-xs font-bold text-black/40 uppercase">234 members</p>
                </div>
                <div class="flex flex-col items-end gap-1.5">
                  <span class="bg-retro-green border-2 border-black px-1.5 py-0.5 text-white font-black text-xs">●</span>
                  <button class="border-2 border-black px-2 py-0.5 font-black text-xs uppercase hover:bg-black hover:text-white transition-colors">View</button>
                </div>
              </div>

              <div class="bg-white border-3 border-black shadow-retro card-hover p-4 flex items-center gap-3">
                <div class="w-12 h-12 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-white text-xl">music_note</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-black uppercase text-sm truncate">Music Society</p>
                  <p class="text-xs font-bold text-black/40 uppercase">189 members</p>
                </div>
                <div class="flex flex-col items-end gap-1.5">
                  <span class="bg-retro-green border-2 border-black px-1.5 py-0.5 text-white font-black text-xs">●</span>
                  <button class="border-2 border-black px-2 py-0.5 font-black text-xs uppercase hover:bg-black hover:text-white transition-colors">View</button>
                </div>
              </div>

              <div class="bg-white border-3 border-black shadow-retro card-hover p-4 flex items-center gap-3">
                <div class="w-12 h-12 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-black text-xl">science</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-black uppercase text-sm truncate">Science Club</p>
                  <p class="text-xs font-bold text-black/40 uppercase">156 members</p>
                </div>
                <div class="flex flex-col items-end gap-1.5">
                  <span class="bg-retro-green border-2 border-black px-1.5 py-0.5 text-white font-black text-xs">●</span>
                  <button class="border-2 border-black px-2 py-0.5 font-black text-xs uppercase hover:bg-black hover:text-white transition-colors">View</button>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- RIGHT COLUMN -->
        <div class="flex flex-col gap-5">

          <!-- Profile card -->
          <div class="bg-white border-3 border-black shadow-retro overflow-hidden">
            <div class="bg-retro-yellow border-b-3 border-black px-5 pt-4 pb-8 relative">
              <div class="absolute top-3 right-3 floating-icon-box" style="--rotation: 10deg; animation-delay: 0.4s;">
                <div class="bg-white border-3 border-black p-1.5 shadow-retro-sm">
                  <span class="material-symbols-outlined text-black text-base">star</span>
                </div>
              </div>
              <p class="text-xs font-black uppercase text-black/50">Your Profile</p>
              <p class="font-black uppercase text-sm">Jackie Chen</p>
            </div>
            <div class="px-5 pb-5 -mt-6">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-white flex items-center justify-center shadow-retro mb-3 relative">
                <span class="material-symbols-outlined text-3xl">person</span>
                <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse-dot"></div>
              </div>
              <p class="text-xs font-bold text-black/50 uppercase">2nd Year • Computer Science</p>
              <p class="text-sm font-medium mt-2 text-black/70 leading-snug">Hackathon enthusiast. Always looking for the next big opportunity.</p>
              <div class="flex flex-wrap gap-1.5 mt-3">
                <span class="border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">GAMING</span>
                <span class="border-2 border-black px-2 py-0.5 text-xs font-black">CODING</span>
                <span class="border-2 border-black px-2 py-0.5 text-xs font-black">MUSIC</span>
              </div>
              <div class="grid grid-cols-3 gap-0 mt-4 border-3 border-black">
                <div class="text-center py-3 border-r-3 border-black">
                  <p class="text-xl font-black leading-none">4</p>
                  <p class="text-xs font-bold uppercase text-black/40 mt-0.5">Events</p>
                </div>
                <div class="text-center py-3 border-r-3 border-black">
                  <p class="text-xl font-black leading-none">12</p>
                  <p class="text-xs font-bold uppercase text-black/40 mt-0.5">Friends</p>
                </div>
                <div class="text-center py-3">
                  <p class="text-xl font-black leading-none">3</p>
                  <p class="text-xs font-bold uppercase text-black/40 mt-0.5">Clubs</p>
                </div>
              </div>
              <button class="w-full mt-3 bg-retro-yellow border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Edit Profile ✏️</button>
            </div>
          </div>

          <!-- Mentors -->
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-0">
              <div class="w-5 h-5 bg-retro-green border-3 border-black shrink-0"></div>
              <h2 class="text-lg font-black uppercase tracking-tighter bg-white border-3 border-black px-3 py-1.5 shadow-retro">TOP MENTORS</h2>
            </div>

            <div class="bg-white border-3 border-black shadow-retro divide-y-3 divide-black">

              <div class="p-3 flex items-center gap-3 hover:bg-retro-yellow/40 transition-colors">
                <div class="w-10 h-10 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-xl">person</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-black uppercase text-sm leading-none">Rahul Verma</p>
                  <p class="text-xs font-bold text-black/40 mt-0.5">Senior • CS</p>
                  <div class="flex gap-1 mt-1">
                    <span class="border border-black px-1.5 py-0.5 text-xs font-bold">React</span>
                    <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Node</span>
                  </div>
                </div>
                <button class="bg-retro-green border-3 border-black px-2 py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white flex-shrink-0">+Connect</button>
              </div>

              <div class="p-3 flex items-center gap-3 hover:bg-retro-yellow/40 transition-colors">
                <div class="w-10 h-10 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-xl">person</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-black uppercase text-sm leading-none">Ananya Singh</p>
                  <p class="text-xs font-bold text-black/40 mt-0.5">Alumni • Design</p>
                  <div class="flex gap-1 mt-1">
                    <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Figma</span>
                    <span class="border border-black px-1.5 py-0.5 text-xs font-bold">UI/UX</span>
                  </div>
                </div>
                <button class="bg-retro-green border-3 border-black px-2 py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white flex-shrink-0">+Connect</button>
              </div>

              <div class="p-3 flex items-center gap-3 hover:bg-retro-yellow/40 transition-colors">
                <div class="w-10 h-10 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-xl">person</span>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-black uppercase text-sm leading-none">Vikram Shah</p>
                  <p class="text-xs font-bold text-black/40 mt-0.5">Faculty • ECE</p>
                  <div class="flex gap-1 mt-1">
                    <span class="border border-black px-1.5 py-0.5 text-xs font-bold">IoT</span>
                    <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Python</span>
                  </div>
                </div>
                <button class="bg-retro-green border-3 border-black px-2 py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white flex-shrink-0">+Connect</button>
              </div>

            </div>
          </div>

          <!-- Announcements -->
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-0">
              <div class="w-5 h-5 bg-retro-red border-3 border-black shrink-0"></div>
              <h2 class="text-lg font-black uppercase tracking-tighter bg-white border-3 border-black px-3 py-1.5 shadow-retro">ANNOUNCEMENTS</h2>
            </div>
            <div class="bg-white border-3 border-black shadow-retro divide-y-3 divide-black">
              <div class="p-3 flex items-start gap-3 hover:bg-retro-yellow/40 transition-colors cursor-pointer">
                <div class="w-2.5 h-2.5 rounded-full bg-retro-green border-2 border-black mt-1.5 flex-shrink-0 pulse-dot"></div>
                <div>
                  <p class="font-black uppercase text-sm leading-tight">Exam Schedule Released</p>
                  <p class="text-xs font-bold text-black/40 mt-0.5">2 hours ago</p>
                </div>
              </div>
              <div class="p-3 flex items-start gap-3 hover:bg-retro-yellow/40 transition-colors cursor-pointer">
                <div class="w-2.5 h-2.5 rounded-full bg-retro-yellow border-2 border-black mt-1.5 flex-shrink-0"></div>
                <div>
                  <p class="font-black uppercase text-sm leading-tight">Library Extended Hours</p>
                  <p class="text-xs font-bold text-black/40 mt-0.5">5 hours ago</p>
                </div>
              </div>
              <div class="p-3 flex items-start gap-3 hover:bg-retro-yellow/40 transition-colors cursor-pointer">
                <div class="w-2.5 h-2.5 rounded-full bg-retro-red border-2 border-black mt-1.5 flex-shrink-0 pulse-dot"></div>
                <div>
                  <p class="font-black uppercase text-sm leading-tight">Hackathon Reg. Closing Soon!</p>
                  <p class="text-xs font-bold text-black/40 mt-0.5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </main>

</div>
</body>
</html>