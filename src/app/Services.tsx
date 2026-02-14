import React, { useEffect } from 'react';
import { ServicesHero } from './components/services/ServicesHero';
import { ServiceSection } from './components/services/ServiceSection';

// Import service images
import complianceImg from '../assets/warehouse-worker-hand-pointing-inventory-statistics-tablet.jpg';
import cateringImg from '../assets/lifestyle-people-learning-make-sushi.jpg';
import warehouseImg from '../assets/african-american-employees-manage-packages-crates-import-export-depot.jpg';
import adminImg from '../assets/job-candidate-wheelchair-signing-new-employment-contract-after-interview.jpg';
import itImg from '../assets/portrait-happy-server-room-worker-developing-disaster-recovery-plans.jpg';
import constructionImg from '../assets/cropped-shot-dark-skinned-contractor-holding-touch-pad-entering-data-while-working-new-housing-project-sitting-desk-with-drawings-scale-model-house-blueprint-rolls-ruler-helmets.jpg';

export function Services() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "COMPLIANCE & REPORTING",
      items: [
        "Employer Payment Summary (EPS) filings",
        "Auto-Enrolment assessments & compliance returns",
        "Gender pay-gap and holiday-pay reporting",
        "P11D & benefits-in-kind preparation",
        "HMRC liaison & audit support"
      ],
      image: complianceImg
    },
    {
      title: "CATERING STAFFING",
      subtitle: "Professional team for exceptional food service and events",
      items: [
        "Chefs",
        "Servers",
        "Kitchen porters",
        "Event coordinators",
        "Catering assistants"
      ],
      image: cateringImg
    },
    {
      title: "WAREHOUSE STAFFING",
      subtitle: "Reliable team for efficient inventory and logistics management",
      items: [
        "Warehouse managers",
        "Forklift operators",
        "Pickers and packers",
        "Inventory clerks",
        "Shipping coordinators"
      ],
      image: warehouseImg
    },
    {
      title: "ADMIN STAFFING",
      subtitle: "Skilled professionals for office and administrative roles",
      items: [
        "Office managers",
        "Receptionists",
        "Data entry specialists",
        "Administrative assistants",
        "Executive secretaries"
      ],
      image: adminImg
    },
    {
      title: "IT STAFFING",
      subtitle: "Tech professionals for cutting-edge technological solutions",
      items: [
        "Software developers",
        "Network engineers",
        "Cybersecurity specialists",
        "Cloud computing experts",
        "IT support technicians"
      ],
      image: itImg
    },
    {
      title: "CONSTRUCTION STAFFING",
      subtitle: "Skilled workforce for efficient and safe building projects",
      items: [
        "Project managers",
        "Skilled tradespeople",
        "General labourers",
        "Heavy equipment operators",
        "Safety officers"
      ],
      image: constructionImg
    }
  ];

  return (
    <>
      <ServicesHero />
      
      <div id="services-content" className="flex flex-col">
        {services.map((service, index) => (
          <ServiceSection
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            items={service.items}
            imageSrc={service.image}
            isReversed={index % 2 !== 0} // Alternate layout
          />
        ))}
      </div>
    </>
  );
}
