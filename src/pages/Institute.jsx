import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import InstituteHero from '../components/institute/InstituteHero';
import InstituteStats from '../components/institute/InstituteStats';
import PopularPrograms from '../components/institute/PopularPrograms';
import WhyChooseUs from '../components/institute/WhyChooseUs';
import LearningApproach from '../components/institute/LearningApproach';
import TechnologyOrbit from '../components/institute/TechnologyOrbit';
import Instructors from '../components/institute/Instructors';
import TestimonialSlider from '../components/institute/TestimonialSlider';
import AdmissionsTimeline from '../components/institute/AdmissionsTimeline';
import InstituteFAQ from '../components/institute/InstituteFAQ';
import InstituteCTA from '../components/institute/InstituteCTA';

const Institute = () => {
  return (
    <PageTransition>
      <div className="w-full overflow-hidden bg-[#050505] text-white">
        <InstituteHero />
        <InstituteStats />
        <PopularPrograms />
        <WhyChooseUs />
        <LearningApproach />
        <TechnologyOrbit />
        <Instructors />
        <TestimonialSlider />
        <AdmissionsTimeline />
        <InstituteFAQ />
        <InstituteCTA />
      </div>
    </PageTransition>
  );
};

export default Institute;
