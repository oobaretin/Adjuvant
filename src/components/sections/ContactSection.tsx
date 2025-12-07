import { contactInfo } from '@/data/constants';
import { 
  MapPin, 
  Building2, 
  Clock3, 
  Phone,
  Mail,
  ShieldCheck 
} from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Address</p>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Building2 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Building</p>
                    <p className="text-gray-600">{contactInfo.building}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock3 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Hours</p>
                    <p className="text-gray-600">{contactInfo.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Accessibility</p>
                    <p className="text-gray-600">{contactInfo.accessibility}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
}
