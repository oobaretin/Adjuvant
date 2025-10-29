import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>

          <div className="prose prose-gray max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services of Adjuvant Ambulance Transport ("we", "us", "our"), 
              you accept and agree to be bound by the terms and provision of this agreement. If you do 
              not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Adjuvant Ambulance Transport provides emergency and non-emergency medical transportation 
              services in Houston, Texas and surrounding areas. Our services include but are not limited to:
            </p>
            <ul>
              <li>Emergency medical transport</li>
              <li>Critical care transport</li>
              <li>Trauma transport</li>
              <li>Non-emergency medical transport</li>
              <li>Dialysis transport</li>
              <li>Wheelchair accessible transport</li>
              <li>Scheduled medical appointments</li>
              <li>Hospital discharge transport</li>
            </ul>

            <h2>3. Medical Disclaimer</h2>
            <p>
              Our services are provided by licensed medical professionals, but we are not a substitute 
              for emergency medical care. In case of a life-threatening emergency, call 911 immediately. 
              Our services are intended to provide medical transportation and basic life support as 
              appropriate for the situation.
            </p>

            <h2>4. Service Availability</h2>
            <p>
              While we strive to provide 24/7 emergency services, we cannot guarantee availability at 
              all times due to factors beyond our control, including but not limited to weather conditions, 
              traffic, equipment maintenance, or high demand periods.
            </p>

            <h2>5. Patient Care and Safety</h2>
            <p>
              We are committed to providing safe, professional medical transportation. Our staff are 
              trained and licensed according to state and federal requirements. However, medical 
              transportation involves inherent risks, and we cannot guarantee specific outcomes.
            </p>

            <h2>6. Billing and Payment</h2>
            <p>
              Payment terms will be provided at the time of service scheduling. We accept various 
              forms of payment including insurance, Medicare, Medicaid, and private payment. 
              Billing disputes must be submitted in writing within 30 days of the billing date.
            </p>

            <h2>7. Insurance and Coverage</h2>
            <p>
              While we work with most major insurance providers, coverage is not guaranteed. 
              Patients are responsible for understanding their insurance coverage and any 
              out-of-pocket expenses. We will assist with insurance claims but cannot guarantee payment.
            </p>

            <h2>8. Privacy and Confidentiality</h2>
            <p>
              We are committed to protecting your privacy and maintaining the confidentiality of your 
              medical information in accordance with HIPAA regulations and applicable state and federal laws.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Adjuvant Ambulance Transport shall not be liable 
              for any indirect, incidental, special, consequential, or punitive damages, including but 
              not limited to loss of profits, data, or use, arising out of or relating to our services.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Adjuvant Ambulance Transport, its officers, 
              directors, employees, and agents from any claims, damages, or expenses arising from 
              your use of our services or violation of these terms.
            </p>

            <h2>11. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on our website. Continued use of our services after changes 
              constitutes acceptance of the new terms.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the 
              State of Texas, without regard to conflict of law principles.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Phone: 979-633-8437</li>
              <li>Address: 6776 Southwest Fwy # 532, Houston, TX 77074</li>
              <li>Email: info@adjuvantambulance.com</li>
            </ul>

            <h2>14. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable or invalid, the remaining 
              provisions will remain in full force and effect.
            </p>

            <h2>15. Entire Agreement</h2>
            <p>
              These terms constitute the entire agreement between you and Adjuvant Ambulance Transport 
              regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
