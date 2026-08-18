import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';
import ParticleBackground from './components/ui/ParticleBackground';

// Lazy load pages for better performance and smaller initial bundle
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Work = React.lazy(() => import('./pages/Work'));
const InsightsPage = React.lazy(() => import('./pages/Insights'));
const Contact = React.lazy(() => import('./pages/Contact'));
const InstitutePage = React.lazy(() => import('./pages/Institute'));
const Apply = React.lazy(() => import('./pages/Apply'));

// Simple loading fallback
const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#050505]">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      <CustomCursor />
      <ParticleBackground />
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="work" element={<Work />} />
              <Route path="institute" element={<InstitutePage />} />
              <Route path="insights" element={<InsightsPage />} />
              <Route path="contact" element={<Contact />} />
              <Route path="apply" element={<Apply />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ReactLenis>
  );
}

export default App;

