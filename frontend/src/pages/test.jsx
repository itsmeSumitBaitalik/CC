<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>CampusConnect | Retro Campus Life</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
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
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    borderWidth: {
                        '3': '3px',
                    },
                    boxShadow: {
                        'retro': '4px 4px 0px 0px #000',
                        'retro-lg': '8px 8px 0px 0px #000',
                        'retro-white': '4px 4px 0px 0px #fff',
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
        .marquee-container {
            overflow: hidden;
            white-space: nowrap;
        }
        .marquee-content {
            display: inline-block;
            animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>
<style>
@keyframes floatIcon {
  0%   { transform: translateY(0px) rotate(var(--rotation)); }
  50%  { transform: translateY(-10px) rotate(var(--rotation)); }
  100% { transform: translateY(0px) rotate(var(--rotation)); }
}
.floating-icon-box {
    animation: floatIcon 3s ease-in-out infinite;
}
</style></head>




<body class="bg-retro-yellow font-display text-black selection:bg-black selection:text-white">


{/* 
<!-- Top NavBar -->
<nav class="sticky top-0 z-50 w-full" style="background: rgba(245, 166, 35, 0.25); backdrop-filter: blur(30px); -webkit-backdrop-filter: blur(30px);"><div class="max-w-7xl mx-auto px-6 py-6 flex flex-row items-center justify-between w-full">
<div class="bg-white border-3 border-black px-8 py-2 shadow-retro">
<h1 class="text-2xl font-bold tracking-tighter uppercase">CampusConnect</h1>
</div>
<div class="flex gap-2 bg-white/30 p-2 border-3 border-black shadow-retro">
<a class="bg-white border-3 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors" href="#">About Us</a>
<a class="bg-white border-3 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors" href="#">Home</a>
<a class="bg-white border-3 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<div class="flex gap-2">
<button class="bg-[#4CAF50] border-3 border-black px-6 py-2 font-bold shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        Login
    </button>
<button class="bg-[#E05C3A] border-3 border-black px-6 py-2 font-bold text-white shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
        Signup
    </button>
</div>
</div></nav>
 */}


{/* 

<!-- Hero Section -->
<section class="max-w-6xl mx-auto px-6 py-20 flex flex-col items-center text-center">
<div class="relative mb-8">
<h1 class="text-6xl md:text-8xl font-black leading-none uppercase tracking-tighter max-w-4xl mb-8">
                Never Miss What's <span class="bg-white px-4 border-3 border-black">Happening</span> On Campus
            </h1>
<!-- Floating Icons Cluster -->
<div class="hidden lg:block absolute -top-10 -left-20 animate-bounce">
<div class="bg-white border-3 border-black p-4 shadow-retro rotate-[-12deg] floating-icon-box" style="--rotation: -12deg; animation-delay: 0s;">
<span class="material-symbols-outlined text-4xl">school</span>
</div>
</div>
<div class="hidden lg:block absolute top-40 -right-20 animate-pulse">
<div class="bg-[#4CAF50] border-3 border-black p-4 shadow-retro rotate-[15deg] floating-icon-box" style="--rotation: 15deg; animation-delay: 0.4s;">
<span class="material-symbols-outlined text-4xl text-white">coffee</span>
</div>
</div>
<div class="hidden lg:block absolute -bottom-10 left-10 animate-bounce">
<div class="bg-[#E05C3A] border-3 border-black p-4 shadow-retro rotate-[5deg] floating-icon-box" style="--rotation: 5deg; animation-delay: 0.8s;">
<span class="material-symbols-outlined text-4xl text-white">campaign</span>
</div>
</div>
</div>
<p class="text-xl md:text-2xl font-medium max-w-2xl mb-12 bg-white/50 border-3 border-black p-4 inline-block">
            Discover events, find mentors, join communities — all in one place.
        </p>
<div class="flex flex-col sm:flex-row gap-6">
<button class="bg-[#4CAF50] border-3 border-black px-10 py-4 text-xl font-black shadow-retro-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
                GET STARTED
            </button>
<button class="bg-white border-3 border-black px-10 py-4 text-xl font-black shadow-retro-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
                LEARN MORE
            </button>
</div>
</section>

 */}



{/* 
<!-- Marquee Ticker -->
<div class="bg-black py-4 border-y-3 border-black marquee-container"><style>
        .marquee-container {
            overflow: hidden;
            white-space: nowrap;
            display: flex;
            width: 100%;
        }
        .marquee-wrapper {
            display: flex;
            white-space: nowrap;
            width: max-content;
            animation: marqueeSlide 18s linear infinite;
        }
        @keyframes marqueeSlide {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
    </style>
<div class="marquee-wrapper">
<span class="text-retro-yellow text-2xl font-black uppercase mx-4">Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests • Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests • </span>
<span class="text-retro-yellow text-2xl font-black uppercase mx-4">Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests • Hackathons • Concerts • Clubs • Study Groups • Mentors • Friend Requests • </span>
</div></div>
 */}

{/* 
<!-- Features Section -->
<section class="max-w-6xl mx-auto px-6 py-12 relative border-b-3 border-black">
<div class="mb-12">
<div class="flex items-center gap-0 mb-4">
<div class="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
<h2 class="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">
                Features
            </h2>
</div>
<p class="text-2xl font-bold uppercase mt-4 italic">Everything you need to thrive on campus — in one place.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div class="bg-white border-3 border-black rounded-[6px] p-8 shadow-retro flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
<div class="bg-[#4CAF50] w-14 h-14 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-white text-3xl">event</span>
</div>
<h3 class="text-2xl font-black uppercase">Events</h3>
<p class="font-medium">Find the latest happenings across the entire campus ecosystem.</p>
</div>
<div class="bg-white border-3 border-black rounded-[6px] p-8 shadow-retro flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
<div class="bg-retro-yellow w-14 h-14 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-black text-3xl">groups</span>
</div>
<h3 class="text-2xl font-black uppercase">Communities</h3>
<p class="font-medium">Join your tribe and connect with like-minded individuals today.</p>
</div>
<div class="bg-white border-3 border-black rounded-[6px] p-8 shadow-retro flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
<div class="bg-retro-red w-14 h-14 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-white text-3xl">chat_bubble</span>
</div>
<h3 class="text-2xl font-black uppercase">Anonymous Chat</h3>
<p class="font-medium">Speak your mind freely in a safe, moderated anonymous environment.</p>
</div>
<div class="bg-white border-3 border-black rounded-[6px] p-8 shadow-retro flex flex-col gap-4 group hover:-translate-y-2 transition-transform">
<div class="bg-black w-14 h-14 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-white text-3xl">person_search</span>
</div>
<h3 class="text-2xl font-black uppercase">Mentors</h3>
<p class="font-medium">Get expert guidance from seniors and professionals in your field.</p>
</div>
</div>
<div class="absolute top-10 left-4 bg-[#4CAF50] border-3 border-black p-2 shadow-retro -rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -12deg; animation-delay: 1.2s;"><span class="material-symbols-outlined text-white">calendar_today</span></div>
<div class="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 12deg; animation-delay: 1.6s;"><span class="material-symbols-outlined">groups</span></div>
<div class="absolute bottom-10 left-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro -rotate-8 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 2.0s;"><span class="material-symbols-outlined text-white">notifications</span></div>
<div class="absolute bottom-10 right-4 bg-white border-3 border-black p-2 shadow-retro rotate-10 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 2.4s;"><span class="material-symbols-outlined">star</span></div>
</section><div class="bg-black w-full py-9 border-y-3 border-black">
<div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
<div class="flex flex-col items-center border-r-0 md:border-r-2 border-white/30 last:border-r-0">
<span class="text-4xl font-black text-white">500+</span>
<span class="text-xs text-white uppercase font-bold tracking-widest mt-1">Students Connected</span>
</div>
<div class="flex flex-col items-center border-r-0 md:border-r-2 border-white/30 last:border-r-0">
<span class="text-4xl font-black text-white">50+</span>
<span class="text-xs text-white uppercase font-bold tracking-widest mt-1">Campus Events Listed</span>
</div>
<div class="flex flex-col items-center border-r-0 md:border-r-2 border-white/30 last:border-r-0">
<span class="text-4xl font-black text-white">30+</span>
<span class="text-xs text-white uppercase font-bold tracking-widest mt-1">Active Communities</span>
</div>
<div class="flex flex-col items-center last:border-r-0">
<span class="text-4xl font-black text-white">100%</span>
<span class="text-xs text-white uppercase font-bold tracking-widest mt-1">Free To Use</span>
</div>
</div>
</div>
 */}



<!-- Use Cases Section -->
{/* <section class="max-w-6xl mx-auto px-6 py-12 relative">
<div class="mb-12">
<div class="flex items-center gap-0 mb-4">
<div class="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
<h2 class="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">
                USE CASES
            </h2>
</div>
<p class="text-2xl font-bold uppercase mt-4 italic">CampusConnect works for every kind of student.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="bg-white border-3 border-black p-8 shadow-retro flex flex-col gap-6 relative">
<div class="absolute -top-4 -right-4 bg-black text-white px-4 py-1 font-bold text-sm border-3 border-black">
                FOR FRESHERS
            </div>
<div class="bg-[#F5A623] w-16 h-16 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-black text-4xl">person_search</span>
</div>
<h3 class="text-3xl font-black uppercase">Just Joined College?</h3>
<p class="font-medium text-lg text-gray-800">You don't know what's happening around campus. CampusConnect shows you every event, hackathon, and club — so your first year is unforgettable.</p>
</div>
<div class="bg-white border-3 border-black p-8 shadow-retro flex flex-col gap-6 relative">
<div class="absolute -top-4 -right-4 bg-[#4CAF50] text-black px-4 py-1 font-bold text-sm border-3 border-black">
                FOR EVERYONE
            </div>
<div class="bg-[#4CAF50] w-16 h-16 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-white text-4xl">forum</span>
</div>
<h3 class="text-3xl font-black uppercase">Want To Make Friends?</h3>
<p class="font-medium text-lg text-gray-800">Use anonymous chat to connect with strangers who share your interests. Send friend requests, join communities, and build your campus circle.</p>
</div>
<div class="bg-white border-3 border-black p-8 shadow-retro flex flex-col gap-6 relative">
<div class="absolute -top-4 -right-4 bg-[#E05C3A] text-white px-4 py-1 font-bold text-sm border-3 border-black">
                FOR GO-GETTERS
            </div>
<div class="bg-[#E05C3A] w-16 h-16 border-3 border-black flex items-center justify-center">
<span class="material-symbols-outlined text-white text-4xl">stars</span>
</div>
<h3 class="text-3xl font-black uppercase">Looking For Opportunities?</h3>
<p class="font-medium text-lg text-gray-800">Find mentors, join coding clubs, attend workshops, and get notified about placement prep sessions — all before your classmates even hear about them.</p>
</div>
</div>
<div class="absolute top-10 left-4 bg-[#4CAF50] border-3 border-black p-2 shadow-retro rotate-8 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 8deg; animation-delay: 2.8s;"><span class="material-symbols-outlined text-white">rocket_launch</span></div>
<div class="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro -rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -12deg; animation-delay: 3.2s;"><span class="material-symbols-outlined">ads_click</span></div>
<div class="absolute bottom-10 left-4 bg-white border-3 border-black p-2 shadow-retro rotate-10 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 3.6s;"><span class="material-symbols-outlined">lightbulb</span></div>
<div class="absolute bottom-10 right-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro -rotate-8 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 4.0s;"><span class="material-symbols-outlined text-white">emoji_events</span></div>
</section><section class="max-w-6xl mx-auto px-6 py-12 border-y-3 border-black relative bg-retro-yellow">
<div class="mb-12">
<div class="flex items-center gap-0 mb-4">
<div class="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
<h2 class="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">
                HOW IT WORKS
            </h2>
</div>
<p class="text-2xl font-bold uppercase mt-4 italic">Get started in 3 simple steps.</p>
</div>
<div class="relative flex flex-col md:flex-row gap-8">




<!-- Horizontal dashed line (hidden on mobile) -->
<div class="hidden md:block absolute top-1/2 left-0 w-full border-t-4 border-black border-dashed -translate-y-1/2 -z-10"></div>


<!-- Card 1 -->
<div class="flex-1 bg-white border-3 border-black p-8 shadow-retro flex flex-col items-center text-center relative">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-3 border-black">01</div>
<div class="bg-[#4CAF50] w-16 h-16 border-3 border-black flex items-center justify-center mb-6 mt-4">
<span class="material-symbols-outlined text-white text-4xl">person</span>
</div>
<h3 class="text-xl font-black uppercase mb-4">CREATE YOUR PROFILE</h3>
<p class="font-bold">Sign up with your college email. Set your interests, year, and department.</p>
</div>


<!-- Card 2 -->
<div class="flex-1 bg-white border-3 border-black p-8 shadow-retro flex flex-col items-center text-center relative">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-3 border-black">02</div>
<div class="bg-[#E05C3A] w-16 h-16 border-3 border-black flex items-center justify-center mb-6 mt-4">
<span class="material-symbols-outlined text-white text-4xl">explore</span>
</div>
<h3 class="text-xl font-black uppercase mb-4">EXPLORE YOUR CAMPUS</h3>
<p class="font-bold">Discover events, communities, mentors and students who match your vibe.</p>
</div>


<!-- Card 3 -->
<div class="flex-1 bg-white border-3 border-black p-8 shadow-retro flex flex-col items-center text-center relative">
<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-3 border-black">03</div>
<div class="bg-white w-16 h-16 border-3 border-black flex items-center justify-center mb-6 mt-4">
<span class="material-symbols-outlined text-black text-4xl">handshake</span>
</div>
<h3 class="text-xl font-black uppercase mb-4">CONNECT &amp; GROW</h3>
<p class="font-bold">Chat anonymously, join clubs, attend events, find mentors — all in one place.</p>
</div>
</div>
<div class="absolute left-10 bottom-10 bg-[#4CAF50] border-3 border-black p-4 shadow-retro -rotate-12 -z-0 w-14 h-14 flex items-center justify-center floating-icon-box" style="--rotation: -12deg; animation-delay: 4.4s;"><span class="material-symbols-outlined text-white text-3xl">bolt</span></div>
<div class="absolute right-10 top-10 bg-white border-3 border-black p-4 shadow-retro rotate-12 -z-0 w-14 h-14 flex items-center justify-center floating-icon-box" style="--rotation: 12deg; animation-delay: 4.8s;"><span class="material-symbols-outlined text-black text-3xl">arrow_forward</span></div>
</section> */}

{/* 
<!-- Testimonials Section -->
<section class="max-w-6xl mx-auto px-6 py-12 relative">
<div class="mb-12">
<div class="flex items-center gap-0 mb-4">
<div class="w-8 h-8 bg-[#4CAF50] border-3 border-black shrink-0"></div>
<h2 class="text-6xl font-black uppercase tracking-tighter bg-black text-white px-8 py-3 border-3 border-black shadow-retro">
                WHAT STUDENTS SAY
            </h2>
</div>
<p class="text-2xl font-bold uppercase mt-4 italic">Real stories from real students across India.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<div class="bg-white border-3 border-black p-8 shadow-retro">
<span class="text-6xl font-black text-[#F5A623] leading-none block mb-4">"</span>
<p class="text-lg font-bold mb-6">I found out about my college's biggest hackathon through CampusConnect just 2 days before registration closed. Won 2nd place!</p>
<div class="border-t-2 border-black pt-4">
<p class="font-black uppercase">Aryan Mehta</p>
<p class="text-sm font-medium">VJTI Mumbai, 2nd Year</p>
</div>
</div>
<div class="bg-white border-3 border-black p-8 shadow-retro">
<span class="text-6xl font-black text-[#4CAF50] leading-none block mb-4">"</span>
<p class="text-lg font-bold mb-6">The anonymous chat helped me make 3 real friends in my first week. It felt way less scary than walking up to strangers.</p>
<div class="border-t-2 border-black pt-4">
<p class="font-black uppercase">Priya Sharma</p>
<p class="text-sm font-medium">DTU Delhi, 1st Year</p>
</div>
</div>
<div class="bg-white border-3 border-black p-8 shadow-retro">
<span class="text-6xl font-black text-[#E05C3A] leading-none block mb-4">"</span>
<p class="text-lg font-bold mb-6">Found my mentor through the platform. He helped me crack my first internship interview. Couldn't have done it alone.</p>
<div class="border-t-2 border-black pt-4">
<p class="font-black uppercase">Karan Patel</p>
<p class="text-sm font-medium">BITS Pilani, 3rd Year</p>
</div>
</div>
</div>
<div class="absolute top-10 left-4 bg-[#4CAF50] border-3 border-black p-2 shadow-retro -rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 8deg; animation-delay: 2.8s;"><span class="material-symbols-outlined text-white">format_quote</span></div>
<div class="absolute top-10 right-4 bg-white border-3 border-black p-2 shadow-retro rotate-10 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -12deg; animation-delay: 3.2s;"><span class="material-symbols-outlined">favorite</span></div>
<div class="absolute bottom-10 left-4 bg-white border-3 border-black p-2 shadow-retro -rotate-8 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 3.6s;"><span class="material-symbols-outlined">thumb_up</span></div>
<div class="absolute bottom-10 right-4 bg-[#E05C3A] border-3 border-black p-2 shadow-retro rotate-12 -z-10 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 4.0s;"><span class="material-symbols-outlined text-white">sentiment_satisfied</span></div>
</section>


<!-- Contact Section -->
<!-- About Us Section -->
<!-- Footer -->
<section class="bg-retro-yellow py-12 px-6 relative overflow-hidden border-black max-w-6xl mx-auto"><div class="hidden lg:block absolute left-20 top-10 bg-[#E05C3A] border-3 border-black p-4 shadow-retro rotate-10 -z-0 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: 10deg; animation-delay: 6.8s;"><span class="material-symbols-outlined text-white">bolt</span></div><div class="hidden lg:block absolute right-20 top-10 bg-[#4CAF50] border-3 border-black p-4 shadow-retro -rotate-8 -z-0 w-12 h-12 flex items-center justify-center floating-icon-box" style="--rotation: -8deg; animation-delay: 7.2s;"><span class="material-symbols-outlined text-white">flag</span></div>
<!-- Side Margin Decorations -->
<div class="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 -z-0 floating-icon-box">
<div class="bg-[#4CAF50] border-3 border-black p-6 shadow-retro -rotate-12 floating-icon-box" style="--rotation: -12deg; animation-delay: 7.6s;">
<span class="material-symbols-outlined text-5xl text-white">rocket_launch</span>
</div>
</div>
<div class="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 -z-0 floating-icon-box">
<div class="bg-white border-3 border-black p-6 shadow-retro rotate-12 floating-icon-box" style="--rotation: 12deg; animation-delay: 8.0s;">
<span class="material-symbols-outlined text-5xl text-black">star</span>
</div>
</div>
<!-- Main CTA Card -->
<div class="max-w-4xl mx-auto bg-white border-3 border-black p-12 shadow-retro relative z-10 flex flex-col items-center text-center">
<h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
            Ready to connect with your campus?
        </h2>
<p class="text-xl font-bold text-gray-800 mb-10 max-w-2xl">
            Join thousands of students already discovering events, mentors, and communities on CampusConnect.
        </p>
<div class="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
<button class="bg-[#4CAF50] border-3 border-black px-10 py-4 text-xl font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                Get Started
            </button>
<button class="bg-white border-3 border-black px-10 py-4 text-xl font-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all uppercase">
                Learn More
            </button>
</div>
</div>
</section> */}

{/* 
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
<a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">TW</a>
<a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">IG</a>
<a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">LN</a>
<a class="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">GH</a>
</div>
</div>
</div>
<div class="max-w-6xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-gray-400 font-bold">© 2024 CampusConnect. All rights reserved.</p>
<p class="font-bold">Made with ❤️ for Students</p>
</div>
</footer> */}
</body></html>