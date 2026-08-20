import React, { Suspense, lazy } from 'react';
import PageTransition from '../components/layout/PageTransition';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';

// Lazy-load all below-the-fold sections
const AboutPreview    = lazy(() => import('../components/home/AboutPreview'));
const FeaturedServices = lazy(() => import('../components/home/FeaturedServices'));
const FeaturedWork    = lazy(() => import('../components/home/FeaturedWork'));
const Process         = lazy(() => import('../components/home/Process'));
const Values          = lazy(() => import('../components/home/Values'));
const Team            = lazy(() => import('../components/home/Team'));
const Insights        = lazy(() => import('../components/home/Insights'));
const CTA             = lazy(() => import('../components/home/CTA'));

const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
  </div>
);

const Home = () => (
  <PageTransition>
    <div className="w-full">
      {/* Above fold — loaded immediately */}
      <Hero />
      <TrustStrip />

      {/* Below fold — lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <AboutPreview />
        <FeaturedServices />
        <FeaturedWork />
        <Process />
        <Values />
        <Team />
        <Insights />
        <CTA />
      </Suspense>
    </div>
  </PageTransition>
);

export default Home;
