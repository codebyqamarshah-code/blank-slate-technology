import React, { Suspense, lazy } from 'react';
import PageTransition from '../components/layout/PageTransition';
import InstituteHero from '../components/institute/InstituteHero';
import InstituteStats from '../components/institute/InstituteStats';

// Lazy-load heavy/below-fold sections
const PopularPrograms   = lazy(() => import('../components/institute/PopularPrograms'));
const WhyChooseUs       = lazy(() => import('../components/institute/WhyChooseUs'));
const LearningApproach  = lazy(() => import('../components/institute/LearningApproach'));
const TechnologyOrbit   = lazy(() => import('../components/institute/TechnologyOrbit'));   // heavy 3D
const Instructors       = lazy(() => import('../components/institute/Instructors'));
const TestimonialSlider = lazy(() => import('../components/institute/TestimonialSlider'));
const AdmissionsTimeline = lazy(() => import('../components/institute/AdmissionsTimeline'));
const InstituteFAQ      = lazy(() => import('../components/institute/InstituteFAQ'));
const InstituteCTA      = lazy(() => import('../components/institute/InstituteCTA'));

const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center">
    <div className="w-6 h-6 border-2 border-white/10 border-t-white/40 rounded-full animate-spin" />
  </div>
);

const Institute = () => (
  <PageTransition>
    <div className="w-full overflow-hidden bg-[#050505] text-white">
      {/* Above fold — immediate */}
      <InstituteHero />
      <InstituteStats />

      {/* Below fold — lazy */}
      <Suspense fallback={<SectionLoader />}>
        <PopularPrograms />
        <WhyChooseUs />
        <LearningApproach />
        <TechnologyOrbit />
        <Instructors />
        <TestimonialSlider />
        <AdmissionsTimeline />
        <InstituteFAQ />
        <InstituteCTA />
      </Suspense>
    </div>
  </PageTransition>
);

export default Institute;
