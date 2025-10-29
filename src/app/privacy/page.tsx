import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 1, 2025</p>

          <div className="prose prose-gray max-w-none">
            <h2>Introduction</h2>
            <p>
              Adjuvant Ambulance Transport ("we", "us", "our") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your information when you use our services
              and visit our website.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact information (name, phone number, email)</li>
              <li>Location and transport details related to service requests</li>
              <li>Device and usage information when you visit our website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Provide emergency and non-emergency medical transportation services</li>
              <li>Communicate with you regarding requests, scheduling, and support</li>
              <li>Improve our services, safety, and website experience</li>
              <li>Comply with legal, regulatory, and safety requirements</li>
            </ul>

            <h2>Sharing Your Information</h2>
            <p>
              We may share information with hospitals, healthcare providers, and third-party partners as necessary to
              provide services, comply with the law, or protect health and safety. We do not sell your personal data.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement administrative, technical, and physical safeguards designed to protect your information,
              including encryption and access controls. While we strive to protect your data, no system can be 100% secure.
            </p>

            <h2>Your Choices</h2>
            <ul>
              <li>Request access, correction, or deletion of your personal information</li>
              <li>Opt out of non-essential communications</li>
              <li>Contact us for questions about this policy</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For questions or requests regarding this Privacy Policy, contact us at 979-633-8437.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
