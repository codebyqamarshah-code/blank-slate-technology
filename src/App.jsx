import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Work from './pages/Work';
import InsightsPage from './pages/Insights';
import Contact from './pages/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ParticleBackground from './components/ui/ParticleBackground';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      <CustomCursor />
      <ParticleBackground />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ReactLenis>
  );
}

export default App;

