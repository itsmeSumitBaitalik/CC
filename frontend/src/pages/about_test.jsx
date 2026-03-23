<!DOCTYPE html>
<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CampusConnect | About Us</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary": "#4cae4f",
          "retro-yellow": "#F5A623",
          "retro-red": "#E05C3A",
          "background-light": "#F5A623",
          "background-dark": "#151d15",
        },
        fontFamily: { "display": ["Space Grotesk", "sans-serif"] },
        borderWidth: { '3': '3px' },
        boxShadow: {
          'retro': '4px 4px 0px 0px #000',
          'retro-lg': '8px 8px 0px 0px #000',
          'retro-white': '4px 4px 0px 0px #fff',
          'retro-yellow': '4px 4px 0px 0px #F5A623',
        },
        borderRadius: {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
        },
      },
    },
  }
</script>
<style>
  .marquee-container { overflow: hidden; white-space: nowrap; display: flex; width: 100%; }
  .marquee-wrapper { display: flex; white-space: nowrap; width: max-content; animation: marqueeSlide 18s linear infinite; }
  @keyframes marqueeSlide { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
  @keyframes floatIcon {
    0%   { transform: translateY(0px) rotate(var(--rotation)); }
    50%  { transform: translateY(-10px) rotate(var(--rotation)); }
    100% { transform: translateY(0px) rotate(var(--rotation)); }
  }
  .floating-icon-box { animation: floatIcon 3s ease-in-out infinite; }

  /* Diagonal stripe pattern for hero */
  .stripe-bg {
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 10px,
      rgba(0,0,0,0.04) 10px,
      rgba(0,0,0,0.04) 20px
    );
  }

  /* Timeline line */
  .timeline-line { position: relative; }
  .timeline-line::before {
    content: '';
    position: absolute;
    left: 23px;
    top: 60px;
    bottom: 0;
    width: 3px;
    background: #000;
  }
</style>
</head>

<body class="bg-retro-yellow font-display text-black selection:bg-black selection:text-white">

<!-- ═══ NAVBAR ═══ -->
<nav class="sticky top-0 z-50 w-full" style="background: rgba(245, 166, 35, 0.25); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);">
  <div class="max-w-7xl mx-auto px-6 py-6 flex flex-row items-center justify-between w-full">
    <div class="bg-white border-3 border-black px-8 py-2 shadow-retro">
      <h1 class="text-2xl font-bold tracking-tighter uppercase">CampusConnect</h1>
    </div>
    <div class="flex gap-2 bg-white/30 p-2 border-3 border-black shadow-retro">
      <a class="bg-white border-3 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors" href="#">About Us</a>
      <a class="bg-white border-3 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors" href="#">Home</a>
      <a class="bg-white border-3 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors" href="#">Contact Us</a>
    </div>
    <div class="flex gap-2">
      <button class="bg-[#4CAF50] border-3 border-black px-6 py-2 font-bold shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Login</button>
      <button class="bg-[#E05C3A] border-3 border-black px-6 py-2 font-bold text-white shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">Signup</button>
    </div>
  </div>
</nav>

