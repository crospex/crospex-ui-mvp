import React from 'react';
import { Zap, Droplets, Factory, Binary, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Power Utilities",
      description: "Critical infrastructure monitoring for transmission and distribution networks.",
      items: ["Tower & hardware inspection", "Substation monitoring", "Solar micro-fracture detection"],
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Oil & Gas",
      description: "High-consequence asset integrity management for upstream and midstream.",
      items: ["Pipeline corrosion analysis", "Offshore structural health", "Valve & flange inspection"],
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial Infra",
      description: "Programmatic inspection for civil and industrial infrastructure assets.",
      items: ["Concrete spalling detection", "Telecom asset maintenance", "Railway fastener audit"],
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    },
    {
      icon: <Binary className="w-6 h-6" />,
      title: "Technology Partners",
      description: "High-fidelity data for teams building the next generation of inspection AI.",
      items: ["Tier 1 perception teams", "Robotics software labs", "Industrial AI research"],
      color: "text-primary",
      bg: "bg-primary/10"
    }
  ];

  return (
    <section id="audience" className="relative py-24 bg-white overflow-hidden">
      {/* Refined Background Design */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #f1f5f9 1px, transparent 1px),
              linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Soft Radial Gradient for Depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_#ffffff_100%)]"></div>

        {/* Very Subtle Accent Blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary-dark border border-primary/20 mb-6">
            Target Sectors
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Precision Data for <span className="text-primary-dark bg-clip-text bg-gradient-to-r from-primary to-accent">High-Stakes</span> Environments
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            We partner with enterprise teams where detection failures aren't just bugs—they're critical risks. Our pipeline is tuned for the specific noise and complexity of industrial data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="group flex flex-col p-8 rounded-3xl bg-white/50 backdrop-blur-sm border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className={`mb-6 w-12 h-12 rounded-2xl ${aud.bg} ${aud.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                {aud.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{aud.title}</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                {aud.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {aud.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-primary transition-colors"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="#"
                className="group inline-flex"
              >
                <div className="mt-8 pt-6 border-t border-slate-100/50 w-full flex items-center text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">
                  <span>Explore Use Case</span>
                  <ArrowRight className="ml-2 w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
