import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedServices from '../components/home/FeaturedServices';
import FeaturedWork from '../components/home/FeaturedWork';
import Process from '../components/home/Process';
import Values from '../components/home/Values';
import Team from '../components/home/Team';
import Insights from '../components/home/Insights';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <PageTransition>
      <div className="w-full">
        <Hero />
        <TrustStrip />
        <AboutPreview />
        <FeaturedServices />
        <FeaturedWork />
        <Process />
        <Values />
        <Team />
        <Insights />
        <CTA />
      </div>
    </PageTransition>
  );
};

export default Home;
