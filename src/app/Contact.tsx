import React, { useEffect } from 'react';
import { ContactHero } from './components/contact/ContactHero';
import { ContactContent } from './components/contact/ContactContent';
import { useLocation } from 'react-router-dom';

export function Contact() {
  const location = useLocation();

  // Scroll to top on mount and handle scrolling to a specific section when navigated with state/hash
  useEffect(() => {
    window.scrollTo(0, 0);

    // If navigation state asked to scroll to a specific id
    const stateTarget = (location.state as any)?.scrollTo;
    if (stateTarget) {
      const el = document.getElementById(stateTarget);
      if (el) {
        // delay slightly to ensure element is mounted
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }

    // If there's a hash in the URL, try to scroll to it
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const el = document.getElementById(hashId);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }, [location]);

  return (
    <>
      <ContactHero />
      <ContactContent />
    </>
  );
}
