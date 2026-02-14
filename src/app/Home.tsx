import React from 'react';
import { Hero } from './components/Hero';
import { ServicesSummary } from './components/ServicesSummary';
import { Benefits } from './components/Benefits';
import { ServicesGrid } from './components/ServicesGrid';

export function Home() {
  return (
    <>
      <Hero />
      <ServicesSummary />
      <Benefits />
      <ServicesGrid />
    </>
  );
}
