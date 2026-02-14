import React from 'react';
import { Scale, FileSignature, Users } from 'lucide-react';

export function ServicesSummary() {
  const services = [
    {
      title: "Temporary & Contract Staffing",
      icon: <Scale size={48} className="text-[#C5A065] mb-4 stroke-[1.5]" />,
      items: [
        "Flexible workforce solutions to meet seasonal demands or project-based needs",
        "Permanent Placement: Identify and hire the best talent for long-term success",
        "Executive Search & Leadership Solutions: Find experienced leaders who drive growth and innovation",
        "Workforce Consulting: Strategic guidance on talent acquisition, retention, and workforce planning"
      ]
    },
    {
      title: "Compliance & Reporting",
      icon: <FileSignature size={48} className="text-[#C5A065] mb-4 stroke-[1.5]" />,
      items: [
        "Employer Payment Summary (EPS) filings",
        "Auto-Enrolment assessments & compliance returns",
        "Gender pay-gap and holiday-pay reporting",
        "P11D & benefits-in-kind preparation",
        "HMRC liaison & audit support"
      ]
    },
    {
      title: "HR & Employee Administration",
      icon: <Users size={48} className="text-[#C5A065] mb-4 stroke-[1.5]" />,
      items: [
        "New-starter onboarding & right-to-work checks",
        "Contract & letter drafting (offer, variation, termination)",
        "Absence & leave tracking (holiday, sickness, parental leave)",
        "HR data maintenance and GDPR-compliant record-keeping"
      ]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-[#C5A065] font-serif text-center mb-16 tracking-wide">
          OUR SERVICES FOR YOU
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#f4f4f4] p-8 text-center flex flex-col items-center h-full hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl text-[#C5A065] font-serif mb-6">{service.title}</h3>
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    {idx > 0 && <span className="text-[#C5A065] text-xs my-2">›</span>}
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
