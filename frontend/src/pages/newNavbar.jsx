<style>
/* Navbar Custom Styles */

.brutalist-border {
  border: 3px solid #000000;
}

.brutalist-shadow {
  box-shadow: 4px 4px 0px 0px #000000;
}

.brutalist-shadow-hover:hover {
  box-shadow: 2px 2px 0px 0px #000000;
  transform: translate(2px, 2px);
}

button {
  transition: all 0.2s ease;
}
</style>

<nav class="fixed top-0 left-0 right-0 z-50 px-6 py-4">
  <div class="max-w-7xl mx-auto flex items-center justify-between bg-white/30 backdrop-blur-[30px] brutalist-border p-3">

    <!-- Logo -->
    <div class="bg-white brutalist-border px-4 py-1">
      <span class="text-xl font-bold tracking-tighter">CAMPUSCONNECT</span>
    </div>

    <!-- Links -->
    <div class="hidden md:flex gap-4">
      <button class="bg-white brutalist-border brutalist-shadow px-4 py-1 font-bold uppercase hover:bg-black hover:text-white transition-colors">
        Home
      </button>

      <button class="bg-black text-white brutalist-border brutalist-shadow px-4 py-1 font-bold uppercase">
        About Us
      </button>

      <button class="bg-white brutalist-border brutalist-shadow px-4 py-1 font-bold uppercase hover:bg-black hover:text-white transition-colors">
        Contact Us
      </button>
    </div>

    <!-- Auth Buttons -->
    <div class="flex gap-3">
      <button class="bg-brand-green text-white brutalist-border brutalist-shadow brutalist-shadow-hover px-6 py-1 font-bold uppercase">
        Login
      </button>

      <button class="bg-brand-red text-white brutalist-border brutalist-shadow brutalist-shadow-hover px-6 py-1 font-bold uppercase">
        Signup
      </button>
    </div>

  </div>
</nav>