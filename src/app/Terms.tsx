import React, { useEffect } from 'react';

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#2d2d2d]">TERMS &amp; CONDITIONS</h1>

          <div className="space-y-8 text-lg leading-relaxed text-gray-700">

            <div className="space-y-1">
              <h2 className="font-bold text-[#2d2d2d] text-xl">Terms of Service</h2>
              <p><span className="font-bold">Effective Date:</span> 16/02/2026</p>
              <p><span className="font-bold">Company:</span> Woodborough Admin Services Ltd</p>
              <p><span className="font-bold">Email:</span> admin@waservices-uk.com</p>
            </div>

            <p>
              These Terms &amp; Conditions ("Terms") govern your access to and use of services provided by Woodborough Admin Services Ltd ("we", "us", or "our"). By accessing our website, contacting us, or using our services you agree to be bound by these Terms. If you do not agree to these Terms, do not use our services.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">1. Services</h3>
              <p>We provide administrative, payroll, HR and related support services tailored to client requirements. Specific services, deliverables, fees, and timelines will be described in any written proposal, quote, or service agreement between you and us (an "Agreement").</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">2. Eligibility</h3>
              <p>You represent that you are legally capable of entering into binding contracts and that you have the authority to enter into an Agreement on behalf of any business you represent.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">3. Fees, Quotes and Payment</h3>
              <p>Fees for our services will be set out in any proposal or Agreement. Unless otherwise stated, fees are exclusive of VAT and other taxes, which will be added where applicable. Payment terms will be set out in the Agreement; late payments may incur interest or suspend services.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">4. Client Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate, complete and timely information and co-operate with us to enable delivery of services.</li>
                <li>You are responsible for ensuring you have the necessary rights to provide any data you share with us.</li>
                <li>Failure to provide required information or co-operation may delay or prevent service delivery and may result in additional fees.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">5. Confidentiality</h3>
              <p>Each party will keep confidential any confidential information received from the other party and will not use or disclose such information except as necessary to perform the Agreement or as required by law.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">6. Data Protection</h3>
              <p>We will process personal data in accordance with our Privacy Policy. By using our services you acknowledge and agree to the ways we collect, use and store personal data as set out in the Privacy Policy.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">7. Intellectual Property</h3>
              <p>All intellectual property rights in materials, methodologies and systems used or developed by us remain our property unless otherwise agreed in writing. You will retain ownership of your pre-existing materials; you grant us a licence to use them for the purpose of providing the services.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">8. Warranties and Disclaimers</h3>
              <p>We will provide services with reasonable skill and care. Except as expressly set out in an Agreement, all warranties, conditions and other terms (whether express or implied) are excluded to the fullest extent permitted by law.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">9. Limitation of Liability</h3>
              <p>Except for death or personal injury caused by our negligence or other liability which cannot be excluded by law, our total liability arising out of or in connection with these Terms or any Agreement will be limited to the amount of fees paid by you for the relevant services in the 12 months preceding the claim, or &pound;10,000, whichever is lower.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">10. Indemnity</h3>
              <p>You agree to indemnify and hold us harmless from any claims, liabilities, losses, damages and expenses arising from your breach of these Terms, misuse of the services, or violation of law.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">11. Termination</h3>
              <p>Either party may terminate an Agreement in accordance with its terms. We may suspend or terminate services immediately if you breach these Terms or fail to pay fees when due.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">12. Governing Law</h3>
              <p>These Terms and any Agreement are governed by and construed in accordance with the laws of England and Wales. The parties submit to the exclusive jurisdiction of the English courts.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">13. Changes to These Terms</h3>
              <p>We may update these Terms from time to time. We will notify changes by posting updated Terms on our website with a revised effective date. Continued use of our services after changes constitutes acceptance of the updated Terms.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">14. Contact</h3>
              <p>If you have questions about these Terms, contact us at:</p>
              <p className="font-bold">Woodborough Admin Services Ltd</p>
              <p>Email: admin@waservices-uk.com</p>
              <p>Address: Penman Way, Leicester, Leicestershire, LE19 1SY</p>
            </div>

            <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
              <p>Note: This document is provided for general information only and does not constitute legal advice. For specific legal guidance tailored to your circumstances, consult a qualified solicitor.</p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default Terms;
