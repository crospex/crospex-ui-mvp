import React from 'react';
import { Download, Cpu, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solution: React.FC = () => {
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Ingest",
      desc: "Securely ingest high-resolution inspection imagery from drones, IoT sensors, and mobile devices into our secure pipeline.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Amplify",
      desc: "Our engine amplifies rare defect classes using physics-aware synthetic generation on your real-world asset data.",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Label",
      desc: "Programmatic labeling combined with active learning ensures high-density, pixel-perfect annotations for your ML models.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Validate",
      desc: "Rigorous expert-in-the-loop validation by certified engineers ensures every label meets enterprise safety standards.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10"
    }
  ];

  return (
    <section id="approach" className="relative py-20 bg-slate-950 text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary-light border border-primary/20 mb-6">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Bridging the Gap Between <br />
              <span className="text-primary-dark bg-clip-text bg-gradient-to-r from-primary to-indigo-400">Physical Reality</span> and AI
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We solve the "rare defect" problem. By combining your real-world asset data with our synthetic amplification engine, we build datasets that prepare your models for the most critical, low-frequency failure modes.
            </p>
          </div>
          <div className="hidden lg:block pb-2">
            <div className="flex items-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <span>The Pipeline</span>
              <div className="w-24 h-[1px] bg-slate-800"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group">
              <div className={`mb-8 w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:border-white/10 transition-all duration-500 shadow-lg shadow-black/20`}>
                {step.icon}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{step.title}</h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>
              <Link
                to="#"
                className="group inline-flex"
              >
                <div className="flex items-center text-[10px] font-bold text-slate-600 uppercase tracking-wider group-hover:text-slate-400 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Feature Highlight Box */}
        <div className="mt-24 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold text-white mb-3">Optimized for Real-World Recall</h4>
              <p className="text-slate-400 leading-relaxed">
                Our approach doesn't just chase benchmark scores. We focus on the "long tail" of defects that human inspectors often miss, ensuring your models are robust in the field.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <div className="px-5 py-2.5 bg-white/10 text-slate-300 rounded-xl text-xs font-bold tracking-widest uppercase border border-primary/20">
                Recall Focused
              </div>
              <div className="px-5 py-2.5 bg-white/10 text-slate-300 rounded-xl text-xs font-bold tracking-widest uppercase border border-white/10">
                Expert Validated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
