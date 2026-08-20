import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';

// Lazy load pages — each page loads only when visited
const Home         = lazy(() => import('./pages/Home'));
const About        = lazy(() => import('./pages/About'));
const Services     = lazy(() => import('./pages/Services'));
const Work         = lazy(() => import('./pages/Work'));
const Institute    = lazy(() => import('./pages/Institute'));
const InsightsPage = lazy(() => import('./pages/Insights'));
const Contact      = lazy(() => import('./pages/Contact'));
const Apply        = lazy(() => import('./pages/Apply'));

// Minimal spinner — shown while a page chunk is loading
const PageLoader = () => (
  <div className="w-full h-screen flex items-center justify-center bg-[#050505]">
    <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <CustomCursor />
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index        element={<Home />} />
              <Route path="about"     element={<About />} />
              <Route path="services"  element={<Services />} />
              <Route path="work"      element={<Work />} />
              <Route path="institute" element={<Institute />} />
              <Route path="insights"  element={<InsightsPage />} />
              <Route path="contact"   element={<Contact />} />
              <Route path="apply"     element={<Apply />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ReactLenis>
  );
}

export default App;
