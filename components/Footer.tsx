
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-slate-900 rounded-sm"></div>
              <span className="font-display font-bold text-xl tracking-tight">SILVER</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of global innovators with 21st-century tech skills. Free, community-focused, and problem-driven.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Initiative</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li><a href="#" className="hover:text-slate-900">About Us</a></li>
                <li><a href="#" className="hover:text-slate-900">Curriculum</a></li>
                <li><a href="#" className="hover:text-slate-900">Showcase</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li><a href="#" className="hover:text-slate-900">Partner with us</a></li>
                <li><a href="#" className="hover:text-slate-900">Donate</a></li>
                <li><a href="#" className="hover:text-slate-900">Mentorship</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Contact</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li>Global Network</li>
                <li>hello@silver.systems</li>
                <li>@silver_sybella</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400">© 2025 SILVER by Sybella Systems. All rights reserved.</p>
          <div className="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
