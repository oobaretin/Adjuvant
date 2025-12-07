import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BookingForm from '@/components/forms/BookingForm';
import { contactInfo } from '@/data/constants';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone,
  Mail,
  MessageSquare,
  Ambulance,
  HeartPulse,
  ShieldCheck
} from 'lucide-react';

export default function BookTransportPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Medical Transport
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your medical transportation service with our professional team
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Booking Form */}
            <BookingForm />

            {/* Service Information */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-600 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-gray-700 font-medium">Hours</p>
                      <p className="text-gray-600 text-sm">{contactInfo.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:text-blue-700">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Ambulance className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Emergency & Non-Emergency Transport</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HeartPulse className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Licensed EMTs & Paramedics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Wheelchair Accessible Vehicles</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">24/7 Availability</span>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Situations</h4>
                <p className="text-red-700 text-sm mb-3">
                  For life-threatening emergencies, please call 911 immediately or our emergency line:
                </p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-red-600 font-semibold text-lg hover:text-red-700"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
