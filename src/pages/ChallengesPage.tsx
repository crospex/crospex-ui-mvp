import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Challenges from '../components/Challenges';

const ChallengesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-bg-soft py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex text-sm font-medium text-slate-500 mb-8">
              <a href="/" className="hover:text-primary transition-colors">Home</a>
              <span className="mx-2">/</span>
              <span className="text-slate-900">Challenges</span>
            </nav>
          </div>
        </div>
        <Challenges />
      </main>
      <Footer />
    </div>
  );
};

export default ChallengesPage;
