import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Factory, Droplets } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden bg-bg-soft">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent rounded-full blur-[100px]"></div>
      </div>
      {/* New Background Design */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern with Radial Mask */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        ></div>

        {/* Subtle Accent Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xm font-semibold tracking-wide bg-primary/10 text-primary-dark mb-8 border border-primary/20 backdrop-blur-sm">
          <ShieldCheck className="w-3.5 h-3.5 mr-2 text-primary" />
          Inspection-Ready Perception Data as a Service
        </div>

        <h1 className="text-5xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-3">
          Turn your <span className="text-primary-dark">Raw Inspection Data</span> into <span className="text-primary-dark">Training-Ready</span><br />
          Perception Datasets
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          Built with synthetic defects amplification and expert validation to deliver reliable performance in real-world inspection environments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <Link
            to="/pilot"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 text-base font-bold rounded-xl text-white bg-[#4c4ff3] hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 hover:-translate-y-0.5"
          >
            Request Inspection Data Pilot
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            to="/expert-login"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-5 text-base font-semibold rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-primary/20 transition-all hover:border-slate-300"
          >
            Join as Expert
          </Link>
        </div>
      </div>

      {/* Trusted/Industry Section */}
      <div className="relative z-10 w-full py-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xl font-bold uppercase text-slate-400 mb-6 py-2"
            style={{ wordSpacing: '0.25rem' }}>
            Designed for High-Stakes Infrastructure Inspection
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default group">
              <Zap className="w-6 h-6 mr-2 text-slate-400 group-hover:text-primary transition-colors" />
              <span className="font-bold text-lg tracking-tight text-slate-500 group-hover:text-slate-900 transition-colors">POWER UTILITIES</span>
            </div>
            <div className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default group">
              <Droplets className="w-6 h-6 mr-2 text-slate-400 group-hover:text-primary transition-colors" />
              <span className="font-bold text-lg tracking-tight text-slate-500 group-hover:text-slate-900 transition-colors">OIL & GAS</span>
            </div>
            <div className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default group">
              <Factory className="w-6 h-6 mr-2 text-slate-400 group-hover:text-primary transition-colors" />
              <span className="font-bold text-lg tracking-tight text-slate-500 group-hover:text-slate-900 transition-colors">INDUSTRIAL</span>
            </div>
            <div className="flex items-center justify-center grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-default group">
              <div className="w-6 h-6 mr-2 border-2 border-slate-400 group-hover:border-primary rounded-sm flex items-center justify-center transition-colors">
                <div className="w-2 h-2 bg-slate-400 group-hover:bg-primary transition-colors"></div>
              </div>
              <span className="font-bold text-lg tracking-tight text-slate-500 group-hover:text-slate-900 transition-colors">CIVIL INFRA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
