import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ShieldCheck, Lock, Eye, FileText, AlertTriangle } from 'lucide-react';

export default function HIPAAPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ShieldCheck className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">HIPAA Compliance</h1>
            <p className="text-xl text-gray-600">
              Protecting Your Health Information Privacy
            </p>
          </div>

          <div className="prose prose-gray max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-blue-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Important:</strong> This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
                  </p>
                </div>
              </div>
            </div>

            <h2>Our Commitment to Your Privacy</h2>
            <p>
              Adjuvant Ambulance Transport is committed to protecting the privacy and confidentiality of your 
              health information. We are required by law to maintain the privacy of your protected health 
              information (PHI) and to provide you with this notice of our legal duties and privacy practices.
            </p>

            <h2>What is Protected Health Information (PHI)?</h2>
            <p>
              Protected Health Information includes any information about your health status, provision of 
              health care, or payment for health care that can be linked to you. This includes:
            </p>
            <ul>
              <li>Medical records and treatment information</li>
              <li>Insurance and billing information</li>
              <li>Personal identifiers (name, address, phone number, etc.)</li>
              <li>Medical history and diagnoses</li>
              <li>Medication information</li>
              <li>Transportation records and care notes</li>
            </ul>

            <h2>How We May Use and Disclose Your Health Information</h2>
            
            <h3>Treatment</h3>
            <p>
              We may use and disclose your health information to provide, coordinate, or manage your health 
              care and any related services. This includes sharing information with other healthcare providers 
              involved in your care.
            </p>

            <h3>Payment</h3>
            <p>
              We may use and disclose your health information to obtain payment for services we provide to you. 
              This may include billing your insurance company, Medicare, or Medicaid.
            </p>

            <h3>Healthcare Operations</h3>
            <p>
              We may use and disclose your health information for our healthcare operations, including quality 
              assessment, training programs, and administrative activities.
            </p>

            <h2>Special Situations</h2>
            
            <h3>Required by Law</h3>
            <p>
              We may disclose your health information when required by federal, state, or local law.
            </p>

            <h3>Public Health Activities</h3>
            <p>
              We may disclose your health information for public health activities such as disease reporting, 
              health surveillance, and investigations.
            </p>

            <h3>Law Enforcement</h3>
            <p>
              We may disclose your health information in response to a court order, subpoena, or other lawful 
              process.
            </p>

            <h3>Serious Threat to Health or Safety</h3>
            <p>
              We may disclose your health information if we believe it is necessary to prevent or lessen a 
              serious threat to your health or safety or that of another person.
            </p>

            <h2>Your Rights Regarding Your Health Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Eye className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Right to Inspect and Copy</h3>
                </div>
                <p className="text-sm text-gray-600">
                  You have the right to inspect and copy your health information, with some exceptions.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Right to Request Amendment</h3>
                </div>
                <p className="text-sm text-gray-600">
                  You may request that we amend your health information if you believe it is incorrect or incomplete.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Lock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Right to Request Restrictions</h3>
                </div>
                <p className="text-sm text-gray-600">
                  You may request restrictions on how we use or disclose your health information.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <ShieldCheck className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-lg font-semibold">Right to Confidential Communications</h3>
                </div>
                <p className="text-sm text-gray-600">
                  You may request that we communicate with you in a specific way or at a specific location.
                </p>
              </div>
            </div>

            <h2>Our Security Measures</h2>
            <p>
              We have implemented appropriate administrative, physical, and technical safeguards to protect 
              your health information against unauthorized access, use, or disclosure. These measures include:
            </p>
            <ul>
              <li>Secure storage of physical records</li>
              <li>Encrypted electronic communications</li>
              <li>Access controls and user authentication</li>
              <li>Regular security training for staff</li>
              <li>Regular security assessments and updates</li>
            </ul>

            <h2>Breach Notification</h2>
            <p>
              In the event of a breach of your unsecured health information, we will notify you in writing 
              as required by law. We will also notify the appropriate authorities and take steps to mitigate 
              any harm.
            </p>

            <h2>Changes to This Notice</h2>
            <p>
              We reserve the right to change this notice and our privacy practices. Any changes will apply 
              to all health information we maintain. We will post the revised notice on our website and 
              provide you with a copy upon request.
            </p>

            <h2>Complaints</h2>
            <p>
              If you believe your privacy rights have been violated, you may file a complaint with us or 
              with the Secretary of Health and Human Services. We will not retaliate against you for filing 
              a complaint.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="mb-2">
                <strong>Privacy Officer:</strong> Adjuvant Ambulance Transport<br />
                <strong>Address:</strong> 6776 Southwest Fwy # 532, Houston, TX 77074<br />
                <strong>Phone:</strong> (281) 704-1077<br />
                <strong>Email:</strong> privacy@adjuvantambulance.com
              </p>
              <p className="text-sm text-gray-600 mt-4">
                <strong>U.S. Department of Health and Human Services:</strong><br />
                Office for Civil Rights<br />
                200 Independence Avenue, S.W.<br />
                Washington, D.C. 20201<br />
                Phone: 1-877-696-6775
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
