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
      <main className="ch-page">
        <Challenges />
      </main>
      <Footer />
    </div>
  );
};

export default ChallengesPage;
