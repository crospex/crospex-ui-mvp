import React from 'react';
import { AlertCircle, Layers, Timer, ZapOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Challenges: React.FC = () => {
  const problems = [
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Messy, Inconsistent Data",
      description: "Raw inspection data from drones and field teams is often sparse, unorganized, and varied in quality, making it difficult to process at scale.",
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: <ZapOff className="w-8 h-8 text-primary" />,
      title: "Rare Defect Representation",
      description: "Critical defects are statistically rare. Models struggle to learn failure modes because they simply don't see enough real-world examples.",
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      icon: <Timer className="w-8 h-8 text-primary" />,
      title: "Inconsistent Labeling",
      description: "Manual labeling is slow, expensive, and prone to subjective errors, which directly impacts the accuracy and reliability of AI models.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-primary" />,
      title: "Real-World Failure",
      description: "Models trained on perfectly curated data often fail when deployed on aging real-world assets with complex environmental factors.",
      gradient: "from-pink-500/10 to-red-500/10"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-4">The Challenge</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Why Inspection AI Fails in the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Real World</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              Traditional AI approaches struggle with the complexity and unpredictability of infrastructure inspection. We've identified the core bottlenecks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((p, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-bg-soft rounded-xl w-fit group-hover:scale-110 transition-transform duration-500">
                    {p.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{p.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">{p.description}</p>

                  <Link
                    to="#"
                    className="group inline-flex"
                  >
                    <div className="flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2.5 group-hover:translate-x-0">
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
