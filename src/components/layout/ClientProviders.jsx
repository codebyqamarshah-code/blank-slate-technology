"use client";
import React from 'react';
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from '../../context/ThemeContext';
import CustomCursor from '../ui/CustomCursor';
import Layout from './Layout';

export default function ClientProviders({ children }) {
  return (
    <ThemeProvider>
      <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
        <CustomCursor />
        <Layout>
          {children}
        </Layout>
      </ReactLenis>
    </ThemeProvider>
  );
}
