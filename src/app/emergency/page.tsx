import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { contactInfo } from '@/data/constants';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
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
            <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Request Transport
              </h2>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-base font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-base font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                      placeholder="(281) 123-4567"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                    <label htmlFor="pickupLocation" className="block text-base font-medium text-gray-700 mb-2">
                      Pickup Location *
                    </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                    placeholder="123 Main St, Houston, TX"
                    required
                  />
                </div>

                <div>
                    <label htmlFor="destination" className="block text-base font-medium text-gray-700 mb-2">
                      Destination *
                    </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                    placeholder="Houston Methodist Hospital"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="transportDate" className="block text-base font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="transportDate"
                      name="transportDate"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="transportTime" className="block text-base font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <input
                      type="time"
                      id="transportTime"
                      name="transportTime"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                      required
                    />
                  </div>
                </div>

                <div>
                    <label htmlFor="serviceType" className="block text-base font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation"
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="emergency">Emergency Transport</option>
                    <option value="scheduled">Scheduled Transport</option>
                    <option value="hospital-transfer">Hospital Transfer</option>
                    <option value="discharge">Discharge Transport</option>
                    <option value="dialysis">Dialysis Transport</option>
                    <option value="appointment">Medical Appointment</option>
                  </select>
                </div>

                <div>
                    <label htmlFor="specialRequirements" className="block text-base font-medium text-gray-700 mb-2">
                      Special Requirements
                    </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base touch-manipulation resize-none"
                    placeholder="Wheelchair accessible, oxygen required, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 sm:py-4 px-6 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 touch-manipulation min-h-[48px] text-base"
                >
                  Request Transport
                </button>
              </form>
            </div>

            {/* Service Information */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10">
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
                      <p className="text-gray-600 text-base">{contactInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-gray-700 font-medium">Hours</p>
                      <p className="text-gray-600 text-base">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features */}
              <div className="bg-white rounded-lg shadow-lg p-8 sm:p-10">
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
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <h4 className="text-lg font-semibold text-red-800 mb-2">Emergency Situations</h4>
                <p className="text-red-700 text-base mb-3">
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
