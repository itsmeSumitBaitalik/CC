<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CampusConnect | Mentors</title>
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
  @keyframes floatIcon {
    0%,100% { transform: translateY(0) rotate(var(--r,0deg)); }
    50%      { transform: translateY(-7px) rotate(var(--r,0deg)); }
  }
  .float { animation: floatIcon 3s ease-in-out infinite; }

  @keyframes pulse-dot {
    0%,100% { opacity:1; transform:scale(1); }
    50%      { opacity:.4; transform:scale(.8); }
  }
  .pulse { animation: pulse-dot 2s ease-in-out infinite; }

  @keyframes tickerH {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .ticker { display:flex; white-space:nowrap; width:max-content; animation: tickerH 24s linear infinite; }

  .stripe-bg {
    background-image: repeating-linear-gradient(
      -45deg, transparent, transparent 10px,
      rgba(0,0,0,.025) 10px, rgba(0,0,0,.025) 20px);
  }

  .card-lift { transition: transform .15s, box-shadow .15s; }
  .card-lift:hover { transform: translate(-2px,-3px); box-shadow: 6px 7px 0 0 #000; }

  .retro-scroll::-webkit-scrollbar { width:5px; }
  .retro-scroll::-webkit-scrollbar-track { background:#F5A623; border-left:2px solid #000; }
  .retro-scroll::-webkit-scrollbar-thumb { background:#000; }

  /* Kill all blue focus outlines globally */
  *:focus { outline: none !important; box-shadow: none !important; }

  .nav-active { background:#F5A623; border-left:4px solid #000 !important; }

  /* Star rating */
  .star-filled { color: #F5A623; -webkit-text-stroke: 1px #000; }
  .star-empty  { color: #fff; -webkit-text-stroke: 1px #000; }

  /* Skill tag hover */
  .skill-tag { transition: background .1s, color .1s; cursor: default; }
  .skill-tag:hover { background:#000; color:#F5A623; }

  /* Be a Mentor form toggle */
  .form-panel { max-height: 0; overflow: hidden; transition: max-height .4s ease; }
  .form-panel.open { max-height: 800px; }

  /* Filter active */
  .filter-active { background:#000 !important; color:#F5A623 !important; }

  @keyframes slideIn {
    from { opacity:0; transform: translateY(12px); }
    to   { opacity:1; transform: translateY(0); }
  }
  .slide-in { animation: slideIn .3s ease forwards; }
</style>
</head>

<body class="bg-retro-yellow font-display text-black h-screen overflow-hidden">
<div class="flex h-screen w-full overflow-hidden">

  <!-- ══════════════════════════
       SIDEBAR
  ══════════════════════════ -->
  <aside class="w-64 flex-shrink-0 bg-white border-r-3 border-black flex flex-col h-full overflow-hidden stripe-bg">

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
        <span class="text-white font-black uppercase text-xs mx-3">Mentors • Connect • Learn • Grow • Guide • Inspire • Mentors • Connect • Learn • Grow • Guide • Inspire • </span>
        <span class="text-white font-black uppercase text-xs mx-3">Mentors • Connect • Learn • Grow • Guide • Inspire • Mentors • Connect • Learn • Grow • Guide • Inspire • </span>
      </div>
    </div>

    <div class="px-4 pt-4 pb-1 flex-shrink-0">
      <span class="text-xs font-black uppercase tracking-widest text-black/30">Main Menu</span>
    </div>

    <nav class="flex flex-col gap-1 px-3 flex-1 overflow-y-auto retro-scroll min-h-0">
      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-retro-yellow text-xl">grid_view</span>
        </div>
        <span class="font-black uppercase text-sm">Dashboard</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-xl">event</span>
        </div>
        <span class="font-black uppercase text-sm">Events</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-3 border-3 border-transparent hover:border-black hover:bg-retro-yellow hover:shadow-retro-sm transition-all">
        <div class="w-9 h-9 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-xl">chat_bubble</span>
        </div>
        <span class="font-black uppercase text-sm">Chatting</span>
        <div class="ml-auto bg-retro-red border-2 border-black px-1.5 py-0.5 text-xs font-black text-white leading-none">3</div>
      </a>
      <!-- MENTORS — active -->
      <a href="#" class="nav-active flex items-center gap-3 px-3 py-3 border-3 border-black shadow-retro-sm">
        <div class="w-9 h-9 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-xl">person_search</span>
        </div>
        <span class="font-black uppercase text-sm">Mentors</span>
        <div class="ml-auto bg-retro-green border-2 border-black px-1.5 py-0.5 text-xs font-black text-white leading-none">2</div>
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

      <!-- Become a mentor CTA in sidebar -->
      <div class="mt-4 bg-retro-yellow border-3 border-black p-4 shadow-retro relative overflow-hidden">
        <div class="float mb-2" style="--r:-8deg; display:inline-block;">
          <div class="bg-white border-3 border-black p-1.5 w-9 h-9 flex items-center justify-center">
            <span class="material-symbols-outlined text-xl">school</span>
          </div>
        </div>
        <p class="font-black uppercase text-sm leading-tight">Share your knowledge!</p>
        <p class="text-xs font-bold text-black/60 mt-1">Become a mentor and guide juniors.</p>
        <button onclick="openBeMentor()" class="mt-3 w-full bg-black text-retro-yellow border-3 border-black py-2 font-black uppercase text-xs shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          Apply Now →
        </button>
      </div>
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

  <!-- ══════════════════════════
       MAIN CONTENT
  ══════════════════════════ -->
  <main class="flex-1 overflow-y-auto bg-retro-yellow retro-scroll">

    <!-- Topbar -->
    <div class="sticky top-0 z-40 bg-white border-b-3 border-black px-6 flex items-center justify-between" style="min-height:73px;">
      <div>
        <p class="text-xs font-black uppercase tracking-widest text-black/30">Campus Network</p>
        <h1 class="text-2xl font-black uppercase tracking-tighter leading-none">Mentors 🎓</h1>
      </div>
      <button class="relative w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        <span class="material-symbols-outlined text-xl">notifications</span>
        <div class="absolute -top-2 -right-2 w-5 h-5 bg-retro-red border-2 border-black flex items-center justify-center rounded-full">
          <span class="text-white text-xs font-black">7</span>
        </div>
      </button>
    </div>

    <div class="p-5 flex flex-col gap-6">

      <!-- ── HERO STATS BAR ── -->
      <div class="bg-white border-3 border-black shadow-retro grid grid-cols-2 md:grid-cols-4 divide-x-3 divide-black">
        <div class="p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-white text-2xl">groups</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">48</p>
            <p class="text-xs font-black uppercase text-black/40 mt-1">Total Mentors</p>
          </div>
        </div>
        <div class="p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-black text-2xl">wifi</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">12</p>
            <p class="text-xs font-black uppercase text-black/40 mt-1">Online Now</p>
          </div>
        </div>
        <div class="p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-white text-2xl">bookmark_added</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">2</p>
            <p class="text-xs font-black uppercase text-black/40 mt-1">Assigned to Me</p>
          </div>
        </div>
        <div class="p-5 flex items-center gap-4">
          <div class="w-12 h-12 bg-white border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-black text-2xl">star</span>
          </div>
          <div>
            <p class="text-3xl font-black leading-none">4.8</p>
            <p class="text-xs font-black uppercase text-black/40 mt-1">Avg Rating</p>
          </div>
        </div>
      </div>

      <!-- ── MY ASSIGNED MENTORS ── -->
      <div>
        <div class="flex items-center gap-0 mb-4">
          <div class="w-6 h-6 bg-retro-red border-3 border-black shrink-0"></div>
          <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">MY MENTORS</h2>
          <div class="ml-3 bg-retro-red border-3 border-black px-3 py-1 shadow-retro-sm">
            <span class="text-white font-black text-xs uppercase">2 Assigned</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

          <!-- Assigned Mentor 1 — Featured large card -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden">
            <!-- Top colour band with avatar -->
            <div class="bg-retro-green border-b-3 border-black px-6 pt-5 pb-10 relative">
              <div class="absolute top-4 right-4 flex items-center gap-1.5 bg-white border-2 border-black px-2 py-1">
                <div class="w-2 h-2 bg-retro-green rounded-full pulse"></div>
                <span class="font-black text-xs uppercase text-retro-green">Online</span>
              </div>
              <div class="bg-retro-green border-2 border-white/40 px-3 py-1 w-fit">
                <span class="text-white font-black text-xs uppercase">⭐ My Mentor</span>
              </div>
            </div>
            <div class="px-6 pb-6 -mt-8">
              <div class="w-16 h-16 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center shadow-retro mb-3 relative">
                <span class="material-symbols-outlined text-3xl">person</span>
                <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-retro-green border-2 border-black rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined text-white" style="font-size:11px;">check</span>
                </div>
              </div>
              <h3 class="text-2xl font-black uppercase leading-none">Rahul Verma</h3>
              <p class="text-xs font-black text-black/40 uppercase mt-1">4th Year • Computer Science</p>
              <!-- Stars -->
              <div class="flex items-center gap-1 mt-2">
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="text-xs font-black ml-1">5.0 (24 reviews)</span>
              </div>
              <p class="text-sm font-medium text-black/60 mt-2 mb-3">"Helping juniors crack their first internship. React, DSA, and interview prep is my jam."</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">React</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Node.js</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">DSA</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">System Design</span>
              </div>
              <div class="grid grid-cols-3 gap-0 border-3 border-black mb-4">
                <div class="text-center py-2 border-r-3 border-black">
                  <p class="text-lg font-black leading-none">18</p>
                  <p class="text-xs font-bold uppercase text-black/40">Students</p>
                </div>
                <div class="text-center py-2 border-r-3 border-black">
                  <p class="text-lg font-black leading-none">42</p>
                  <p class="text-xs font-bold uppercase text-black/40">Sessions</p>
                </div>
                <div class="text-center py-2">
                  <p class="text-lg font-black leading-none">3mo</p>
                  <p class="text-xs font-bold uppercase text-black/40">With You</p>
                </div>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-retro-green border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Message</button>
                <button class="flex-1 bg-white border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Schedule</button>
              </div>
            </div>
          </div>

          <!-- Assigned Mentor 2 -->
          <div class="bg-white border-3 border-black shadow-retro card-lift overflow-hidden">
            <div class="bg-retro-yellow border-b-3 border-black px-6 pt-5 pb-10 relative">
              <div class="absolute top-4 right-4 flex items-center gap-1.5 bg-white border-2 border-black px-2 py-1">
                <div class="w-2 h-2 bg-black/20 rounded-full"></div>
                <span class="font-black text-xs uppercase text-black/40">Offline</span>
              </div>
              <div class="bg-black border-2 border-black px-3 py-1 w-fit">
                <span class="text-retro-yellow font-black text-xs uppercase">⭐ My Mentor</span>
              </div>
            </div>
            <div class="px-6 pb-6 -mt-8">
              <div class="w-16 h-16 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center shadow-retro mb-3 relative">
                <span class="material-symbols-outlined text-3xl">person</span>
                <div class="absolute -bottom-1 -right-1 w-5 h-5 bg-retro-yellow border-2 border-black rounded-full flex items-center justify-center">
                  <span class="material-symbols-outlined text-black" style="font-size:11px;">check</span>
                </div>
              </div>
              <h3 class="text-2xl font-black uppercase leading-none">Ananya Singh</h3>
              <p class="text-xs font-black text-black/40 uppercase mt-1">Alumni • UI/UX Design</p>
              <div class="flex items-center gap-1 mt-2">
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-filled material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 1;">star</span>
                <span class="star-empty material-symbols-outlined text-lg" style="font-variation-settings:'FILL' 0;">star</span>
                <span class="text-xs font-black ml-1">4.0 (11 reviews)</span>
              </div>
              <p class="text-sm font-medium text-black/60 mt-2 mb-3">"Ex-Flipkart designer. I help students build portfolios that actually get them hired."</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">Figma</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">UI/UX</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Branding</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Portfolio</span>
              </div>
              <div class="grid grid-cols-3 gap-0 border-3 border-black mb-4">
                <div class="text-center py-2 border-r-3 border-black">
                  <p class="text-lg font-black leading-none">9</p>
                  <p class="text-xs font-bold uppercase text-black/40">Students</p>
                </div>
                <div class="text-center py-2 border-r-3 border-black">
                  <p class="text-lg font-black leading-none">17</p>
                  <p class="text-xs font-bold uppercase text-black/40">Sessions</p>
                </div>
                <div class="text-center py-2">
                  <p class="text-lg font-black leading-none">1mo</p>
                  <p class="text-xs font-bold uppercase text-black/40">With You</p>
                </div>
              </div>
              <div class="flex gap-2">
                <button class="flex-1 bg-retro-green border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Message</button>
                <button class="flex-1 bg-white border-3 border-black py-2.5 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Schedule</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- ── ONLINE NOW ── -->
      <div>
        <div class="flex items-center gap-0 mb-4">
          <div class="w-6 h-6 bg-retro-green border-3 border-black shrink-0"></div>
          <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">ONLINE NOW</h2>
          <div class="ml-3 flex items-center gap-1.5 bg-retro-green border-3 border-black px-3 py-1 shadow-retro-sm">
            <div class="w-2 h-2 bg-white rounded-full pulse"></div>
            <span class="text-white font-black text-xs uppercase">12 Live</span>
          </div>
        </div>

        <!-- Carousel with arrow buttons -->
        <div class="relative flex items-center gap-3">
          <!-- Left arrow -->
          <button onclick="scrollCarousel(-1)" class="flex-shrink-0 w-10 h-10 bg-white border-3 border-black flex items-center justify-center font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-10">
            <span class="material-symbols-outlined text-xl">chevron_left</span>
          </button>

          <!-- Scrollable strip — no scrollbar -->
          <div id="online-carousel" class="flex gap-4 overflow-x-auto flex-1" style="scrollbar-width:none; -ms-overflow-style:none;">
            <style>#online-carousel::-webkit-scrollbar{display:none;}</style>
          <!-- Online mentor mini cards -->
          <div class="flex-shrink-0 w-44 bg-white border-3 border-black shadow-retro card-lift p-4 flex flex-col items-center text-center gap-2">
            <div class="relative">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">person</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
            </div>
            <div>
              <p class="font-black uppercase text-xs leading-tight">Rahul Verma</p>
              <p class="text-xs font-bold text-black/40">CS • 4th Yr</p>
            </div>
            <div class="flex flex-wrap gap-1 justify-center">
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">React</span>
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">DSA</span>
            </div>
            <button class="w-full bg-retro-green border-3 border-black py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Chat Now</button>
          </div>

          <div class="flex-shrink-0 w-44 bg-white border-3 border-black shadow-retro card-lift p-4 flex flex-col items-center text-center gap-2">
            <div class="relative">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">person</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
            </div>
            <div>
              <p class="font-black uppercase text-xs leading-tight">Vikram Shah</p>
              <p class="text-xs font-bold text-black/40">ECE • Faculty</p>
            </div>
            <div class="flex flex-wrap gap-1 justify-center">
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">IoT</span>
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Python</span>
            </div>
            <button class="w-full bg-retro-green border-3 border-black py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Chat Now</button>
          </div>

          <div class="flex-shrink-0 w-44 bg-white border-3 border-black shadow-retro card-lift p-4 flex flex-col items-center text-center gap-2">
            <div class="relative">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">person</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
            </div>
            <div>
              <p class="font-black uppercase text-xs leading-tight">Priya Nair</p>
              <p class="text-xs font-bold text-black/40">MBA • Alumni</p>
            </div>
            <div class="flex flex-wrap gap-1 justify-center">
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Finance</span>
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Excel</span>
            </div>
            <button class="w-full bg-retro-green border-3 border-black py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Chat Now</button>
          </div>

          <div class="flex-shrink-0 w-44 bg-white border-3 border-black shadow-retro card-lift p-4 flex flex-col items-center text-center gap-2">
            <div class="relative">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">person</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
            </div>
            <div>
              <p class="font-black uppercase text-xs leading-tight">Arjun Das</p>
              <p class="text-xs font-bold text-black/40">CS • 3rd Yr</p>
            </div>
            <div class="flex flex-wrap gap-1 justify-center">
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">ML</span>
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">PyTorch</span>
            </div>
            <button class="w-full bg-retro-green border-3 border-black py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Chat Now</button>
          </div>

          <div class="flex-shrink-0 w-44 bg-white border-3 border-black shadow-retro card-lift p-4 flex flex-col items-center text-center gap-2">
            <div class="relative">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">person</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
            </div>
            <div>
              <p class="font-black uppercase text-xs leading-tight">Sneha Reddy</p>
              <p class="text-xs font-bold text-black/40">Design • Alumni</p>
            </div>
            <div class="flex flex-wrap gap-1 justify-center">
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">UI</span>
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">Motion</span>
            </div>
            <button class="w-full bg-retro-green border-3 border-black py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Chat Now</button>
          </div>

          <div class="flex-shrink-0 w-44 bg-white border-3 border-black shadow-retro card-lift p-4 flex flex-col items-center text-center gap-2">
            <div class="relative">
              <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                <span class="material-symbols-outlined text-3xl">person</span>
              </div>
              <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
            </div>
            <div>
              <p class="font-black uppercase text-xs leading-tight">Karan Mehta</p>
              <p class="text-xs font-bold text-black/40">ECE • 4th Yr</p>
            </div>
            <div class="flex flex-wrap gap-1 justify-center">
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">VLSI</span>
              <span class="border border-black px-1.5 py-0.5 text-xs font-bold">MATLAB</span>
            </div>
            <button class="w-full bg-retro-green border-3 border-black py-1.5 font-black uppercase text-xs shadow-retro-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all text-white">Chat Now</button>
          </div>
          </div><!-- end carousel strip -->

          <!-- Right arrow -->
          <button onclick="scrollCarousel(1)" class="flex-shrink-0 w-10 h-10 bg-white border-3 border-black flex items-center justify-center font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all z-10">
            <span class="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div><!-- end relative wrapper -->
      </div>

      <!-- ── ALL MENTORS — Search + Filter + Grid ── -->
      <div>
        <!-- Search bar — sits prominently above the section -->
        <div class="bg-white border-3 border-black shadow-retro flex items-center gap-0 mb-4 overflow-hidden">
          <div class="bg-retro-yellow border-r-3 border-black px-5 py-4 flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-black text-2xl">search</span>
          </div>
          <input id="mentor-search" oninput="searchMentors(this.value)"
            class="flex-1 bg-transparent px-4 py-4 font-black uppercase text-base placeholder:text-black/30 outline-none tracking-wide"
            placeholder="Search by name, skill, department..."/>
          <div class="border-l-3 border-black px-5 py-4 flex-shrink-0">
            <span class="text-xs font-black uppercase text-black/40" id="mentor-count">9 Mentors</span>
          </div>
        </div>

        <div class="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div class="flex items-center gap-0">
            <div class="w-6 h-6 bg-retro-yellow border-3 border-black shrink-0"></div>
            <h2 class="text-xl font-black uppercase tracking-tighter bg-white border-3 border-black px-4 py-1.5 shadow-retro">ALL MENTORS</h2>
          </div>
          <!-- Skill filters -->
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-black uppercase text-black/40 mr-1">Filter by</span>
            <button onclick="filterSkill(this,'all')" class="filter-active skill-filter border-3 border-black px-3 py-1 font-black uppercase text-xs bg-white hover:bg-retro-yellow transition-all">All</button>
            <button onclick="filterSkill(this,'tech')" class="skill-filter border-3 border-black px-3 py-1 font-black uppercase text-xs bg-white hover:bg-retro-yellow transition-all">Tech</button>
            <button onclick="filterSkill(this,'design')" class="skill-filter border-3 border-black px-3 py-1 font-black uppercase text-xs bg-white hover:bg-retro-yellow transition-all">Design</button>
            <button onclick="filterSkill(this,'finance')" class="skill-filter border-3 border-black px-3 py-1 font-black uppercase text-xs bg-white hover:bg-retro-yellow transition-all">Finance</button>
            <button onclick="filterSkill(this,'research')" class="skill-filter border-3 border-black px-3 py-1 font-black uppercase text-xs bg-white hover:bg-retro-yellow transition-all">Research</button>
          </div>
        </div>

        <!-- Mentor grid -->
        <div id="mentor-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

          <!-- Card template — all have same structure, varied color accents -->
          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="tech" data-name="rahul verma">
            <div class="bg-retro-green h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Rahul Verma</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">4th Year • CS</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">5.0</span>
                  </div>
                </div>
                <div class="bg-retro-red border-2 border-black px-2 py-0.5 flex-shrink-0">
                  <span class="text-white font-black text-xs">MY MENTOR</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">React</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Node.js</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">DSA</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">Helping juniors crack their first internship through React, DSA and interview prep.</p>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Message →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="design" data-name="ananya singh">
            <div class="bg-retro-yellow h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-black/20 border-2 border-black rounded-full"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Ananya Singh</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">Alumni • Design</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-empty material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 0;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.0</span>
                  </div>
                </div>
                <div class="bg-retro-red border-2 border-black px-2 py-0.5 flex-shrink-0">
                  <span class="text-white font-black text-xs">MY MENTOR</span>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">Figma</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">UI/UX</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Portfolio</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">Ex-Flipkart designer helping students build portfolios that get them hired.</p>
              <button class="w-full bg-retro-green border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-white">Message →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="tech research" data-name="vikram shah">
            <div class="bg-retro-red h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Vikram Shah</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">Faculty • ECE</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.8</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">IoT</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Python</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Research</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">Faculty mentor guiding students in IoT, embedded systems and research papers.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="finance" data-name="priya nair">
            <div class="bg-retro-yellow h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Priya Nair</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">MBA • Alumni</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-empty material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 0;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.3</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">Finance</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Excel</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Investment</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">MBA alumni helping students navigate finance, internships and case competitions.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="tech" data-name="arjun das">
            <div class="bg-retro-green h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Arjun Das</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">3rd Year • CS</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-empty material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 0;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.5</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">ML</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">PyTorch</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">NLP</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">ML researcher helping students break into AI/ML with hands-on projects.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="design" data-name="sneha reddy">
            <div class="bg-retro-red h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Sneha Reddy</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">Alumni • Design</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.9</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">UI</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Motion</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Branding</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">Motion designer and brand strategist. Helping design students find their voice.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="research finance" data-name="dr meena iyer">
            <div class="bg-retro-yellow h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-black/20 border-2 border-black rounded-full"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Dr. Meena Iyer</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">Faculty • Economics</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-empty material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 0;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.6</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">Research</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Economics</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Policy</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">Economics faculty guiding research papers, case studies and policy analysis.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="tech" data-name="karan mehta">
            <div class="bg-retro-red h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-retro-green border-2 border-black rounded-full pulse"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Karan Mehta</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">4th Year • ECE</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-empty material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 0;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.2</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">VLSI</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">MATLAB</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Embedded</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">ECE senior helping juniors with VLSI design, embedded systems and GATE prep.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

          <div class="mentor-card bg-white border-3 border-black shadow-retro card-lift overflow-hidden" data-skills="design tech" data-name="tanya bose">
            <div class="bg-retro-green h-2 border-b-3 border-black"></div>
            <div class="p-5">
              <div class="flex items-start gap-4 mb-3">
                <div class="relative flex-shrink-0">
                  <div class="w-14 h-14 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center">
                    <span class="material-symbols-outlined text-2xl">person</span>
                  </div>
                  <div class="absolute -bottom-1 -right-1 w-4 h-4 bg-black/20 border-2 border-black rounded-full"></div>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-black uppercase text-base leading-none">Tanya Bose</h3>
                  <p class="text-xs font-bold text-black/40 uppercase mt-0.5">Alumni • Product</p>
                  <div class="flex items-center gap-0.5 mt-1">
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="star-filled material-symbols-outlined text-sm" style="font-variation-settings:'FILL' 1;">star</span>
                    <span class="text-xs font-black ml-1 text-black/50">4.7</span>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-3">
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black bg-retro-yellow">Product</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">Strategy</span>
                <span class="skill-tag border-2 border-black px-2 py-0.5 text-xs font-black">PM</span>
              </div>
              <p class="text-sm font-medium text-black/60 mb-4 leading-snug">Ex-Razorpay PM. Helping students break into product management careers.</p>
              <button class="w-full bg-white border-3 border-black py-2 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Connect →</button>
            </div>
          </div>

        </div>

        <!-- No results state -->
        <div id="no-results" class="hidden text-center py-16">
          <div class="w-16 h-16 bg-white border-3 border-black flex items-center justify-center mx-auto mb-4 shadow-retro">
            <span class="material-symbols-outlined text-4xl">search_off</span>
          </div>
          <p class="font-black uppercase text-xl">No Mentors Found</p>
          <p class="text-sm font-bold text-black/50 mt-1">Try a different search or filter</p>
        </div>
      </div>

      <!-- ── BECOME A MENTOR ── -->
      <div id="be-mentor-section" class="bg-white border-3 border-black shadow-retro overflow-hidden">
        <!-- Header — clickable toggle -->
        <button onclick="toggleBeMentor()" class="w-full flex items-center justify-between px-6 py-5 border-b-3 border-black bg-retro-yellow hover:bg-retro-yellow/80 transition-colors">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-black border-3 border-black flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-retro-yellow text-2xl">school</span>
            </div>
            <div class="text-left">
              <h2 class="text-2xl font-black uppercase tracking-tighter leading-none">Become a Mentor</h2>
              <p class="text-xs font-bold text-black/60 uppercase mt-1">Share your knowledge • Guide juniors • Build your profile</p>
            </div>
          </div>
          <div id="toggle-icon" class="w-10 h-10 bg-black border-3 border-black flex items-center justify-center flex-shrink-0 shadow-retro-sm transition-transform">
            <span class="material-symbols-outlined text-retro-yellow text-xl">expand_more</span>
          </div>
        </button>

        <!-- Perks row -->
        <div class="grid grid-cols-1 md:grid-cols-3 divide-y-3 md:divide-y-0 md:divide-x-3 divide-black border-b-3 border-black">
          <div class="p-5 flex items-center gap-3">
            <div class="w-10 h-10 bg-retro-green border-3 border-black flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-white text-xl">badge</span>
            </div>
            <div>
              <p class="font-black uppercase text-sm">Verified Badge</p>
              <p class="text-xs font-bold text-black/50">Get a mentor badge on your profile</p>
            </div>
          </div>
          <div class="p-5 flex items-center gap-3">
            <div class="w-10 h-10 bg-retro-yellow border-3 border-black flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-black text-xl">trending_up</span>
            </div>
            <div>
              <p class="font-black uppercase text-sm">Build Reputation</p>
              <p class="text-xs font-bold text-black/50">Ratings and reviews boost your campus presence</p>
            </div>
          </div>
          <div class="p-5 flex items-center gap-3">
            <div class="w-10 h-10 bg-retro-red border-3 border-black flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined text-white text-xl">connect_without_contact</span>
            </div>
            <div>
              <p class="font-black uppercase text-sm">Grow Your Network</p>
              <p class="text-xs font-bold text-black/50">Connect with students and faculty alike</p>
            </div>
          </div>
        </div>

        <!-- Form — collapsible -->
        <div id="mentor-form-panel" class="form-panel">
          <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-1">
              <label class="text-xs font-black uppercase tracking-wide">Full Name</label>
              <input class="border-3 border-black px-4 py-2.5 font-bold bg-retro-yellow/30 outline-none focus:bg-retro-yellow transition-colors placeholder:text-black/40 text-sm" placeholder="Your name"/>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-black uppercase tracking-wide">Year / Department</label>
              <input class="border-3 border-black px-4 py-2.5 font-bold bg-retro-yellow/30 outline-none focus:bg-retro-yellow transition-colors placeholder:text-black/40 text-sm" placeholder="e.g. 3rd Year • Computer Science"/>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-black uppercase tracking-wide">Primary Skills</label>
              <input class="border-3 border-black px-4 py-2.5 font-bold bg-retro-yellow/30 outline-none focus:bg-retro-yellow transition-colors placeholder:text-black/40 text-sm" placeholder="React, DSA, Design, etc."/>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs font-black uppercase tracking-wide">Availability</label>
              <select class="border-3 border-black px-4 py-2.5 font-bold bg-retro-yellow/30 outline-none focus:bg-retro-yellow transition-colors text-sm appearance-none">
                <option>Weekdays only</option>
                <option>Weekends only</option>
                <option>Anytime</option>
                <option>By appointment</option>
              </select>
            </div>
            <div class="md:col-span-2 flex flex-col gap-1">
              <label class="text-xs font-black uppercase tracking-wide">Why do you want to mentor?</label>
              <textarea rows="3" class="border-3 border-black px-4 py-2.5 font-bold bg-retro-yellow/30 outline-none focus:bg-retro-yellow transition-colors placeholder:text-black/40 text-sm resize-none" placeholder="Tell juniors what they can expect from sessions with you..."></textarea>
            </div>
            <div class="md:col-span-2 flex gap-4">
              <button class="bg-black text-retro-yellow border-3 border-black px-8 py-3 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Submit Application →</button>
              <button onclick="toggleBeMentor()" class="bg-white border-3 border-black px-8 py-3 font-black uppercase text-sm shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div class="h-4"></div>
    </div>
  </main>
</div>

<script>
  // ── Carousel scroll ────────────────────────────────
  function scrollCarousel(dir) {
    const el = document.getElementById('online-carousel');
    el.scrollBy({ left: dir * 220, behavior: 'smooth' });
  }

  // ── Toggle Be a Mentor form ────────────────────────
  let formOpen = false;
  function toggleBeMentor() {
    formOpen = !formOpen;
    document.getElementById('mentor-form-panel').classList.toggle('open', formOpen);
    const icon = document.querySelector('#toggle-icon span');
    icon.textContent = formOpen ? 'expand_less' : 'expand_more';
  }
  function openBeMentor() {
    if (!formOpen) toggleBeMentor();
    document.getElementById('be-mentor-section').scrollIntoView({ behavior:'smooth' });
  }

  // ── Skill filter ───────────────────────────────────
  function filterSkill(btn, category) {
    document.querySelectorAll('.skill-filter').forEach(b => b.classList.remove('filter-active'));
    btn.classList.add('filter-active');
    applyFilters();
  }

  // ── Search ─────────────────────────────────────────
  function searchMentors(val) { applyFilters(); }

  function applyFilters() {
    const activeFilter = document.querySelector('.skill-filter.filter-active')?.dataset?.category
      || document.querySelector('.skill-filter.filter-active')?.textContent?.trim()?.toLowerCase();
    const search = document.getElementById('mentor-search').value.toLowerCase();
    const cards  = document.querySelectorAll('.mentor-card');
    let visible  = 0;

    cards.forEach(card => {
      const skills = card.dataset.skills || '';
      const name   = card.dataset.name   || '';
      const catMatch = !activeFilter || activeFilter === 'all' || skills.includes(activeFilter);
      const searchMatch = !search || name.includes(search) || skills.includes(search);
      const show = catMatch && searchMatch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    document.getElementById('no-results').classList.toggle('hidden', visible > 0);
    const countEl = document.getElementById('mentor-count');
    if (countEl) countEl.textContent = visible + (visible === 1 ? ' Mentor' : ' Mentors');
  }

  // Wire up filter buttons with data attributes
  document.querySelectorAll('.skill-filter').forEach(btn => {
    btn.dataset.category = btn.textContent.trim().toLowerCase();
  });
</script>
</body>
</html>