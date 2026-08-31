import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Layout from './components/layout/Layout';
import CustomCursor from './components/ui/CustomCursor';

// Direct imports for immediate loading
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Work from './pages/Work';
import Institute from './pages/Institute';
import InsightsPage from './pages/Insights';
import Contact from './pages/Contact';
import Apply from './pages/Apply';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <CustomCursor />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="work" element={<Work />} />
            <Route path="institute" element={<Institute />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="apply" element={<Apply />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;

