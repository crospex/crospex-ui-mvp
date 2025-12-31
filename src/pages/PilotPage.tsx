import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Shield, Zap, CheckCircle2 } from 'lucide-react';

const PilotPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pilot application submitted successfully! Our team will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary/30 selection:text-primary-light font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>

      <nav className="relative z-10 px-6 py-8 max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <Link to="/" className="flex items-center cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="/assets/crospex_logo_bgblack.png"
                alt="Logo"
                className="w-10 h-10 md:w-16 md:h-16 rounded-xl object-contain scale-125 md:scale-120"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Crospex</span>
          </div>
        </Link>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-10 lg:py-10 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column: Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Accelerate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Inspection Intelligence</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-md">
              Join our exclusive enterprise pilot program to transform how you process and analyze critical asset data.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Early Access</h3>
                <p className="text-sm text-slate-400">Be the first to deploy our latest AI models on your specific asset classes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Enterprise Grade</h3>
                <p className="text-sm text-slate-400">Secure, scalable, and compliant infrastructure designed for industrial requirements.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Dedicated Support</h3>
                <p className="text-sm text-slate-400">Direct access to our engineering team for custom integration and tuning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 lg:p-10 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Request Pilot</h2>
            <p className="text-slate-400 text-sm mb-8">Fill out the form below and we'll be in touch.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full name</label>
                <input
                  required
                  type="text"
                  placeholder="Eg. John Doe"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Company name</label>
                <input
                  required
                  type="text"
                  placeholder="Eg. Crospex ai"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Asset Category</label>
                <select className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none">
                  <option>Power & Utilities</option>
                  <option>Oil & Gas</option>
                  <option>Civil Infrastructure</option>
                  <option>Industrial Manufacturing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Primary Challenge</label>
                <textarea
                  rows={4}
                  placeholder="What specific inspection challenges are you looking to solve?"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group relative flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span>Submit Application</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <p className="text-[11px] text-center text-slate-500 leading-relaxed">
                By submitting, you agree to our <a href="#" className="text-slate-400 hover:text-white underline underline-offset-4">Privacy Policy</a>. We'll use your data solely for pilot coordination.
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-slate-500">© 2025 Kurospec AI. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default PilotPage;
