import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-soft/30 pt-12 pb-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img
                  src="/assets/crospex_logo_bgwhite.png"
                  alt="Logo"
                  className="w-16 h-16 rounded-xl object-contain scale-125"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">Crospex</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Transforming raw inspection data into high-recall perception datasets.
            </p>
            <div className="flex gap-3 mt-3 ">
              <SocialIcon icon="𝕏" />
              <SocialIcon icon="in" />
              <SocialIcon icon="gh" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Our Approach</h4>
            <ul className="space-y-4 text-sm text-slate-500 ">
              <li><a href="#approach" className="text-sm text-slate-500 hover:text-primary transition-colors">Data Ingestion</a></li>
              <li><a href="#approach" className="text-sm text-slate-500 hover:text-primary transition-colors">Synthetic Amplification</a></li>
              <li><a href="#approach" className="text-sm text-slate-500 hover:text-primary transition-colors">Active Learning</a></li>
              <li><a href="#approach" className="text-sm text-slate-500 hover:text-primary transition-colors">Expert Validation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Audience</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">Power & Utilities</a></li>
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">Oil & Gas</a></li>
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">Infrastructure</a></li>
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">ML Engineering</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-5">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">Blog & Research</a></li>
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#audience" className="text-sm text-slate-500 hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>

        </div>

        <div className="py-4 border-t border-primary/10 bg-white rounded-2xl p-10 mb-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h5 className="font-bold text-slate-900 mb-2 text-lg tracking-tight">Subscribe to our newsletter</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Get the latest updates on datasets and AI trends. No spam, just high-value insights.</p>
            </div>
            <div className="flex w-full md:w-auto md:min-w-[400px] items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-2 py-2 focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/5 transition-all">
              <input
                type="email"
                placeholder="name@company.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 placeholder-slate-400 outline-none border-none focus:outline-none focus:ring-0 focus:border-none"
              />

              <button className="bg-slate-900 text-white px-6 py-2.5 border-0 outline-none focus:outline-none focus:ring-0 ring-0 rounded-lg text-xs font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-1 text-slate-500">
            <span>© {currentYear} kurospec AI. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap text-slate-500 items-center gap-x-2 gap-y-1">
            <span className="text-slate-500">•</span>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <span className="text-slate-500">•</span>
            <a href="/terms" className="footer-link">Terms of Service</a>
            <span className="text-slate-500">•</span>
            <a href="/cookies" className="footer-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => (
  <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:border-[#6366F1] hover:text-[#6366F1] cursor-pointer transition-all">
    {icon}
  </div>
);

export default Footer;
