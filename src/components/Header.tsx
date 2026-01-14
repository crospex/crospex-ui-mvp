import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/70 backdrop-blur-lg border-b border-slate-200/50 shadow-sm'
        : 'bg-bg-soft border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/assets/crospec_logo_bgwhite.png"
              alt="Logo"
              className="w-10 h-10 md:w-10 md:h-10 mt-1 rounded-xl object-contain"
            />
            <span className="text-3xl font-bold tracking-tight text-slate-900">
              crospec
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex justify-center space-x-8 text-sm font-semibold text-slate-600 -ml-12">
            <Link
              to="/challenges"
              className={`hover:text-primary transition-colors ${location.pathname === '/challenges' ? 'text-primary' : ''}`}
            >
              Challenges
            </Link>
            <Link
              to="/#approach"
              className={`hover:text-primary transition-colors ${location.hash === '#approach' ? 'text-primary' : ''}`}
            >
              Our Approach
            </Link>
            <Link
              to="/#audience"
              className={`hover:text-primary transition-colors ${location.hash === '#audience' ? 'text-primary' : ''}`}
            >
              Audience
            </Link>
          </nav>

          {/* Button */}
          <div className="flex justify-end">
            <Link
              to="/pilot"
              className="inline-flex items-center px-5 py-2.5 text-sm font-bold rounded-lg transition-all
          text-white bg-[#4c4ff3] hover:bg-primary-dark shadow-md shadow-primary/20"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
