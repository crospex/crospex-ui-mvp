import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Star, Users, Award } from 'lucide-react';

const ExpertLoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    // Placeholder for Google Auth logic
    console.log("Logging in with Google...");
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-sans selection:bg-primary/30 selection:text-primary-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src="/assets/humpstac_logo_bgblack.png"
                alt="Logo"
                className="w-10 h-10 md:w-16 md:h-16 rounded-xl object-contain scale-125 md:scale-120"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Kurospex</span>
          </div>
        </Link>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-10 lg:py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Info */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6 uppercase">
              Expert Network
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Validate the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Industrial Inspection AI</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-md">
              Join a vetted network of certified domain experts validating high-stakes inspection datasets used in critical infrastructure systems.            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Mission-Critical Impact</h3>
                <p className="text-sm text-slate-400">Your reviews directly influence the accuracy and reliability of AI systems deployed in power grids, pipelines, and industrial facilities.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Global Peer-Level Network</h3>
                <p className="text-sm text-slate-400">Collaborate with experienced inspectors, NDT engineers, and infrastructure specialists working across global asset classes.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Flexible, Paid Validation</h3>
                <p className="text-sm text-slate-400">Review datasets on your own schedule. Get compensated for high-skill validation work—not crowd labor.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Login */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-3xl blur opacity-75"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 lg:p-12 rounded-3xl shadow-2xl text-center">
            <div className="mb-8">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-slate-700">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Expert Access</h2>
              <p className="text-slate-400 text-sm">Sign in to access validation tasks, review queues, and quality feedback.</p>
            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              <span>Continue with Google</span>
            </button>

            <div className="mt-8 pt-8 border-t border-slate-800">
              <p className="text-xs text-slate-500 leading-relaxed">
                By continuing, you agree to Kurospex's <a href="#" className="text-slate-400 hover:text-white underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-slate-400 hover:text-white underline underline-offset-4">Privacy Policy</a>.
              </p>
            </div>
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

export default ExpertLoginPage;