<!-- ═══ HERO — Black background, inverted feel ═══ -->
<section class="bg-black text-white relative overflow-hidden stripe-bg">
  <div class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">

    <!-- LEFT: Big text -->
    <div class="flex-1 relative">
      <!-- Floating icons in hero -->
      <div class="hidden lg:block absolute -top-8 -left-12 floating-icon-box" style="--rotation: -12deg; animation-delay: 0s;">
        <div class="bg-retro-yellow border-3 border-white p-3 shadow-retro-white">
          <span class="material-symbols-outlined text-3xl text-black">school</span>
        </div>
      </div>
      <div class="hidden lg:block absolute top-20 -right-8 floating-icon-box" style="--rotation: 10deg; animation-delay: 0.6s;">
        <div class="bg-[#4CAF50] border-3 border-white p-3 shadow-retro-white">
          <span class="material-symbols-outlined text-3xl text-white">campaign</span>
        </div>
      </div>

      <div class="inline-block bg-retro-yellow border-3 border-white px-4 py-1 mb-6 shadow-retro-white">
        <span class="text-black font-black uppercase text-sm tracking-widest">Our Story</span>
      </div>
      <h1 class="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter mb-8 text-white">
        Built By <span class="bg-retro-yellow text-black px-4 border-3 border-white inline-block">Students</span> For Students
      </h1>
      <p class="text-xl md:text-2xl font-medium max-w-xl bg-white/10 border-3 border-white/30 p-4 text-white">
        We were frustrated. Lost. Disconnected. So we built the campus platform we always needed.
      </p>
    </div>

    <!-- RIGHT: Big stat blocks -->
    <div class="flex-shrink-0 grid grid-cols-2 gap-4 w-full md:w-auto">
      <div class="bg-retro-yellow border-3 border-white p-6 shadow-retro-white text-center">
        <span class="text-5xl font-black text-black block">2023</span>
        <span class="text-xs font-black uppercase tracking-widest text-black mt-1 block">Founded</span>
      </div>
      <div class="bg-white border-3 border-white p-6 shadow-retro-yellow text-center">
        <span class="text-5xl font-black text-black block">3</span>
        <span class="text-xs font-black uppercase tracking-widest text-black mt-1 block">Founders</span>
      </div>
      <div class="bg-white border-3 border-white p-6 shadow-retro-yellow text-center">
        <span class="text-5xl font-black text-black block">10+</span>
        <span class="text-xs font-black uppercase tracking-widest text-black mt-1 block">Colleges</span>
      </div>
      <div class="bg-[#4CAF50] border-3 border-white p-6 shadow-retro-white text-center">
        <span class="text-5xl font-black text-white block">₹0</span>
        <span class="text-xs font-black uppercase tracking-widest text-white mt-1 block">Always Free</span>
      </div>
    </div>
  </div>

  <!-- Bottom floating icon -->
  <div class="hidden lg:block absolute bottom-8 right-20 floating-icon-box" style="--rotation: -8deg; animation-delay: 1.2s;">
    <div class="bg-[#E05C3A] border-3 border-white p-3 shadow-retro-white">
      <span class="material-symbols-outlined text-3xl text-white">rocket_launch</span>
    </div>
  </div>
</section>

<!-- ═══ MARQUEE ═══ -->
<div class="bg-retro-yellow py-4 border-y-3 border-black marquee-container">
  <div class="marquee-wrapper">
    <span class="text-black text-2xl font-black uppercase mx-4">Our Story • What We Believe • Meet The Team • Student First • Open & Free • Privacy Is Power • Radical Inclusion • Born In 2023 • Our Story • What We Believe • Meet The Team • Student First • Open & Free • Privacy Is Power • Radical Inclusion • Born In 2023 • </span>
    <span class="text-black text-2xl font-black uppercase mx-4">Our Story • What We Believe • Meet The Team • Student First • Open & Free • Privacy Is Power • Radical Inclusion • Born In 2023 • Our Story • What We Believe • Meet The Team • Student First • Open & Free • Privacy Is Power • Radical Inclusion • Born In 2023 • </span>
  </div>
</div>

<!-- ═══ OUR STORY — Timeline layout ═══ -->
<section class="max-w-6xl mx-auto px-6 py-16 relative">

  <!-- Floating icons -->
  <div class="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 12deg; animation-delay: 1.6s;">
    <span class="material-symbols-outlined">favorite</span>
  </div>
  <div class="absolute bottom-10 right-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 2.0s;">
    <span class="material-symbols-outlined text-white">history_edu</span>
  </div>

  <div class="mb-12">
    <div class="flex items-center gap-0 mb-4">
      <div class="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
      <h2 class="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">OUR STORY</h2>
    </div>
    <p class="text-2xl font-bold uppercase mt-4 italic">The journey from a dorm room to your campus screen.</p>
  </div>

  <!-- Timeline -->
  <div class="timeline-line flex flex-col gap-0 pl-16 md:pl-0">

    <!-- Timeline item 1 -->
    <div class="flex flex-col md:flex-row gap-8 mb-12 relative">
      <!-- Year bubble -->
      <div class="flex-shrink-0 w-12 h-12 bg-black text-white border-3 border-black flex items-center justify-center font-black text-sm z-10 shadow-retro absolute left-0 md:relative md:left-auto top-0">
        <span>2023</span>
      </div>
      <!-- Content card — full width, horizontal layout -->
      <div class="bg-white border-3 border-black p-8 shadow-retro flex-1 flex flex-col md:flex-row gap-6 items-start">
        <div class="bg-[#E05C3A] w-14 h-14 border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-3xl">bolt</span>
        </div>
        <div>
          <h3 class="text-2xl font-black uppercase mb-2">The Spark</h3>
          <p class="font-medium">Three CS students at VJTI Mumbai missed their college's biggest hackathon because nobody told them about it. That weekend, the idea for CampusConnect was born over terrible hostel coffee.</p>
        </div>
      </div>
    </div>

    <!-- Timeline item 2 -->
    <div class="flex flex-col md:flex-row gap-8 mb-12 relative">
      <div class="flex-shrink-0 w-12 h-12 bg-[#4CAF50] text-black border-3 border-black flex items-center justify-center font-black text-sm z-10 shadow-retro absolute left-0 md:relative md:left-auto top-0">
        <span>2024</span>
      </div>
      <div class="bg-white border-3 border-black p-8 shadow-retro flex-1 flex flex-col md:flex-row gap-6 items-start">
        <div class="bg-[#4CAF50] w-14 h-14 border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-white text-3xl">build</span>
        </div>
        <div>
          <h3 class="text-2xl font-black uppercase mb-2">Building In Public</h3>
          <p class="font-medium">First version launched. Anonymous chat went viral within a week. 200 students signed up from 3 colleges. Mentors started joining on their own. We knew we were onto something.</p>
        </div>
      </div>
    </div>

    <!-- Timeline item 3 -->
    <div class="flex flex-col md:flex-row gap-8 relative">
      <div class="flex-shrink-0 w-12 h-12 bg-retro-yellow border-3 border-black flex items-center justify-center font-black text-sm z-10 shadow-retro absolute left-0 md:relative md:left-auto top-0">
        <span>NOW</span>
      </div>
      <div class="bg-black text-white border-3 border-black p-8 shadow-retro flex-1 flex flex-col md:flex-row gap-6 items-start">
        <div class="bg-retro-yellow w-14 h-14 border-3 border-black flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-black text-3xl">rocket_launch</span>
        </div>
        <div>
          <h3 class="text-2xl font-black uppercase mb-2 text-white">Growing Fast</h3>
          <p class="font-medium text-gray-300">500+ students. 10+ partner colleges. Events, communities, mentors — all live. And we're just getting started. Every day a new student finds their campus tribe through CampusConnect.</p>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══ WHAT WE BELIEVE — Alternating row layout ═══ -->
