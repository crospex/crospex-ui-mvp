import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const EarlyAccess: React.FC = () => {
  return (
    <section className="py-24 bg-bg-soft border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary-dark border border-primary/20 mb-6">
            Early Access
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            Early Access: MVP Design Partners
          </h2>

          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We’re onboarding a small number of infrastructure inspection teams to
            validate Crospex’s synthetic defect amplification and programmatic
            labeling pipeline on real inspection data.
            <br />
            Design partners receive <span className="italic">
              early access, direct engineering support
            </span> and <span className="italic">influence
            </span> over our roadmap decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link
              to="/pilot"
              className="w-full sm:w-auto flex items-center justify-center px-10 py-5 text-base font-bold rounded-xl text-white bg-primary-dark hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 hover:-translate-y-0.5"
            >
              Request Early Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
