import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/forms/ContactForm';
import { contactInfo, reviews } from '@/data/constants';
import { 
  MapPinIcon, 
  BuildingOfficeIcon, 
  ClockIcon, 
  PhoneIcon, 
  ShieldCheckIcon as WheelchairIcon 
} from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us for emergency services, scheduled transport bookings, or general inquiries about our comprehensive medical transportation services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <BuildingOfficeIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Building</p>
                      <p className="text-gray-600">{contactInfo.building}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <ClockIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Hours</p>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <WheelchairIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 font-medium">Accessibility</p>
                      <p className="text-gray-600">{contactInfo.accessibility}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Map and Reviews */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.241435442231!2d-95.49743492374743!3d29.70876657556055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c2c198e4ef9b%3A0x7f3e84f8a87a3a8!2s6776%20Southwest%20Fwy%20%23%20532%2C%20Houston%2C%20TX%2077074!5e0!3m2!1sen!2sus!4v1708977551811!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Adjuvant Ambulance Transport Location"
                  />
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  What Our Customers Say
                </h2>
                <div className="space-y-6">
                  {reviews.slice(0, 2).map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, index) => (
                          <StarIcon
                            key={index}
                            className={`h-4 w-4 ${
                              index < review.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm italic mb-2">"{review.text}"</p>
                      <p className="text-gray-600 text-sm font-medium">- {review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
