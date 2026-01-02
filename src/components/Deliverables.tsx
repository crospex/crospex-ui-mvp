import React from 'react';
import { FileCode, Activity, Users, SplitSquareVertical, BarChart3, CheckCircle2 } from 'lucide-react';

const Deliverables: React.FC = () => {
  const deliverables = [
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "Training-Ready Datasets",
      desc: "Standardized formats (YOLO, COCO, JSON) or custom proprietary schemas ready for immediate model ingestion.",
      tags: ["YOLO", "COCO", "JSON"]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Balanced Distributions",
      desc: "Synthetic amplification of rare defect classes to ensure statistically significant representation and model recall.",
      tags: ["Synthetic", "Augmentation", "Sampling"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Validation",
      desc: "Every annotation is verified by certified NDT (Non-Destructive Testing) engineers to ensure ground truth accuracy.",
      tags: ["NDT Certified", "QA"]
    },
    {
      icon: <SplitSquareVertical className="w-6 h-6" />,
      title: "Robust Stratification",
      desc: "Mathematically sound train/val/test splits that prevent data leakage and ensure reliable performance metrics.",
      tags: ["No Leakage", "Math-First"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Quality Analytics",
      desc: "Detailed reports on class density, intersection-over-union (IoU) scores, and label consistency across the dataset.",
      tags: ["Analytics", "Reports"]
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Sticky Header */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
              Deliverables
            </div>
            <h2 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              High-Fidelity <br />
              <span className="text-primary-dark">Perception Assets</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We deliver pure, validated data. No complex dashboards or proprietary platforms required. Just the ground truth your models need.
            </p>
            <div className="space-y-4 pt-4">
              {["Zero platform lock-in", "Direct S3/Azure delivery", "API-first integration"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {deliverables.map((d, idx) => (
              <div
                key={idx}
                className={`group p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 ${idx === 0 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {d.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{d.title}</h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:bg-slate-100 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