<section class="bg-black py-16 relative overflow-hidden">

  <!-- Floating icons on black bg -->
  <div class="absolute top-10 left-8 bg-retro-yellow border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 8deg; animation-delay: 2.8s;">
    <span class="material-symbols-outlined text-black">star</span>
  </div>
  <div class="absolute top-10 right-8 bg-white border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -12deg; animation-delay: 3.2s;">
    <span class="material-symbols-outlined">flag</span>
  </div>
  <div class="absolute bottom-10 left-8 bg-[#4CAF50] border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 3.6s;">
    <span class="material-symbols-outlined text-white">volunteer_activism</span>
  </div>
  <div class="absolute bottom-10 right-8 bg-[#E05C3A] border-3 border-white p-2 shadow-retro-white w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 4.0s;">
    <span class="material-symbols-outlined text-white">diversity_3</span>
  </div>

  <div class="max-w-6xl mx-auto px-6">
    <!-- Section label — inverted on black bg -->
    <div class="mb-12">
      <div class="flex items-center gap-0 mb-4">
        <div class="w-8 h-8 bg-retro-yellow border-3 border-white shrink-0"></div>
        <h2 class="text-6xl font-black uppercase tracking-tighter bg-retro-yellow text-black px-8 py-3 border-3 border-white shadow-retro-white">
          WHAT WE BELIEVE
        </h2>
      </div>
      <p class="text-2xl font-bold uppercase mt-4 italic text-white">The core principles that drive every feature we build.</p>
    </div>

    <!-- Alternating wide cards -->
    <div class="flex flex-col gap-6">

      <!-- Row 1: Left heavy -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2 bg-retro-yellow border-3 border-white p-8 shadow-retro-white flex gap-6 items-start group hover:-translate-y-1 transition-transform">
          <div class="bg-black w-16 h-16 border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-white text-3xl">shield</span>
          </div>
          <div>
            <h3 class="text-2xl font-black uppercase mb-3 text-black">Student First, Always</h3>
            <p class="font-medium text-black">Every single decision — from which features to build to how we store data — starts with one question: is this good for the student? Not the advertiser. Not the investor. The student.</p>
          </div>
        </div>
        <div class="bg-white border-3 border-white p-8 shadow-retro-white flex flex-col gap-4 group hover:-translate-y-1 transition-transform">
          <div class="bg-[#E05C3A] w-16 h-16 border-3 border-black flex items-center justify-center">
            <span class="material-symbols-outlined text-white text-3xl">lock_open</span>
          </div>
          <h3 class="text-2xl font-black uppercase text-black">Open & Free</h3>
          <p class="font-medium text-black">No paywalls. No premium tiers. Core features stay free forever.</p>
        </div>
      </div>

      <!-- Row 2: Right heavy -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-[#4CAF50] border-3 border-white p-8 shadow-retro-white flex flex-col gap-4 group hover:-translate-y-1 transition-transform">
          <div class="bg-white w-16 h-16 border-3 border-black flex items-center justify-center">
            <span class="material-symbols-outlined text-black text-3xl">lock</span>
          </div>
          <h3 class="text-2xl font-black uppercase text-white">Privacy Is Power</h3>
          <p class="font-medium text-white">Your data stays yours. Anonymous when you want. Real when you're ready.</p>
        </div>
        <div class="md:col-span-2 bg-white border-3 border-white p-8 shadow-retro-white flex gap-6 items-start group hover:-translate-y-1 transition-transform">
          <div class="bg-black w-16 h-16 border-3 border-black flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-white text-3xl">groups</span>
          </div>
          <div>
            <h3 class="text-2xl font-black uppercase mb-3 text-black">Radical Inclusion</h3>
            <p class="font-medium text-black">CampusConnect is built for every kind of student. The introvert who chats anonymously. The extrovert who leads clubs. The fresher who doesn't know anyone yet. All are welcome here.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ MEET THE TEAM — Retro magazine layout ═══ -->
<section class="max-w-6xl mx-auto px-6 py-16 relative">

  <!-- Floating icons -->
  <div class="absolute top-10 left-4 bg-[#4CAF50] border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 4.4s;">
    <span class="material-symbols-outlined text-white">person</span>
  </div>
  <div class="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 4.8s;">
    <span class="material-symbols-outlined">handshake</span>
  </div>
  <div class="absolute bottom-10 left-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 12deg; animation-delay: 5.2s;">
    <span class="material-symbols-outlined text-white">code</span>
  </div>
  <div class="absolute bottom-10 right-4 bg-white border-3 border-black p-2 shadow-retro -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -10deg; animation-delay: 5.6s;">
    <span class="material-symbols-outlined">brush</span>
  </div>

  <div class="mb-12">
    <div class="flex items-center gap-0 mb-4">
      <div class="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
      <h2 class="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">MEET THE TEAM</h2>
    </div>
    <p class="text-2xl font-bold uppercase mt-4 italic">The humans behind the screens.</p>
  </div>

  <!-- Magazine-style layout: 1 big + 2 small -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

    <!-- Big featured card (left) -->
    <div class="bg-black text-white border-3 border-black p-10 shadow-retro-lg flex flex-col gap-6 relative">
      <div class="absolute -top-4 -right-4 bg-retro-yellow text-black px-4 py-1 font-bold text-sm border-3 border-black shadow-retro">
        ★ FOUNDER
      </div>
      <div class="w-28 h-28 rounded-full border-3 border-white bg-retro-yellow flex items-center justify-center">
        <span class="material-symbols-outlined text-6xl text-black">person</span>
      </div>
      <div>
        <h3 class="text-4xl font-black uppercase text-white">Aryan Mehta</h3>
        <div class="bg-[#4CAF50] border-3 border-white px-4 py-1 w-fit mt-2 shadow-retro-white">
          <span class="text-white font-black uppercase text-sm">Product Lead</span>
        </div>
      </div>
      <p class="text-xl font-bold text-gray-300 italic border-l-4 border-retro-yellow pl-4">
        "I missed 3 hackathons in my first year because I had no idea they existed. CampusConnect is my way of making sure that never happens to another student."
      </p>
      <div class="flex gap-2 flex-wrap mt-2">
        <span class="border-2 border-white px-3 py-1 text-xs font-bold text-white">#HACKATHONS</span>
        <span class="border-2 border-white px-3 py-1 text-xs font-bold text-white">#PRODUCT</span>
        <span class="border-2 border-white px-3 py-1 text-xs font-bold text-white">#TECH</span>
      </div>
    </div>

    <!-- Right column: 2 stacked -->
    <div class="flex flex-col gap-6">

      <div class="bg-white border-3 border-black p-8 shadow-retro flex gap-6 items-start relative group hover:-translate-y-1 transition-transform">
        <div class="absolute -top-4 -right-4 bg-[#E05C3A] text-white px-4 py-1 font-bold text-sm border-3 border-black shadow-retro">
          DESIGN HEAD
        </div>
        <div class="w-20 h-20 rounded-full border-3 border-black bg-retro-yellow flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-4xl">person</span>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-black uppercase">Priya Sharma</h3>
          <p class="font-medium italic text-gray-700">"Good design isn't decoration. It's how CampusConnect feels like home the moment you log in."</p>
          <div class="flex gap-2 flex-wrap">
            <span class="border-2 border-black px-3 py-1 text-xs font-bold">#UI/UX</span>
            <span class="border-2 border-black px-3 py-1 text-xs font-bold">#COMMUNITY</span>
          </div>
        </div>
      </div>

      <div class="bg-retro-yellow border-3 border-black p-8 shadow-retro flex gap-6 items-start relative group hover:-translate-y-1 transition-transform">
        <div class="absolute -top-4 -right-4 bg-black text-white px-4 py-1 font-bold text-sm border-3 border-black shadow-retro">
          ENGINEERING
        </div>
        <div class="w-20 h-20 rounded-full border-3 border-black bg-white flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-4xl">person</span>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-2xl font-black uppercase">Karan Patel</h3>
          <p class="font-medium italic text-gray-800">"Every line of code I write is for the student sitting in a hostel room, trying to find their place on campus."</p>
          <div class="flex gap-2 flex-wrap">
            <span class="border-2 border-black px-3 py-1 text-xs font-bold">#BACKEND</span>
            <span class="border-2 border-black px-3 py-1 text-xs font-bold">#DEVOPS</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ═══ CTA — identical to homepage ═══ -->
<section class="bg-retro-yellow py-12 px-6 relative overflow-hidden border-black max-w-6xl mx-auto">
  <div class="hidden lg:block absolute left-20 top-10 bg-[#E05C3A] border-3 border-black p-4 shadow-retro w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 6.8s;">
    <span class="material-symbols-outlined text-white">bolt</span>
  </div>
  <div class="hidden lg:block absolute right-20 top-10 bg-[#4CAF50] border-3 border-black p-4 shadow-retro w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 7.2s;">
    <span class="material-symbols-outlined text-white">flag</span>
  </div>
  <div class="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2">
    <div class="bg-[#4CAF50] border-3 border-black p-6 shadow-retro floating-icon-box" style="--rotation: -12deg; animation-delay: 7.6s;">
      <span class="material-symbols-outlined text-5xl text-white">rocket_launch</span>
    </div>
  </div>
  <div class="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2">
    <div class="bg-white border-3 border-black p-6 shadow-retro floating-icon-box" style="--rotation: 12deg; animation-delay: 8.0s;">
      <span class="material-symbols-outlined text-5xl text-black">star</span>
    </div>
  </div>
  <div class="max-w-4xl mx-auto bg-white border-3 border-black p-12 shadow-retro relative z-10 flex flex-col items-center text-center">
    <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
      Want To Be Part Of The Story?
    </h2>
    <p class="text-xl font-bold text-gray-800 mb-10 max-w-2xl">
      Join thousands of students already discovering events, mentors, and communities on CampusConnect.
    </p>
    <div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
      <button class="bg-[#4CAF50] border-3 border-black px-10 py-4 text-xl font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">Get Started</button>
      <button class="bg-white border-3 border-black px-10 py-4 text-xl font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">Contact Us</button>
    </div>
  </div>
</section>

<!-- ═══ FOOTER — identical to homepage ═══ -->
<footer class="bg-black text-white py-20 px-6 border-t-4 border-black">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
    <div class="flex flex-col gap-6">
      <div class="bg-white text-black border-3 border-white px-6 py-2 w-fit">
        <h2 class="text-2xl font-bold tracking-tighter uppercase">CampusConnect</h2>
      </div>
      <p class="font-bold text-gray-400">The ultimate platform for modern campus life. Connect, discover, and grow.</p>
    </div>
    <div>
      <h4 class="text-xl font-black uppercase mb-6">Explore</h4>
      <ul class="flex flex-col gap-3 font-bold">
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Upcoming Events</a></li>
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Find Mentors</a></li>
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Join Communities</a></li>
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Anonymous Chat</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-xl font-black uppercase mb-6">Platform</h4>
      <ul class="flex flex-col gap-3 font-bold">
        <li><a class="hover:text-retro-yellow transition-colors" href="#">About Us</a></li>
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Privacy Policy</a></li>
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Terms of Service</a></li>
        <li><a class="hover:text-retro-yellow transition-colors" href="#">Help Center</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-xl font-black uppercase mb-6">Connect</h4>
      <div class="flex flex-wrap gap-3">
        <a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white font-bold" href="#">TW</a>
        <a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white font-bold" href="#">IG</a>
        <a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white font-bold" href="#">LN</a>
        <a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white font-bold" href="#">GH</a>
      </div>
    </div>
  </div>
  <div class="max-w-6xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="text-gray-400 font-bold">© 2025 CampusConnect. All rights reserved.</p>
    <p class="font-bold">Made with ❤️ for Students</p>
  </div>
</footer>

</body></html>