import React from "react";

const Footer = () => {
  return (
    <div>
      {/* FOOTER */}

      <footer className="bg-black text-white py-20 px-6 border-t-4 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="bg-white text-black border-3 border-white px-6 py-2 w-fit">
              <h2 className="text-2xl font-bold tracking-tighter uppercase">
                CampusConnect
              </h2>
            </div>
            <p className="font-bold text-gray-400">
              The ultimate platform for modern campus life. Connect, discover,
              and grow.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase mb-6">Explore</h4>
            <ul className="flex flex-col gap-3 font-bold">
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Find Mentors
                </a>
              </li>
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Join Communities
                </a>
              </li>
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Anonymous Chat
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase mb-6">Platform</h4>
            <ul className="flex flex-col gap-3 font-bold">
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-retro-yellow transition-colors" href="#">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase mb-6">Connect</h4>
            <div className="flex flex-wrap gap-3">
              <a className="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">
                TW
              </a>
              <a className="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">
                IG
              </a>
              <a className="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">
                LN
              </a>
              <a className="w-12 h-12 border-3 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all shadow-retro-white" href="#">
                GH
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 font-bold">
            © 2024 CampusConnect. All rights reserved.
          </p>
          <p className="font-bold">Made with ❤️ for Students</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;