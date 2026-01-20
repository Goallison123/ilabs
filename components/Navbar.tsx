
import React from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Curriculum', href: '#curriculum' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">
            SILVER <span className="text-slate-400 font-light">by Sybella</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#mission"
            className="bg-slate-900 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-slate-800 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
