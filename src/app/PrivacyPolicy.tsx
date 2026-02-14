import React, { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#2d2d2d]">PRIVACY POLICY</h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            
            {/* Header Info */}
            <div className="space-y-1">
              <h2 className="font-bold text-[#2d2d2d] text-xl">Privacy Policy</h2>
              <p><span className="font-bold">Effective Date:</span> 01/04/2025</p>
              <p><span className="font-bold">Company:</span> Woodborough Admin Services Ltd</p>
              <p><span className="font-bold">Email:</span> admin@waservices-uk.com</p>
              <p><span className="font-bold">ICO Registration Number:</span> C1847274</p>
            </div>

            {/* Intro */}
            <p>
              Woodborough Admin Services Ltd ("we," "our," or "us") is committed to protecting your privacy and complying with applicable UK data protection laws, including the General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our website.
            </p>

            {/* Section 1 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">1. Information We Collect</h3>
              <p>We may collect and process the following personal data from you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">Contact information:</span> Name, email address, phone number, postal address.</li>
                <li><span className="font-bold">Technical data:</span> IP address, browser type, operating system, pages visited, time spent on the website.</li>
                <li><span className="font-bold">Communications:</span> Any information you provide when contacting us via email or online forms.</li>
              </ul>
              <p>We do not collect sensitive personal data unless explicitly provided by you.</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">2. How We Use Your Information</h3>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide information about our services.</li>
                <li>To respond to enquiries and communicate with you.</li>
                <li>To improve our website, services, and user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
              <p>We only process your personal data when there is a lawful basis to do so, such as your consent, the performance of a contract, compliance with legal obligations, or our legitimate interests.</p>
            </div>

             {/* Section 3 */}
             <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">3. Lawful Basis for Processing</h3>
              <p>We rely on the following lawful bases under the UK GDPR:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your consent (where you have opted in to receive communications).</li>
                <li>Performance of a contract (e.g., providing requested services).</li>
                <li>Compliance with legal obligations.</li>
                <li>Legitimate interests (e.g., improving our services, marketing communications).</li>
              </ul>
            </div>

             {/* Section 4 */}
             <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">4. Sharing Your Information</h3>
              <p>We do not sell or rent your personal data. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trusted third-party service providers who assist us in operating our website or delivering services, under strict confidentiality agreements.</li>
                <li>Regulatory or legal authorities if required by law or to protect our rights.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">5. Data Retention</h3>
              <p>We retain personal data only for as long as necessary to fulfil the purposes outlined above or as required by law. Once no longer needed, personal data will be securely deleted or anonymised.</p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">6. Your Rights</h3>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-bold">Access:</span> Request access to your personal data.</li>
                <li><span className="font-bold">Rectification:</span> Request correction of inaccurate or incomplete data.</li>
                <li><span className="font-bold">Erasure:</span> Request deletion of your personal data ("right to be forgotten").</li>
                <li><span className="font-bold">Restriction:</span> Request limitation of processing your data.</li>
                <li><span className="font-bold">Data portability:</span> Receive your personal data in a structured, commonly used format.</li>
                <li><span className="font-bold">Objection:</span> Object to processing for direct marketing or legitimate interests.</li>
                <li><span className="font-bold">Withdraw consent:</span> If processing is based on consent, you may withdraw it at any time.</li>
              </ul>
              <p>To exercise these rights, contact us at admin@waservices-uk.com.</p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">7. Cookies and Tracking</h3>
              <p>Our website may use cookies to enhance user experience. You can manage cookie preferences through your browser settings.</p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">8. Data Security</h3>
              <p>We implement appropriate technical and organisational measures to protect personal data against unauthorised access, loss, misuse, or alteration.</p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">9. International Transfers</h3>
              <p>We do not transfer personal data outside the UK or European Economic Area (EEA) unless necessary and only under lawful mechanisms, such as standard contractual clauses.</p>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">10. Changes to This Policy</h3>
              <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Effective Date."</p>
            </div>

            {/* Section 11 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d2d2d]">11. Contact Us</h3>
              <p>If you have questions about this Privacy Policy or our data practices, contact us at:</p>
              <p className="font-bold">Woodborough Admin Services Ltd</p>
              <p>Email: admin@waservices-uk.com</p>
            </div>

            {/* Note */}
            <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
              <p>Note: This Privacy Policy is for general guidance and does not constitute legal advice. For specific legal advice, consult a qualified UK data protection lawyer.</p>
            </div>

          </div>
        </div>
      </main>

      {/* Disclaimer - Centered with center text alignment */}
      <div className="bg-white py-12 px-6 md:px-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-sm text-gray-600 space-y-2 text-center">
          <p>
            <span className="font-bold text-[#2d2d2d]">*Disclaimer</span> - Woodborough Admin Services Ltd (The Service Provider) may outsource payroll, HR, or administrative obligations to third-party providers, without affecting the Worker's rights under any Agreement.
          </p>
          <p>
            Registered with the ICO (UK). Registration Number: ZC061312.
          </p>
          <p>
            Information provided is for general purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </>
  );
}
